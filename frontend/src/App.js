import './App.css';
import Login from './login/login.js';
import User from './user/user.js';
import AddPatient from './user/addPatient.js';
import AddRequest from './user/addRequest.js';
import Routes from './routes';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
import PatientDetails from './patient/patientDetails';
import ViewRequest from './user/viewRequest';
import CardiacForm from './patient/cardiacforms';
import Dashboard from './user/dashboard/Dashboard';
import ManagerDashboard from './user/unitmanager/ManagerDashboard';
import CardiacForm_um from './user/unitmanager/cardiacforms_um';
import ReturnedCardiacForm from './patient/returnedcardiacform';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path={"/user"} component={User}/>
      <Route exact path={"/addpatient"} component={AddPatient}/>
      <Route exact path={"/addrequest"} component={AddRequest}/>
      <Route exact path={"/view_request"} component={ViewRequest}/>
      <Route path={"/patientdetails/"} component={PatientDetails}/>
      <Route path={"/form/:docnumber"} component={CardiacForm}/>
      <Route path={"/consultantDash"} component={Dashboard}/>
      <Route path={"/unitmanDash"} component={ManagerDashboard}/>
      <Route path={"/cardiacform_um/:docnumber"} component={CardiacForm_um}/>
      <Route path={"/returned/:docnumber"} component={ReturnedCardiacForm}/>
      </Switch>

    </Router>
  );
}

export default App;
