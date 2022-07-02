import React from "react";
import { useForm } from "react-hook-form";

const Appointment_form = () => {
  return (
    <>
      <div className="form">
        <form>
          <h3>VYSHNAV ASTRONUMEROLGICAL CARE</h3>
          <h4>APPOINTMENT FORM</h4>

          <div className="row formrow">
            <div className="col-5 row1">
              <label id="name">Name</label>
              <br />
              <label id="phone">Mobile</label>
              <br />
              <label id="purpose">Purpose</label>
              <br />
              <label id="email">E-mail</label>
              <br />
              <label id="address1">Address - 1</label>
              <br />
              <label id="address2">Address - 2</label>
              <br />
              <label id="state/province">State/Province</label>
              <br />
              <label id="country">Country</label>
              <br />
            </div>

            <div className="col-5 row3">
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                required
              ></input>
              <input
                type="text"
                id="phone"
                placeholder="Enter your Phone Number"
                required
              ></input>
              <input
                type="text"
                id="purpose"
                placeholder="ex: Numerology/Astrology Services"
                required
              ></input>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email Id"
                required
              ></input>
              <input type="text" id="Address1" placeholder="Address-1"></input>
              <input type="text" id="Address2" placeholder="Address-1"></input>
              <input
                type="text"
                id="state/province"
                placeholder="State/Province"
              ></input>
              <input
                type="text"
                id="country"
                placeholder="Country"
                required
              ></input>
              <br />
              <input type="checkbox" id="tamil" placeholder="Tamil"></input>
              Tamil
              <input type="checkbox" id="english" placeholder="English"></input>
              English
            </div>
          </div>

          <button type="submit">BOOK</button>
        </form>
      </div>
    </>
  );
};

export default Appointment_form;
