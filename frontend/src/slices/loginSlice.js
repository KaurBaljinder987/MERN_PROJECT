import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "LoginSlice",
    initialState: {
        loginToken: "",
    },
    reducers: {
        loginStore: (state, action) => {
            state.loginToken = action.payload.token;
        },
    },
});

export const { loginStore } = loginSlice.actions;

export default loginSlice.reducer;