import React, { useState } from 'react';

function ProductCard(props) {
    const { _id, name, description, imgUrl } = props.item
    const [quantity, setQuantity] = useState(0);
    return (
        <li className="product" key={_id}>
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