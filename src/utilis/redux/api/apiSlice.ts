import { EnvVariables } from "../../EnvVariables";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appAPI = createApi({
    reducerPath: "GetProductsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: EnvVariables.AppUrls.ApiUrl }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<any, any>({
            query: () => EnvVariables.EndPoints.Products.GetProducts,
        }),
    }),
});

export const { useGetAllProductsQuery } = appAPI;