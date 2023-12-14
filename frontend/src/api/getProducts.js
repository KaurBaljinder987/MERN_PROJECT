import api from "api";

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => ({
                url: "/getProducts", // Replace with your API endpoint for fetching products
                method: "GET",
            }),
        }),
    }),
});

export const { useLazyGetProductsQuery } = extendedApi;