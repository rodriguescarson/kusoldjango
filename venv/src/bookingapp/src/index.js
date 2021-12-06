import React, { useEffect, createContext, useReducer, useContext } from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ContactUs from "./ContactUs";
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
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
import { reducer, initialState } from './userReducer'

// import WorkingHours from "./components/WorkingHours";
// export const UserContext = createContext()

const ReactRouter = () => {
  // //  const [state, dispatch] = useReducer(reducer, initialState)
  // const history = useHistory()
  // //const { state, dispatch } = useContext(UserContext)
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"))

  //   if (user) {
  //     //  dispatch({ type: "USER", payload: user })

  //   } else {
  //     //      history.push('/signin')
  //   }
  // }, [])
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

  <ReactRouter />
  ,
  document.getElementById("root")
);


