import './App.css';
import Navbar from './Navbar/Navbar';
import Presentation from './Presentation/Presentation';
import Login from './Login/Login';
import Register from './Register/Register';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider source={source}>
      <Router>
        <div className="App">
          <Navbar />
        </div>

        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Presentation} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
