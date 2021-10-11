import {createReducer} from '@reduxjs/toolkit';
import { createCategoryAction, getListAllCategoryAction, getDetailCategoryAction, updateCategoryAction, getListAllCategorySuccess, getDetailCategorySuccess, updateCategorySuccess, createCategorySuccess } from '../action/categoryAction';


const initialState = {
    isFetching: false,
    categories: {},
    item: {},
    isSubmit: false,
    isUpdate: false
}

export default createReducer(initialState, reducer => {
    reducer
        .addCase(createCategoryAction, (state, action) => ({...state, isFetching: true}))
        .addCase(getListAllCategoryAction, (state, action) => ({...state, isFetching: true}))
        .addCase(getDetailCategoryAction, (state, action) => ({...state, isFetching: true}))
        .addCase(updateCategoryAction, (state, action) => ({...state, isFetching: true}))
        .addCase(createCategorySuccess, (state, action) => ({...state, isFetching: false}))
        .addCase(getListAllCategorySuccess, (state, action) => ({...state, isFetching: false, categories: (action as any).payload}))
        .addCase(getDetailCategorySuccess, (state, action) => ({...state, isFetching: false}))
        .addCase(updateCategorySuccess, (state, action) => ({...state, isFetching: false}))
})