import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetCheckout } from '../actions/productActions';

function ThankYou(props) {
    useEffect(() => props.resetCheckout())
    return (
        <div>
            <h1>Thank you!</h1>
            <button className="checkout-btn"><Link to="/dashboard">View Orders</Link></button>
        </div>
    )
}

const mapStatetoProps = state => ({
    auth: state.auth,
    products: state.products
});

export default connect(mapStatetoProps, { resetCheckout })(ThankYou);
