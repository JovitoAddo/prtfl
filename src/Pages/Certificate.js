import React from "react";
import certificate from "../Assets/certificate.png";
import { motion } from "framer-motion";

function Certificate() {
  function HandleClick() {
    window.open(
      "https://network.impactbyte.com/certificate/jovito-addo",
      "_blank"
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{once:false, amount: 0.3}}
      transition={{ duration: 1}}
      id="certificate"
      className="grid justify-items-center bg-cust4 pb-3 w-full"
    >
      
      <div
        onClick={HandleClick}
        className="hover:cursor-pointer mx-auto flex justify-center"
      >
        <img src={certificate} className="h-5/6 hover:opacity-60 rounded" />
      </div>
    </motion.div>
  );
}

export default Certificate;
