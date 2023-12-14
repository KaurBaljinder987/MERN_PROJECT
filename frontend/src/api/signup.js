import api from "api";

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        signup: build.mutation({
            query: (body) => ({
                url: "/userRegister",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useSignupMutation } = extendedApi;