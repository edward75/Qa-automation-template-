import { test, expect } from '@playwright/test';
import { ApiClient } from '../../api/ApiClient';


test('API health check', async ({request})=>{


    const api = new ApiClient(request);


    const response = await api.get(
        'https://api.github.com'
    );


    expect(response.status())
    .toBe(200);


});
