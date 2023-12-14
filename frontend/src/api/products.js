import api from "api";

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        product: build.mutation({
            query: (body) => ({
                url: "/addProduct",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useProductMutation } = extendedApi;