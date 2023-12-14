import api from "api";

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        updateProduct: build.mutation({
            query: (body) => ({
                url: `/updateProduct/${body._id}`, // Replace with your API endpoint for updating a product
                method: "PUT", // or "PATCH" depending on your API's requirements
                body,
            }),
        }),
    }),
});

export const { useUpdateProductMutation } = extendedApi;