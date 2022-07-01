import React from "react";

function Contact() {
  return (
    <>
      <div className="container contact">CONTACT US:</div>
      <div className="container address">
        Mrs.N.S. CHITRA, B.Sc.,B.Ed.,(Maths), M.A., M.Phil.,(Astrology),
        <br />
        Plot No.9,Nethaji Street (South), Nehru Nagar 1 st Main,
        <br /> Opp.Rly.Stn.Honda Showroom, Denkanikotta Road,
        <br /> Hosur - 635 109, Tamilnadu, India.
        <br /> Phone: 90472 27150, 94883 39931
        <br /> Email: <a href="chitraknp@gmail.com">chitraknp@gmail.com</a>
      </div>
      {/* {window.open(
        "mailto:chitraknp@gmail.com?subject=Subject&body=Body%20goes%20here"
      )} */}
    </>
  );
}

export default Contact;