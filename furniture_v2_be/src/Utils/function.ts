import { Response } from 'express';
import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import bcrypt from "bcrypt";
import { ProductFactory } from '../Factory/Creator/ProductFactory';

class CommonFunction {
    static instance: CommonFunction;
    constructor() {
        if (!CommonFunction.instance) {
            CommonFunction.instance = this;
        }
        return CommonFunction.instance;
    }
    

    // functions
    static formatInt(numberParams: any, defaultNum: number = 0) {
        return isNaN(numberParams) ? defaultNum : numberParams;
    }

    static customizeLogger(value: any, colors: any) {
        return logger.info(value[colors]);
    }

    static capitalizeFirstLetter(value: string) {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    static getKeyByValue(object: any, value: string) {
        return Object.keys(object).find((key: any) => object[key] === value);
    }

    static getActionResult(result: any, code: number, error:any, value?: string) {
        const num: number = code <= 500 && code >= 400 ? 500 : 200;

        return {
            code,
            result: result === null ? value + TAG_DEFINE.RESULT[num] : result,
            error: error === null ? null : error.message
        }
    }

    static generateJSONObj(value: any) {
        return JSON.parse(JSON.stringify(value));
    }

    static getStoreSchema(value, store) {
        return `${store} ${value}`;
    }

    static async hashPassword(document) {
        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(document.password, salt);

        document.password = hash;
    }

    static async validateGender(document) {
        const gender = parseInt(document.gender) || 0;
        let result = "";
        switch (gender) {
            case 0:
                result = "Male";
            case 1:
                result = "Female";
            case 2:
                result = "Not sure";
            default:
                result = "Male";
        }

        document.gender = result;
    }

    static async UpdateTime(document) {
        const now = Date.now();

        document.updated_at = now;
    }

    static checkSpicialCharacter(value: string) {
        return value.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/);
    }

    static checkPhoneNumberValue(value: string) {
        return value.match(/^\d{11}$/);
    }

    static checkEmailValue(value: string) {
        return value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    static hasNumberInString(value: string) {
        return /\d/.test(value);
    }

    static responseBadRequest(message: string, res: Response) {
        res.json({
            status: TAG_DEFINE.STATUS.failed,
            result: null,
            error: {
                code: 400,
                message: message,
            },
        });
    }

    static responseAuthorizeRequest(message: string, res: Response) {
        res.json({
            status: TAG_DEFINE.STATUS.failed,
            result: null,
            error: {
                code: 501,
                message: message,
            },
        });
    }

    static getAlphabetObject(objectKeys: any) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
        let obj = {};
        alphabet.map((char, n) => {
            objectKeys.length > 0 && objectKeys.map((key, k) => {
                if(n === k) {
                    obj = {...obj, [char]: key};
                }    
            })
        })
        return obj;
    }

    static generateTreeData(data, existingChildren) {
        data.forEach(o => {
            existingChildren.push(o);
            o?.childCate && this.generateTreeData(o?.childCate, existingChildren);
        });
        return existingChildren;
    }
}

export default CommonFunction;
