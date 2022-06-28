import React from "react";
import certificate from "../Assets/certificate.png";

function Certificate() {
  return (
    <div id="certificate" className="grid justify-items-center bg-cust4 pb-3">
      <p className=" pb-3 text-5xl text-cust2">Certificate</p>
      <a href="https://network.impactbyte.com/certificate/jovito-addo">
        <img src={certificate} className="h-5/6 hover:opacity-60 rounded" />
      </a>
    </div>
  );
}

export default Certificate;
