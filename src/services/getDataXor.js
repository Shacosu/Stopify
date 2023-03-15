import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const redApi = createApi({
    reducerPath: "redApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.xor.cl/red/"
    }),
    endpoints: (builder) => ({
        getStopId: builder.query({
            query: (name) => `bus-stop/${name}`
        }),
        getMetroData: builder.query({
            query: () => 'metro-network'
        }),
        getBalanceBip: builder.query({
            query: (id) => `balance/${id}`
        }),
    })
})

export const { useGetStopIdQuery, useGetMetroDataQuery, useGetBalanceBipQuery } = redApi;