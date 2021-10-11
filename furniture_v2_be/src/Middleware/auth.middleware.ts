import { NextFunction, Request, Response } from "express";
import UserModel from "../models/User/furniture";
import { UserFactory } from "../Factory/Creator/UserFactory";
import CommonFunction from "../Utils/function";
import TAG_DEFINE from '../Constant/define';
import jwt from 'jsonwebtoken';

export const ValidateRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userFactory = UserFactory.createUser(
    req.body,
    (req.headers as any)["type"]
  );

  const isEmailValid =
    !!(userFactory as any)?.email &&
    !!CommonFunction.checkEmailValue((userFactory as any)?.email);

  const isEmailAvailable = ((await UserFactory.getSchema((req.headers as any)["type"]).find({ email: (userFactory as any).email })) || []).length === 0;
  
  const isValidName =
    !!(userFactory as any)?.name &&
    !CommonFunction.checkSpicialCharacter((userFactory as any)?.name);

  const isValidPhone =
    !!(userFactory as any)?.phone &&
    !CommonFunction.checkPhoneNumberValue((userFactory as any)?.phone);

  const isPhoneAvailable = ((await UserFactory.getSchema((req.headers as any)["type"]).find({ phone: (userFactory as any).phone })) || []).length === 0;

  const isValidAdress = !!(userFactory as any)?.address;
  const isValidPassword = !!(userFactory as any)?.password && !CommonFunction.checkSpicialCharacter((userFactory as any)?.password);

  switch(false) {
      case isValidName: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.USER.name, res)
      case isValidPhone: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.USER.phone, res)
      case isPhoneAvailable: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.USER.unavailablePhone, res)
      case isValidAdress: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.USER.address, res)
      case isEmailValid: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.USER.email, res)
      case isEmailAvailable: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.USER.unavailableEmail, res)
      case isValidPassword: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.USER.password, res)
      default: next()
  }
};

export const ValidateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization").replace("Bearer ", "") || "";
  jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
    if(err) {
      return CommonFunction.responseAuthorizeRequest(err.message, res);
    } else {
      next();
    }
  })
}
