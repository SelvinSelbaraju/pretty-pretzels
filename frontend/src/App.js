import './App.css';
import Navbar from './Navbar/Navbar';
import Presentation from './Presentation/Presentation';
import About from './About/About';
import Products from './Products/Products';
import Login from './Login/Login';
import Register from './Register/Register';
import PrivateRoute from './private-route/PrivateRoute';
import BasketTab from './Products/BasketTab';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Check for token to keep user logged in 
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwtDecode(token);
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/mybasket" component={BasketTab} />
        <Route exact path="/" component={Presentation} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
