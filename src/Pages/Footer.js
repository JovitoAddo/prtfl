import React from "react";

function Footer() {
  return (
    <div className='container-fluid' style={{ backgroundColor: "#9c9998" }}>
      <div className="hstack" style={{ minHeight: "20vh" }}>
        <div className='col-5'>
          <h1>SOMETHING</h1>
        </div>
        <div className="vr"></div>
        <div className='m-1 col'>
          <p>
            Nulla amet amet sunt officia. Consequat eu cupidatat pariatur amet
            dolore labore commodo ullamco id fugiat velit mollit est. Minim
            nostrud commodo Lorem id ut et labore exercitation deserunt duis
            reprehenderit elit ex. Non nisi laborum qui esse excepteur
            consequat.
          </p>
        </div>
        <div className="vr"></div>
        <div className='col-2'>Copyright 2022</div>
      </div>
    </div>
  );
}

export default Footer;
