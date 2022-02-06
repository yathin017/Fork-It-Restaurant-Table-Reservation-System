import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function RestaurantConfirmation3() {
  const [CustomerList, setCustomerList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get3").then((response) => {
      console.log(response.data);
      setCustomerList(response.data);
    });
  }, []);

  const deleteRow = (EmailId) =>{
    Axios.delete(`http://localhost:3001/api/delete3/${EmailId}`)
  }

  return (
    <div>
      <center>
        <br></br>
        <h1>MoMo café</h1>
      </center>
      <hr></hr>
      <div className="container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col"><center><h4>ID</h4></center></th>
              <th scope="col"><center><h4>Name</h4></center></th>
              <th scope="col"><center><h4>Contact</h4></center></th>
              <th scope="col"><center><h4>Seats</h4></center></th>
              <th scope="col"><center><h4>Date</h4></center></th>
              <th scope="col"><center><h4>Time</h4></center></th>
              <th scope="col"><center><h4>Delete</h4></center></th>
            </tr>
          </thead>
          {CustomerList.map((val) => {
            return (
              <tbody>
                <tr>
                  <td><center>{val.id}</center></td>
                  <td><center>{val.Name}</center></td>
                  <td><center>{val.PhoneNumber}</center></td>
                  <td><center>{val.NumberOfSeats}</center></td>
                  <td><center>{val.Date}</center></td>
                  <td><center>{val.Time}</center></td>
                  <td><center><button type="button" class="btn btn-outline-danger" onClick={()=>{deleteRow(val.Email)}}>Delete</button></center></td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
