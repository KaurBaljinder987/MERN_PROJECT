import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { get } from "lodash";
import Login from "../components/Login"
import SignUp from "../components/SignUp";
import Product from "components/Products";
import NewProduct from "components/Products/newProduct";
import ViewProduct from "components/Products/viewProduct";
import EditProduct from "components/Products/editProduct";

function MainRoutes() {
    const { token } = useSelector(
        (state) => ({
            token: get(state, "LoginSlice.loginToken", null),
        }),
        shallowEqual
    );

    const redirectPath = token ? "/products" : "/login";
    return (

        <Routes>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/" element={<Navigate to={redirectPath} />} />
            <Route path="/login" element={token ? <Navigate to="/products" /> : <Login />}></Route>
            <Route path="/products" element={token ? <Product /> : <Navigate to="/login" />}></Route>
            <Route path="/products/new" element={token ? <NewProduct /> : <Navigate to="/login" />}></Route>
            <Route path="/products/edit/:id" element={token ? <EditProduct /> : <Navigate to="/login" />}></Route>
            <Route path="/products/:id" element={token ? <ViewProduct /> : <Navigate to="/login" />}></Route>
        </Routes>
    );
}

export default MainRoutes;