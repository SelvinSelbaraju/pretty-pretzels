import React from 'react'

function ProductCard(props) {
    const { _id, name, description, imgUrl } = props.item
    return (
        <li className="product" key={_id}>
            <img className="product-img" src={imgUrl} alt={name} />
            <h4 className="product-name">{name}</h4>
            <p className="product-desc">{description}</p>
        </li>
    )
}

export default ProductCard