import api from "api";

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        viewProduct: build.query({
            query: (_id) => ({
                url: `/viewProduct/${_id}`, // Replace with your API endpoint for fetching products
                method: "GET",
            }),
        }),
    }),
});

export const { useLazyViewProductQuery } = extendedApi;