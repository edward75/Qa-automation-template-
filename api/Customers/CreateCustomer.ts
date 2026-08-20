import { ApiClient } from '../ApiClient';
import { Endpoints } from '../Endpoints';
import { APIResponse } from '@playwright/test';

export class CreateCustomer {

    constructor(
        private apiClient: ApiClient
    ) {}

    async execute(
        customerData: object
    ): Promise<APIResponse> {

        return await this.apiClient.post(
            Endpoints.customers.create,
            customerData
        );

    }
}
