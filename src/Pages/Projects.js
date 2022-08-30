import React from "react";
import buah from "../Assets/BuahTangan.png";
import pitch from "../Assets/PitchPLS.png";
import catluv from "../Assets/Catluv.png";
import haku from "../Assets/restful.png";
import { StyledProject } from "./Style/Projects.styled";

function Projects() {
  return (
    <>
      <div className="grid grid-cols-4 gap-1 sm:grid-rows-4 bg-cust4 p-4 h-screen">
        <img
          className="col-span-3 border-4 w-full border-cust2 rounded-3"
          src={buah}
        />
        
        <div className=" prose ps-5 sm:grid-rows-4">
          <h1 className="text-cust1">BuahTangan</h1>
          <h2
            className="text-cust2 text-xl"
            style={{ fontFamily: "Catamaran" }}
          >
            A simple HTML and CSS website, it's a first project that my team
            created since learning frontend in a month. Half of the content in
            this website dependent on a mockAPI that accidentally get deleted.
          </h2>
          <button className=" p-2 text-cust1 border rounded-full">Youtube Link</button>
          <button className=" p-2 ms-2 text-cust1 border rounded-full">Netlify Link</button>
        </div>
      </div>
    </>
  );
}

export default Projects;
