import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import { UserFactory } from "../Factory/Creator/UserFactory";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import e, { Request } from "express";

export default class AuthService {
    public static async RegisterService(req: any) {
        const type = req.headers["type"];
        try {
            const userFactory = UserFactory.createUser(req.body, type);
            const user = UserFactory.createSchema(userFactory, type);

            const result = await user
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.AUTH.REGISTER.success,
                        200
                    )
                )
                .catch((e) => {
                    logger.error(e);
                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.AUTH.REGISTER.failed,
                        500
                    );
                });

            return result;
        } catch (error) {
            logger.error(error);
        }
    }

    public static async LoginService(req: any) {
        const type = req.headers.type;
        const { email, password, username } = req.body;
        try {
            let existingUser: any = await UserFactory.getSchema(type).findOne({email});

            if (!existingUser){
                existingUser = await UserFactory.getSchema(type).findOne({username});
            }

            console.log(existingUser)

            const comparePassword = existingUser && (await bcrypt.compare(password, existingUser?.password));
            
            if (!existingUser || !comparePassword) {
                return CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.AUTH.LOGIN.failed,
                    500
                );
            } else {
                // JWT
                const token = jwt.sign(
                    {
                        _id: existingUser._id
                    },
                    process.env.SECRET_JWT,
                    {expiresIn: '1 day'}
                )
                const result = CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.AUTH.LOGIN.success,
                    200
                );
                return {
                    result,
                    accessToken: token,
                }
            }
        } catch (error) {
            logger.error(error);
        }
    }

    public static async GetDetailUserService(req: any) {
        try {
            const type = req.headers["type"];
            const { id } = req.params || "";
            const user = await UserFactory.getSchema(type).find({
                type,
                _id: id,
            });
            const userFactory = user.map((item) =>
                UserFactory.getUser(item, type)
            );
            return userFactory;
        } catch (e) {
            logger.error(e);
        }
    }

    public static async UpdateUserService(req: any) {
        try {
            const type = req.headers["type"];
            const { id } = req.params || "";
            const currentUser = await this.GetDetailUserService(req);
            const filters = currentUser[0] || {};
            const newRequest = {
                ...currentUser[0],
                ...req.body,
            };
            const updateUser = UserFactory.createUser(newRequest, req.query);
            const updateResult = await UserFactory.getSchema(type)
                .find(filters)
                .updateOne(updateUser)
                .then(() =>
                    CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.AUTH.update,
                        200
                    )
                )
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.AUTH.update,
                        500
                    );
                });
            return updateResult;
        } catch (e) {
            logger.error(e);
        }
    }

    public static async GetUserByJWT(req: Request) {
        try {
            const token: string =  (req.header("Authorization") as string).replace("Bearer ", "");
            const type = req.headers["type"];
            if(token) {
                const userId = jwt.verify(token, process.env.SECRET_JWT);
                const userInfo = userId && await UserFactory.getSchema(type).find({_id: userId._id}) || {};
                return userInfo ? UserFactory.getUser(userInfo[0], (type as string))  : null;
            } else {
                return null;
            }
        } catch(e: any) {
            logger.error(e);
        }
    }
}
