import React from "react";
import RestaurantItem from "./RestaurantItem";

export default function Restaurant() {
  return (
      <center>
        <br></br>
        <h2>Choose your Restaurant... Book your Favourite Table</h2>
        <hr width="50%"></hr>
        <div className="row">
          <div id="card" className="col-md 3">
            <RestaurantItem
              imgsrc = "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Noma-2.jpg"
              title="Tatva Restaurant"
              description="Sanai Plaza, 2nd Floor Pillar No: 1301, 1-8-303, Sardar Patel Rd, Sindhi Colony, Begumpet, Hyderabad, Telangana 500003"
              linkto = "/booking-restaurant-1"
              src="..."
            />
          </div>
          <div id="card" className="col-md 3">
            <RestaurantItem
              imgsrc = "https://media-cdn.tripadvisor.com/media/photo-s/10/93/a1/c1/daily-treats.jpg"
              title="Okra"
              description="Hyderabad Marriott Hotel & Convention Centre, Tank Bund Road, opposite to Hussain Sagar Lake, Hyderabad, Telangana 500080"
              linkto = "/booking-restaurant-2"
              src="..."
            />
          </div>
          <div id="card" className="col-md 3">
            <RestaurantItem
              imgsrc = "https://media-cdn.tripadvisor.com/media/photo-s/1d/30/57/5b/altitude-interior.jpg"
              title="MoMo café"
              description="1-3-1024, Lower Tank Bund Rd, Bhagyalaxmi Nagar, Kavadiguda, Hyderabad, Telangana 500080"
              linkto = "/booking-restaurant-3"
              src="..."
            />
          </div>
        </div>
        <div className="row">
          <div id="card" className="col-md 3">
            <RestaurantItem
              imgsrc = "https://media-cdn.tripadvisor.com/media/photo-s/1d/30/57/59/altitude-rooftop-outside.jpg"
              title="Mekong"
              description="7-1-26 Greenlands Area, Begumpet Rd, Hyderabad, Telangana 500016"
              linkto = "/booking-restaurant-4"
              src="..."
            />
          </div>
          <div id="card" className="col-md 3">
            <RestaurantItem
              imgsrc = "https://media-cdn.tripadvisor.com/media/photo-s/1d/30/54/b2/bidri-ambience.jpg"
              title="The Water Front"
              description="Raj Nagar, 6-3-1240/225/23, PV Narasimha Rao Marg, beside Eat Street, Hyderabad, Telangana 500004"
              linkto = "/booking-restaurant-5"
              src="..."
            />
          </div>
          <div id="card" className="col-md 3">
            <RestaurantItem
              imgsrc = "https://media-cdn.tripadvisor.com/media/photo-s/02/91/4d/73/getlstd-property-photo.jpg"
              title="Cafe Nook Cloud Kitchen"
              description="Flat no 7, Satguru, 142, PG Road, Sindhi Colony, Begumpet, Hyderabad, Telangana 500003"
              linkto = "/booking-restaurant-6"
              src="..."
            />
          </div>
        </div>
      </center>
  );
}
