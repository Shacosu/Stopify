import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const localApi = createApi({
    reducerPath: "localApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api-stopify.onrender.com/"
    }),
    endpoints: (builder) => ({
        getBalanceBip: builder.query({
            query: (id) => `balance/?code=${id}`
        }),
    })
})

export const { useLazyGetBalanceBipQuery } = localApi;