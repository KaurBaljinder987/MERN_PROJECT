import { useEffect, useState } from "react";
import { loginStore } from "slices/loginSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../Styling.css";
import { useLazyGetProductsQuery } from "api/getProducts";
import { useDeleteProductMutation } from "api/deleteP";

const Product = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [getProducts] = useLazyGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();
    const handleLogout = () => {
        dispatch(loginStore({ token: "" }));
        navigate("/");
    }

    const addProduct = () => {
        console.log("------on clicking----");
        navigate("/products/new")
    }

    const handleDetailPage = (id) => {
        console.log("---id---", id);
        navigate(`/products/${id}`);
    }

    const handleEditPage = (id) => {
        navigate("/products/edit/" + id, {
            // state: {
            //     products: products
            // }
        });
    }

    const handleDelete = (id) => {
        deleteProduct(id)
            .unwrap().
            then(() => {
                listProducts();
            })
    }

    const listProducts = () => {
        getProducts()
            .unwrap()
            .then(res => {
                setProducts(res.ProductData);
            });
    }

    useEffect(() => {
        listProducts()
    }, [])

    return (
        <>
            <h1 className="ph">Products</h1>

            <div className="btnn">
                <input type="button" value="Add Product" onClick={addProduct} class="d-block mr-0 ml-auto" />
            </div>

            <div className="app">
                <table>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody style={{ textAlign: 'center' }}>
                        {
                            products && products.map((product) =>
                                <tr key={`row-${product?._id}`}>
                                    <td key={`coloum-${product?._id}`}>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <a onClick={() => handleDetailPage(product?._id)}>View</a> |
                                        <a onClick={() => handleEditPage(product?._id)}>Edit</a> |
                                        <a onClick={() => handleDelete(product?._id)}>Delete</a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
            <div className="logout-btn">
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>

        </>


    )
}
export default Product;