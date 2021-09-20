import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Dashboard.css';

function Dashboard(props) {
    const user = props.auth.user;
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
    auth: state.auth
})

export default connect(mapStateToProps)(Dashboard)
