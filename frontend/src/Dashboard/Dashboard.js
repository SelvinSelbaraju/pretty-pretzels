import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from '../axios';
import './Dashboard.css';

function Dashboard(props) {
    const user = props.auth.user;
    const [basket, setBasket] = useState(null)
    const fetchBasket = user => {
            axios.get("/api/basket", { params: { userId: user.id } })
            .then(res => {
                if (!res.data.basket) {
                    setBasket(JSON.parse(localStorage.getItem("basketProducts")));
                }
            })
            .catch(err => console.log(err))
    };
    useEffect(() => {fetchBasket(user)}, []);
    if (basket) {
        axios.post("/api/basket", { basketProducts: basket }, { params: {userId: user.id} })
        .then(res => console.log("Basket Saved"))
        .catch(err => console.log(err))
    }
    return (
        <div className="dashboard-container">
            <h2 className="welcome-title">{user.name ? `Welcome back ${user.name.split(" ")[0]}!` : "Goodbye!"}</h2>
        </div>
    )
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    products: state.products
})

export default connect(mapStateToProps)(Dashboard)
