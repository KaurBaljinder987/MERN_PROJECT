import React from "react";
import PropTypes from 'prop-types'
import "../../Styling.css";

const ProductForm = ({ handleChange = () => { }, handleSubmit = () => { }, product = {}, btnName = '' }) => {
    const { title, description, price, stock } = product;
    return (
        <div className="pForm">

            <form>
                {/* <div className="pClass">id
                    <input className="tClass" type="text"></input> </div> */}

                <div className="pClass">
                    Title
                    <input className="tClass" type="text" name="title" onChange={handleChange} value={title}></input> </div>

                <div className="pClass">
                    Description
                    <input className="tClass" type="text" name="description" onChange={handleChange} value={description}></input></div>

                <div className="pClass">
                    Price
                    <input className="tClass" type="text" name="price" onChange={handleChange} value={price}></input></div>

                <div className="pClass">
                    Stock
                    <input className="tClass" type="text" name="stock" onChange={handleChange} value={stock}></input></div>

                <div className="bClass">
                    <input type="button" value={btnName} onClick={handleSubmit} /></div>
            </form>
        </div>
    )
}
ProductForm.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    product: PropTypes.object,
    btnName: PropTypes.string,
}

export default ProductForm;