import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.xor.cl/red/"
    }),
    endpoints: (builder) => ({
        getStopId: builder.query({
            query: (name) => `bus-stop/${name}`
        })
    })
})

export const { useGetStopIdQuery } = pokemonApi;