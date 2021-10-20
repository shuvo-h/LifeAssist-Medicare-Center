
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './Components/Admin/Login/Login';
import Register from './Components/Admin/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import Doctors from './Components/Doctors/Doctors';
import Home from './Components/Home/Home';
import Laboratory from './Components/Laboratory/Laboratory';
import NotFound from './Components/NotFound/NotFound';
import Nurses from './Components/Nurses/Nurses';
import PersonalAppointmentForm from './Components/PersonalAppointmentForm/PersonalAppointmentForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/Services/ServiceDetails/ServiceDetails';
import Services from './Components/Services/Services';
import RegularAppointmentForm from './Components/Shared/AppointmentForm/RegularAppointmentForm';
import Footer from './Components/Shared/Footer/Footer';
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
              <PrivateRoute exact path="/regular-appointment-form">
                <RegularAppointmentForm></RegularAppointmentForm>
              </PrivateRoute>
              <PrivateRoute exact path="/personal-appointment-form/:doctorId">
                <PersonalAppointmentForm></PersonalAppointmentForm>
              </PrivateRoute>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute exact path="/doctors">
                <Doctors></Doctors>
              </PrivateRoute>
              <PrivateRoute exact path="/laboratory">
                <Laboratory></Laboratory>
              </PrivateRoute>
              <PrivateRoute exact path="/nurses">
                <Nurses></Nurses>
              </PrivateRoute>
              <Route exact path="/services">
                <Services></Services>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
              <Route>
                <Footer></Footer>
              </Route>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
