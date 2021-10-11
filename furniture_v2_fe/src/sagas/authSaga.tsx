import {takeLatest, put, call, all, fork} from "redux-saga/effects"
import Types from "../constant/Types/userType";
import * as Func from "../Util/functions";
import { Action } from 'redux';
import { registerService, loginService, getDetailWithJWTService } from '../Service/authService';
import RegisterRequest from '../Mapping/Request/registerRequest';
import { message, notification } from 'antd';
import TAG_DEFINE from '../constant/tagDefine';
import { ApiResponse } from '../Util/inteface';
import AuthRequest from '../Mapping/Request/authRequest';
import DEFINE_INFORMATION from '../constant/define';

function* register(): Generator {
    yield takeLatest(Types.REGISTER_ACTION, Func.sagaWrapper(function*(action: Action): Generator {
        const data = new RegisterRequest((action as any).payload || {});
        const registerReq = yield call(registerService, data);
        if ((registerReq as ApiResponse).data.status.toUpperCase() === "SUCCESS") {
            message.success(TAG_DEFINE.RESULT.success.replace("%s", TAG_DEFINE.PAGE.CUSTOMER.auth.register.title), 5);
            yield put({type: Types.REGISTER_SUCCESS});
        } else if((registerReq as ApiResponse).data.status.toUpperCase() === "FAILED" && (registerReq as ApiResponse).data.error) {
            message.error((registerReq as ApiResponse).data.error.message, 5);
        }
    }, errorHandle(Types.REGISTER_FAIL)))
};

function* login(): Generator {
    yield takeLatest(Types.LOGIN_ACTION, Func.sagaWrapper(function*(action: Action): Generator {
        const data = new AuthRequest((action as any).payload || {});
        const loginResult = yield call(loginService, data);
        if ((loginResult as ApiResponse).data.status.toUpperCase() === "SUCCESS") {
            message.success(TAG_DEFINE.RESULT.success.replace("%s", TAG_DEFINE.PAGE.CUSTOMER.auth.login.title), 5);
            localStorage.setItem(DEFINE_INFORMATION.LOCAL_STORAGE_KEY.accessToken, (loginResult as ApiResponse).data.result.accessToken);
            yield put({type: Types.LOGIN_SUCCESS});
            yield window.location.href = "/";
        } else if((loginResult as ApiResponse).data.status.toUpperCase() === "FAILED" && (loginResult as ApiResponse).data.error) {
            message.error((loginResult as ApiResponse).data.error?.message, 5);
        }
    }, errorHandle(Types.LOGIN_FAIL)));
};

function* checkUserWithJWT(): Generator {
    yield takeLatest(Types.CHECK_USER_ACTION, Func.sagaWrapper(function*(action: Action): Generator {
        const token = (action as any).payload || "";
        const user = yield call(getDetailWithJWTService, token);
        if((user as any).status.toUpperCase() === "SUCCESS" && (user as any).result) {
            yield put({type: Types.CHECK_USER_SUCCESS, payload: (user as any).result})
        } 
        if((user as any).status.toUpperCase() === "FAILED" && (user as any).error) {
            yield put({type: Types.CHECK_USER_SUCCESS, payload: {
                isLogged: false
            }})
            notification.error({
                message: "Hết phiên làm việc",
                description: "Phiên làm việc đã hết hạn vui lòng đăng nhập lại"
            })
        }
    }, errorHandle(Types.CHECK_USER_FAILED)));
}

function* logout(): Generator {
    yield takeLatest(Types.LOGOUT_ACTION, Func.sagaWrapper(function*(action: Action): Generator {
        localStorage.removeItem(DEFINE_INFORMATION.LOCAL_STORAGE_KEY.accessToken);
        localStorage.removeItem(DEFINE_INFORMATION.LOCAL_STORAGE_KEY.refresh);
        yield put({type: Types.LOGOUT_SUCCESS, payload: {info: null}});
    }, errorHandle(Types.LOGOUT_FAILED)));
}

function errorHandle(errorActionType: any) {
    return Func.sagaErrorHandler(function* (e: any): Generator {
        yield put({ type: errorActionType })
    });
}

export function* authSaga(): Generator {
    yield all([
        fork(register),
        fork(login),
        fork(logout),
        fork(checkUserWithJWT)
    ])
}