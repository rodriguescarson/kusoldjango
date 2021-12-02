import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ContactUs from "./ContactUs";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/landing_page/landing";
import Reset from "./components/reset_pass/reset";
import Admin from './Admin';
import Appointment from "./components/AdminPages/Appointment";
import Calender from "./components/AdminPages/Calender";
import Customer from "./components/AdminPages/Customer";
import Role from "./components/AdminPages/Role";
import User from "./components/AdminPages/User";
import Employee from "./components/AdminPages/Employee";
import WorkingHours from "./components/AdminPages/WorkingHours";
// import WorkingHours from "./components/WorkingHours";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Navbar} />{" "}
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/employees" component={Employee} />
        <Route exact path="/appointments" component={Appointment} />
        <Route exact path="/calenders" component={Calender} />
        <Route exact path="/customers" component={Customer} />
        <Route exact path="/roles" component={Role} />
        <Route exact path="/users" component={User} />
        <Route exact path="/workinghours" component={WorkingHours} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter />
  </React.StrictMode>,
  document.getElementById("root")
);


