import { useState, useEffect } from "react";
import * as React from "react";
import "./mystyles.css";
import Axios from "axios";

export default function Booking4() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [NumberOfSeats, setNumberOfSeats] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Food, setFood] = useState("");
  const [FoodList, setFoodList] = useState([]);

  function submitBooking() {
    Axios.post("http://localhost:3001/api/insert4", {
      Name: Name,
      Email: Email,
      PhoneNumber: PhoneNumber,
      NumberOfSeats: NumberOfSeats,
      Date: Date,
      Time: Time,
      Food: Food,
      Quantity: Quantity,
    });
    // alert("Your booking is forked by you!!!");
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getFood4").then((response) => {
      console.log(response.data);
      setFoodList(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div id="tab_one">
        <div className="register-photo">
          <div className="form-container">
            <div className="image-holder-4"></div>
            <form>
              <h2 className="text-center">
                <strong>Fork</strong> your Table
              </h2>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  placeholder="Date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="time"
                  name="time"
                  placeholder="Time"
                  data-date=""
                  data-date-format="YYYY MM DD"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  name="seats"
                  placeholder="Number of Seats"
                  onChange={(e) => {
                    setNumberOfSeats(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <center>
                  <br></br>
                  <a
                    className="btn btn-outline-success btn-block"
                    href="#tab_two"
                  >
                    Next Page
                  </a>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="tab_two">
        <center>
          <table className="table table-dark table-hover col-xs-2 col-md-4 w-auto">
            <thead>
              <tr>
                <th width="20%" scope="col">
                  <center>
                    <h4>ID</h4>
                  </center>
                </th>
                <th width="20%" scope="col">
                  <center>
                    <h4>Food Item</h4>
                  </center>
                </th>
                <th width="20%" scope="col">
                  <center>
                    <h4>Price</h4>
                  </center>
                </th>
              </tr>
            </thead>
            {FoodList.map((val) => {
              return (
                <tbody>
                  <tr>
                    <td>
                      <center>{val.FoodID}</center>
                    </td>
                    <td>
                      <center>{val.Food}</center>
                    </td>
                    <td>
                      <center>{val.Price}</center>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <table class="table table-primary col-xs-2 col-md-4 w-auto">
            <tbody>
              <tr>
                <td width="30%">
                  <center>
                    <input
                      className="form-control-sm"
                      type="text"
                      name="foodItem"
                      placeholder="Food Item1, Food Item2..."
                      onChange={(e) => {
                        setFood(e.target.value);
                      }}
                    />
                  </center>
                </td>
                <td width="30%">
                  <center>
                    <input
                      className="form-control-sm"
                      type="number"
                      name="quantity"
                      placeholder="Qnt Food Item1, Qnt Food Item2..."
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    />
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
            <a href="#tab_one" className="btn btn-outline-secondary btn-block ">
              Previous Page
            </a>
            <button
              className="btn btn-outline-success btn-block mx-5"
              onClick={() => {
                submitBooking();
                window.location.href='http://localhost:3000/booking-restaurant-4';
              }}
            >
              Fork-It
            </button>
        </center>
      </div>
    </div>
  );
}
