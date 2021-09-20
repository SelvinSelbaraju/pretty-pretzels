import React from 'react'
import { useState, useEffect} from 'react';
import axios from '../axios';

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
        <div>
            Tester
            <ul>
            {
                productData.map(item => {
                    return (
                        <li key={item._id}>{item.name}</li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Products
