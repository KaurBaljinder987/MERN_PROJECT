import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductForm from "./productForm";
import { useLazyGetProductsQuery } from "api/getProducts";
import { useUpdateProductMutation } from "api/editP"

const EditProduct = () => {
    const [currentProduct, setCurrentProduct] = useState({});
    const [getProducts] = useLazyGetProductsQuery();
    const [updateProduct] = useUpdateProductMutation();

    const location = useLocation();
    const navigate = useNavigate();
    const handleChange = (e) => {
        console.log('currentProduct', currentProduct)
        const { name, value } = e.target;
        setCurrentProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        updateProduct(currentProduct)
            .unwrap()
            .then(() => {
                navigate("/products");
            })

    }

    useEffect(() => {
        getProducts()
            .unwrap()
            .then(res => {

                setCurrentProduct(res?.ProductData.find(product => product._id === location.pathname.split('/')[3]))
            })
    }, [])


    return (<>
        <ProductForm handleChange={handleChange} handleSubmit={handleSubmit} product={currentProduct} btnName="Update" />
    </>)
}

export default EditProduct;