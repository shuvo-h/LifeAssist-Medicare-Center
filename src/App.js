
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './Components/Admin/Login/Login';
import Register from './Components/Admin/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import Doctors from './Components/Doctors/Doctors';
import EquipmentDetails from './Components/Equipment/EquipmentDetails/EquipmentDetails';
import GuestForm from './Components/Form/GuestForm/GuestForm';
import InternshipForm from './Components/Form/InternshipForm/InternshipForm';
import PersonalAppointmentForm from './Components/Form/PersonalAppointmentForm/PersonalAppointmentForm';
import Home from './Components/Home/Home';
import Laboratory from './Components/Laboratory/Laboratory';
import NotFound from './Components/NotFound/NotFound';
import Nurses from './Components/Nurses/Nurses';
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
              <PrivateRoute exact path="/guest-appointment-form/:guestDoctorId">
                <GuestForm></GuestForm>
              </PrivateRoute>
              <PrivateRoute exact path="/internship-form">
                <InternshipForm></InternshipForm>
              </PrivateRoute>
              <PrivateRoute exact path="/personal-appointment-form/:doctorId">
                <PersonalAppointmentForm></PersonalAppointmentForm>
              </PrivateRoute>
              <PrivateRoute exact path="/laboratory/:equipmentId">
                <EquipmentDetails></EquipmentDetails>
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
              <PrivateRoute exact path="/services">
                <Services></Services>
              </PrivateRoute>
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
