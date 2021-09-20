import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import './Dashboard.css';

function Dashboard(props) {
    const history = useHistory();
    const onLogoutClick = e => {
        e.preventDefault();
        props.logoutUser();
        history.go(0)
    };

    const user = props.auth.user;
    return (
        <div className="dashboard-container">
            <h2 className="welcome-title">{user.name ? `Welcome back ${user.name.split(" ")[0]}!` : "Goodbye!"}</h2>
            <button className="logout-button" onClick={onLogoutClick}>Logout</button>
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
