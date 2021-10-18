
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './Components/Admin/Login/Login';
import Register from './Components/Admin/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/Services/ServiceDetails/ServiceDetails';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
            <Navbar></Navbar>
            <Switch>
              <PrivateRoute exact path="/service-details/:serviceId">
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/register">
                <Register></Register>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
            </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
