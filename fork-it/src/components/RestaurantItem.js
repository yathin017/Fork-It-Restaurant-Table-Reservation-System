import React from "react";
import { Link } from "react-router-dom";

export default function RestaurantItem(props) {
  return (
      <div>
        <br />
        <div className="card" style={{ width: "25rem" }}>
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <Link to={props.linkto} className="btn btn-sm btn-outline-dark">
              Book Now
            </Link>
          </div>
        </div>
      </div>
  );
}
