import React, { useState } from "react";
import { useProductMutation } from "api/products";
import { useNavigate } from "react-router-dom";
import "../../Styling.css";
import ProductForm from "./productForm";

const NewProduct = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const [product] = useProductMutation();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "title") {
            setTitle(value);
        }
        if (name === "description") {
            setDescription(value);
        }
        if (name === "price") {
            setPrice(value);
        }
        if (name === "stock") {
            setStock(value);
        }

    }

    const handleSubmit = () => {
        const payload = {
            title: title,
            description: description,
            price: price,
            stock: stock,
        }

        console.log("----payload----", payload)

        product(payload)
            .unwrap()
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });

        console.log("title", title);
        console.log("description", description);
        console.log("price", price);
        console.log("stock", stock);
    }

    return (
        <>
            <h2 className="aClass">Add Product</h2>
            <div className="pForm">
                <ProductForm handleChange={handleChange} handleSubmit={handleSubmit} btnName="Add" />
            </div>
        </>
    )
}
export default NewProduct;