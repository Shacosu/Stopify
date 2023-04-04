import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const localApi = createApi({
    reducerPath: "localApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/"
    }),
    endpoints: (builder) => ({
        getBalanceBip: builder.query({
            query: (id) => `balance/?code=${id}`
        }),
    })
})

export const { useLazyGetBalanceBipQuery } = localApi;