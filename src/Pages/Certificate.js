import React from "react";
import certificate from "../Assets/certificate.png";

function Certificate() {
    function HandleClick(){
        window.open("https://network.impactbyte.com/certificate/jovito-addo", "_blank")
    }
  return (
    <div id="certificate" className="grid justify-items-center bg-cust4 pb-3 w-full">
      <p className=" pb-3 text-5xl text-cust2">Certificate</p>
      <div onClick={HandleClick} className='hover:cursor-pointer flex justify-content-center'>
        <img src={certificate} className="h-5/6 hover:opacity-60 rounded" />
      </div>
    </div>
  );
}

export default Certificate;
