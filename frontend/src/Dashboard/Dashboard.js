import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import './Dashboard.css';

function Dashboard(props) {
    const onLogoutClick = e => {
        props.logoutUser();
        props.history.push("/login")
    };

    const user = props.auth.user;
    return (
        <div>
            <h2>Oh Hello! {user.name ? user.name.split(" ")[0] : null}</h2>
            <button onClick={() => onLogoutClick()}>Logout</button>
        </div>
    )
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Dashboard)
