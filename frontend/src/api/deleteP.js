import api from "api";

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        deleteProduct: build.mutation({
            query: (Id) => ({
                url: `/deleteProduct/${Id}`, // Replace with your API endpoint for deleting a product
                method: "DELETE",
            }),
        }),
    }),
});

export const { useDeleteProductMutation } = extendedApi;