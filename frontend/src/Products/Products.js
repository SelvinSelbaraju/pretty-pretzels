import React from 'react'
import { useState, useEffect} from 'react';
import axios from '../axios';
import ProductCard from './ProductCard';
import "./Products.css"

function Products() {
    const [productData, setProductData] = useState([])
    const fetchData = () => {
        axios.get('/api/products/list')
            .then((response) => {
                setProductData(response.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(fetchData,[]);
    return (
        <div className="product-container">
            <h2 className="product-heading">Products</h2>
            <ul className="product-list">
            {
                productData.map(item => {
                    return (
                        <ProductCard item={item} />
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Products
