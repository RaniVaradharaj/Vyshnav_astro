import React from "react";
import { useForm } from "react-hook-form";

const Appointment_form = () => {
  return (
    <>
      <div className="container form">
        <form>
          <h3>VYSHNAV ASTRONUMEROLGICAL CARE</h3>
          <h4>APPOINTMENT FORM</h4>
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            required
          ></input>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email Id"
            required
          ></input>
          <input
            type="text"
            id="phone"
            placeholder="Enter your Phone Number"
            required
          ></input>
          <textarea
            id="message"
            rows={4}
            placeholder="How can we help you"
          ></textarea>
          <button type="submit">BOOK</button>
        </form>
      </div>
    </>
  );
};

export default Appointment_form;
