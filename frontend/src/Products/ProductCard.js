import React, { useState } from 'react';

function ProductCard(props) {
    const { name, description, imgUrl } = props.item
    const index = props.productIndex;
    const [quantity, setQuantity] = useState(0);
    return (
        <li className="product">
            <img className="product-img" src={imgUrl} alt={name} />
            <h4 className="product-name">{name}</h4>
            <p className="product-desc">{description}</p>
            {
            quantity > 0 ?  
            <div className="quantity">
                <button onClick={()=> setQuantity(quantity-1)} className="quantity-btn">-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={()=> setQuantity(quantity+1)} className="quantity-btn">+</button>
            </div> : 
            <button onClick={() => setQuantity(quantity+1)} className="add-basket">Add to Basket</button>
            }
        </li>
    )
}

export default ProductCard