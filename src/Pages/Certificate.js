import React from "react";
import certificate from "../Assets/certificate.png";
import { motion } from "framer-motion";

function Certificate() {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{once:false, amount: 0.3}}
      transition={{ duration: 1}}
      className="grid justify-items-center bg-cust4 pb-3 w-full"
    >
      
      <a
        href="https://network.impactbyte.com/certificate/jovito-addo"
        target="_blank"
        className="hover:cursor-pointer transition hover:translate-y-1 mx-auto flex justify-center"
      >
        <img src={certificate} className="h-5/6 hover:opacity-60 rounded" />
      </a>
    </motion.div>
  );
}

export default Certificate;
