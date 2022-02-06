import "./App.css";
import Navbar from "./components/Navbar";
import Restaurant from "./components/Restaurant";
import Contactus from "./components/Contactus";
import Queries from "./components/Queries";
import Booking1 from "./components/Booking1";
import Booking2 from "./components/Booking2";
import Booking3 from "./components/Booking3";
import Booking4 from "./components/Booking4";
import Booking5 from "./components/Booking5";
import Booking6 from "./components/Booking6";
import RestaurantConfirmation1 from "./components/RestaurantConfirmation1";
import RestaurantConfirmation2 from "./components/RestaurantConfirmation2";
import RestaurantConfirmation3 from "./components/RestaurantConfirmation3";
import RestaurantConfirmation4 from "./components/RestaurantConfirmation4";
import RestaurantConfirmation5 from "./components/RestaurantConfirmation5";
import RestaurantConfirmation6 from "./components/RestaurantConfirmation6";
import FoodMenu1 from "./components/FoodMenu1";
import FoodMenu2 from "./components/FoodMenu2";
import FoodMenu3 from "./components/FoodMenu3";
import FoodMenu4 from "./components/FoodMenu4";
import FoodMenu5 from "./components/FoodMenu5";
import FoodMenu6 from "./components/FoodMenu6";
import CustomerFood1 from "./components/CustomerFood1";
import CustomerFood2 from "./components/CustomerFood2";
import CustomerFood3 from "./components/CustomerFood3";
import CustomerFood4 from "./components/CustomerFood4";
import CustomerFood5 from "./components/CustomerFood5";
import CustomerFood6 from "./components/CustomerFood6";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Restaurant />
          </Route>
          <Route exact path="/contact-us">
            <Contactus />
          </Route>
          <Route exact path="/queries">
            <Queries />
          </Route>
          <Route exact path="/booking-restaurant-1">
            <Booking1 />
          </Route>
          <Route exact path="/booking-restaurant-2">
            <Booking2 />
          </Route>
          <Route exact path="/booking-restaurant-3">
            <Booking3 />
          </Route>
          <Route exact path="/booking-restaurant-4">
            <Booking4 />
          </Route>
          <Route exact path="/booking-restaurant-5">
            <Booking5 />
          </Route>
          <Route exact path="/booking-restaurant-6">
            <Booking6 />
          </Route>
          <Route exact path="/confirmation-restaurant-1">
            <RestaurantConfirmation1 />
          </Route>
          <Route exact path="/confirmation-restaurant-2">
            <RestaurantConfirmation2 />
          </Route>
          <Route exact path="/confirmation-restaurant-3">
            <RestaurantConfirmation3 />
          </Route>
          <Route exact path="/confirmation-restaurant-4">
            <RestaurantConfirmation4 />
          </Route>
          <Route exact path="/confirmation-restaurant-5">
            <RestaurantConfirmation5 />
          </Route>
          <Route exact path="/confirmation-restaurant-6">
            <RestaurantConfirmation6 />
          </Route>
          <Route exact path="/insert-menu-1">
            <FoodMenu1 />
          </Route>
          <Route exact path="/insert-menu-2">
            <FoodMenu2 />
          </Route>
          <Route exact path="/insert-menu-3">
            <FoodMenu3 />
          </Route>
          <Route exact path="/insert-menu-4">
            <FoodMenu4 />
          </Route>
          <Route exact path="/insert-menu-5">
            <FoodMenu5 />
          </Route>
          <Route exact path="/insert-menu-6">
            <FoodMenu6 />
          </Route>
          <Route exact path="/customers-order-1">
            <CustomerFood1 />
          </Route>
          <Route exact path="/customers-order-2">
            <CustomerFood2 />
          </Route>
          <Route exact path="/customers-order-3">
            <CustomerFood3 />
          </Route>
          <Route exact path="/customers-order-4">
            <CustomerFood4 />
          </Route>
          <Route exact path="/customers-order-5">
            <CustomerFood5 />
          </Route>
          <Route exact path="/customers-order-6">
            <CustomerFood6 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
