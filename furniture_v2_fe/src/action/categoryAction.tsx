import Types from "../constant/Types/categoryType";
import {createAction} from "@reduxjs/toolkit"

export const createCategoryAction = createAction(Types.CREATE_CATEGORY_ACTION, (data: any) => ({payload: data || {}}));
export const getListAllCategoryAction = createAction(Types.GET_LIST_CATEGORY_ALL_ACTION);
export const getDetailCategoryAction = createAction(Types.GET_DETAIL_CATEGORY_ACTION, (id: any) => ({payload: id || {}}));
export const updateCategoryAction = createAction(Types.UPDATE_CATEGORY_ACTION, (id: string, data: any) => ({payload: {...data, params: id}}))
export const createCategorySuccess = createAction(Types.CREATE_CATEGORY_SUCCESS, (data: any) => ({payload: data || {}}));
export const getListAllCategorySuccess = createAction(Types.GET_LIST_CATEGORY_ALL_SUCCESS);
export const getDetailCategorySuccess = createAction(Types.GET_DETAIL_CATEGORY_SUCCESS, (id: any) => ({payload: id || {}}));
export const updateCategorySuccess = createAction(Types.UPDATE_CATEGORY_SUCCESS, (id: string, data: any) => ({payload: {...data, params: id}}))
