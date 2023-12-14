
import { useLazyViewProductQuery } from "api/viewP";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const ViewProduct = () => {
    const location = useLocation();
    const [viewProduct] = useLazyViewProductQuery();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    useEffect(() => {
        const id = location.pathname.split('/')[2]
        viewProduct(id)
            .unwrap()
            .then(res => {
                setTitle(res.title);
                setDescription(res.description);
                setPrice(res.price);
                setStock(res.stock);

                console.log(title, description, price, stock)
            })

    }, [])

    return (
        <div>
            <div>Title : {title} </div>
            <div>Description : {description}</div>
            <div>Price : {price}</div>
            <div>Stock : {stock}</div>
        </div>
    );
}


export default ViewProduct;