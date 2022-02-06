import React, { useState } from "react";
import Axios from "axios";

export default function Contactus() {
  const [Email, setEmail] = useState("");
  const [Query, setQuery] = useState("");

  const submitQuery = () => {
    Axios.post("http://localhost:3001/api/insertQuery", {
      Email: Email,
      Query: Query,
    });
    alert("Query added... We will get back to you soon!!!");
  };

  return (
    <div>
      <div className="container col-xs-2 col-md-5 my-5">
        <h1>
          <center>Contact us</center>
          <hr width="100%"></hr>
        </h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Your Query
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
          ></textarea>
        </div>
        <center>
          <button type="button" className="btn btn-outline-dark btn-lg" onClick={submitQuery}>
            Submit
          </button>
        </center>
      </div>
    </div>
  );
}
