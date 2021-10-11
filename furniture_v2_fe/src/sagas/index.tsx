import { all } from "redux-saga/effects"

import { authSaga } from "./authSaga";
import { categorySaga } from './categorySaga';

export default function*(): Generator {
    yield all([
        authSaga(),
        categorySaga()
    ])
}
