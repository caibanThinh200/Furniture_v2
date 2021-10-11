import ApiService from '../Util/ApiService';
import Urls from '../Util/Urls';
import ApiResponse from '../Mapping/ApiResponse';
import AuthResponse from '../Mapping/Response/authResponse';

export const registerService = (data: any) => {
    return new ApiService({
        baseURL: process.env.REACT_APP_FURNITURE_DEV_HOST || "",
        endpoint: Urls.AUTH.register
    }).post(data);
}

export const loginService = (data: any) => {
    return new ApiService({
        baseURL: process.env.REACT_APP_FURNITURE_DEV_HOST || "",
        endpoint: Urls.AUTH.login
    }).post(data);
}

export const getDetailWithJWTService = (jwt: string) => {
    return new ApiService({
        baseURL: process.env.REACT_APP_FURNITURE_DEV_HOST || "",
        endpoint: Urls.AUTH.token,
        headers: {
            Authorization: `Bearer ${jwt}`
        },
        parser: parseData
    }).get();
}

const parseData = (data?: any) =>  {
    return data.result ? {
        ...data,
        result: new AuthResponse(data.result)
    } : new ApiResponse(data)
}