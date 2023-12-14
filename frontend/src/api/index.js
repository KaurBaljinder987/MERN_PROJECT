import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { get } from "lodash";


export const DEFAULT_CACHE_SUBSCRIPTION_DURATION = 30;

const api = createApi({
    reducerPath: "apiReducer",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
        keepUnusedDataFor: DEFAULT_CACHE_SUBSCRIPTION_DURATION,
        prepareHeaders: (headers, { getState }) => {
            const state = getState();
            const token = get(state, "LoginSlice.loginToken")
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});

export default api;