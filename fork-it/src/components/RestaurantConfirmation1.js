import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function RestaurantConfirmation1() {
  const [CustomerList, setCustomerList] = useState([]);
  
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get1").then((response) => {
      console.log(response.data);
      setCustomerList(response.data);
    });
  }, []);

  const deleteRow = (id) =>{
    Axios.delete(`http://localhost:3001/api/delete1/${id}`)
  }

  return (
    <div>
      <center>
        <br></br>
        <h1>Tatva Restaurant</h1>
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
                  <td><center><button type="button" class="btn btn-outline-danger" onClick={()=>{deleteRow(val.id);window.location.reload();}}>Delete</button></center></td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
