import { getRestProps } from './functions';
import TAG_DEFINE from '../constant/tagDefine';
import axios, { AxiosInstance, AxiosStatic, ResponseType } from "axios";
import Methods from "./method";
import * as Func from "./functions";
import ApiResponse from '../Mapping/ApiResponse';

interface AxiosInstances extends Omit<getRestProps, "restProps"> {
    baseURL: string,
    endpoint?: string,
    params?: string,
    query?: string,
    headers?: any
    parser?: Function
}

export default class ApiService {
    private static instance: ApiService;
    private axiosInstance!: AxiosStatic;
    private headers: any;
    private params: any;
    private responseType: ResponseType;
    private endpoint: any
    private endpointParams: any
    private parser: Function | any;
    
    constructor(options: AxiosInstances) {
        // this.getInstance(options);
        this.createServiceInstance(options);
        this.endpointParams = options.endpointParams || {};
        this.endpoint = Func.getPathWithParams(options.endpoint || undefined, this.endpointParams)
        this.headers = options.headers || {};
        this.params = options.params || {};
        this.responseType = options.responseType || "json";
        this.parser = options.parser;
    }

    // public getInstance(options: AxiosInstances) {
    //     if(!ApiService.instance) {
    //         ApiService.instance = new ApiService(options);
    //     }
    //     return ApiService.instance;
    // }

    public createServiceInstance(options: AxiosInstances) {
        if(!options.baseURL) {
            throw new Error(TAG_DEFINE.VALIDATION.require.replace("%s", "Base URL"));
        } else {
            (this.axiosInstance as any) = axios.create({
                baseURL: options.baseURL,
                timeout: 20000,
                responseType: this.responseType
            });
        }
    }

    private getRequestData(data: any) {
        if (data && typeof data.export === 'function') {
            return data.export()
        }
        return data;
    }

    private createRequest(data?: any, method: string = Methods.GET) {
        const dataReq = this.getRequestData(data);
        return new Promise((resolve, reject) => {
            const config = {
                params: this.params || {},
                headers: {
                    ...this.headers,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'type': 'Furniture',
                    data: method === Methods.POST || method === Methods.PUT ? undefined : dataReq,
                }
            };
            const secondParams = method === Methods.PUT || method === Methods.POST ? dataReq : config;
            const thirdParams = method === Methods.PUT || method === Methods.POST ? config : undefined;
            (this.axiosInstance as any)[method](this.endpoint, secondParams, thirdParams)
            .then((response: any) => {
               
                const result = this.parser ? this.parser(response.data) : new ApiResponse({...response, request: data, success: true})
                console.log(result);
                resolve(result)
            })
        })
    }

    public get = (data?: any) => this.createRequest(data, Methods.GET);
    public post = (data?: any) => this.createRequest(data, Methods.POST);
    public put = (data?: any) => this.createRequest(data, Methods.PUT);
    public delete = (data?: any) => this.createRequest(data, Methods.DELETE);
}