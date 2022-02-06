import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Queries() {
  const [CustomerList, setCustomerList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getQuery").then((response) => {
      console.log(response.data);
      setCustomerList(response.data);
    });
  }, []);

  const deleteRow = (id) =>{
    Axios.delete(`http://localhost:3001/api/deleteQuery/${id}`)
  }

  return (
    <div>
      <center>
        <br></br>
        <h1>User Queries</h1>
      </center>
      <hr></hr>
      <div className="container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col"><center><h4>ID</h4></center></th>
              <th scope="col"><center><h4>Email</h4></center></th>
              <th scope="col"><center><h4>Query</h4></center></th>
              <th scope="col"><center><h4>Delete</h4></center></th>
            </tr>
          </thead>
          {CustomerList.map((val) => {
            return (
              <tbody>
                <tr>
                  <td><center>{val.id}</center></td>
                  <td><center>{val.Email}</center></td>
                  <td><center>{val.Query}</center></td>
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
