import CategoryResponse from '../Mapping/Response/categoryResponse';
import ApiService from '../Util/ApiService';
import ApiResponse from '../Mapping/ApiResponse';
import Urls from '../Util/Urls';

export const getListService = () => {
    return new ApiService({
        baseURL: process.env.REACT_APP_FURNITURE_DEV_HOST || "",
        endpoint: Urls.CATEGORY.getList,
        parser: parseData
    }).get()
}

const parseData = (data: any) => data?.result.length ? {
    ...data,
    result: data.result.map((item: any) => new CategoryResponse(item))
} : new ApiResponse(data);