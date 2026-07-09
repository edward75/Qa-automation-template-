import { APIRequestContext, APIResponse } from '@playwright/test';


export class ApiClient {

    constructor(
        private request: APIRequestContext
    ){}


    async get(
        url:string,
        headers = {}
    ):Promise<APIResponse>{

        return await this.request.get(url,{
            headers
        });

    }


    async post(
        url:string,
        body:any,
        headers={}
    ):Promise<APIResponse>{

        return await this.request.post(url,{
            data:body,
            headers
        });

    }


    async put(
        url:string,
        body:any,
        headers={}
    ):Promise<APIResponse>{

        return await this.request.put(url,{
            data:body,
            headers
        });

    }


    async delete(
        url:string,
        headers={}
    ):Promise<APIResponse>{

        return await this.request.delete(url,{
            headers
        });

    }

}
