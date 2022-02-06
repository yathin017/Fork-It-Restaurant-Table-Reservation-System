import React, { useState, useEffect } from "react";
import "./mystyles.css";
import Axios from "axios";

export default function FoodMenu6() {
  const [Food, setFood] = useState("");
  const [Price, setPrice] = useState("");
  const [FoodList, setFoodList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getFood6").then((response) => {
      console.log(response.data);
      setFoodList(response.data);
    });
  }, []);

  const submitFoodItem = () => {
    Axios.post("http://localhost:3001/api/insertFood6", {
      Food: Food,
      Price: Price,
    });
    alert("Added to Menu!!!");
  };

  const deleteFoodItem = (FoodID) => {
    Axios.delete(`http://localhost:3001/api/deleteFood6/${FoodID}`);
  };

  return (
    <div>
      <div className="register-photo ">
        <div className="form-container">
          <form>
            <h2 className="text-center">
              <strong>Fork</strong> your Table
            </h2>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Food Item"
                onChange={(e) => {
                  setFood(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                name="seats"
                placeholder="Set Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <center>
                <br></br>
                <button
                  className="btn btn-outline-success btn-block"
                  onClick={submitFoodItem}
                >
                  Add Item
                </button>
              </center>
            </div>
          </form>
        </div>
      </div>
      <div>
        <br></br>
        <center>
          <h1>Menu</h1>
          <hr width="50%"></hr>
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
                <th width="20%" scope="col">
                  <center>
                    <h4>Delete</h4>
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
                    <td>
                      <center>
                        <button
                          type="button"
                          class="btn btn-outline-danger"
                          onClick={() => {
                            deleteFoodItem(val.FoodID);
                            window.location.reload();
                          }}
                        >
                          Delete
                        </button>
                      </center>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </center>
      </div>
    </div>
  );
}
