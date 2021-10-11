import * as Func from "../Util/functions";
import { takeLatest, all, put, call, fork } from 'redux-saga/effects';
import Types from "../constant/Types/categoryType";
import { getListService } from "../Service/categoryService";
import { message } from 'antd';
import TAG_DEFINE from '../constant/tagDefine';

function* getList(): Generator {
    yield takeLatest(Types.GET_LIST_CATEGORY_ALL_ACTION, Func.sagaWrapper(function*(action): Generator {
        const listCate = yield call(getListService);
        if((listCate as any).status === "SUCCESS" && (listCate as any).result) {
            yield put({type: Types.GET_LIST_CATEGORY_ALL_SUCCESS, payload: (listCate as any).result})
        } else if((listCate as any).status === "SUCCESS" && (listCate as any).error) {
            message.error(TAG_DEFINE.ERROR[500], 5)
        }
    }, errorHandle(Types.GET_LIST_CATEGORY_ALL_FAILED)))
}

function errorHandle(errorActionType: any) {
    return Func.sagaErrorHandler(function* (e: any): Generator {
        yield put({ type: errorActionType })
    });
}

export function* categorySaga(): Generator {
    yield all([
        fork(getList)
    ])
}