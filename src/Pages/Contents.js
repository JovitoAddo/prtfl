import React from "react";
import funky from "../Assets/funky.png";
import weirdo from "../Assets/weirdo.jpg";
import { motion } from "framer-motion";
import buah from "../Assets/BuahTangan.png";
import pitch from "../Assets/PitchPLS.png";
import catluv from "../Assets/Catluv.png";
import haku from "../Assets/restful.png";
import { Link } from "react-router-dom";
function Contents() {
  return (
    <motion.div
      className="flex flex-col content-center "
      style={{}}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className=" ">
        <div className="flex justify-center pt-3  ">
          <img
            src={weirdo}
            className="rounded-full border-double border-8 border-slate-700"
            style={{ height: "250px" }}
          ></img>
        </div>
        <div className="prose container mx-auto text-white grid pt-4 text-center ">
          <p>
            My name is Jovito Addo, and im aspire to be Fullstack developer or Frontend developer or Backend developer.
          </p>
        </div>
      </div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 44.13920551637186,205.2657197650513 88.27841103274372,210.53143953010257 134,194 C 179.72158896725628,177.46856046989743 227.02556138539694,139.13996164464095 276,126 C 324.97443861460306,112.86003835535905 375.6193434256684,124.90871389133358 415,128 C 454.3806565743316,131.09128610866642 482.49706491192967,125.2251827900248 522,133 C 561.5029350880703,140.7748172099752 612.3923969266131,162.19055494856735 662,170 C 711.6076030733869,177.80944505143265 759.9333473816182,172.01259741570584 799,186 C 838.0666526183818,199.98740258429416 867.8742135469145,233.7590553886092 902,234 C 936.1257864530855,234.2409446113908 974.569798430724,200.95118102985734 1030,171 C 1085.430201569276,141.04881897014266 1157.84659273019,114.43622049196148 1201,126 C 1244.15340726981,137.56377950803852 1258.043830648517,187.30393700229672 1293,206 C 1327.956169351483,224.69606299770328 1383.9780846757415,212.34803149885164 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#4b5870ff"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
      <Link to="/projects">
        <div
          className="flex justify-center pb-3 text-5xl text-white"
          style={{ backgroundColor: "#4b5870" }}
        >
          Past Projects
        </div>
      </Link>

      <div
        className="mx-auto min-w-full"
        style={{ backgroundColor: "#4b5870" }}
      >
        {/* IMAGE CAROUSEL */}
        <div
          id="carouselDarkVariant"
          className="carousel slide carousel-fade carousel-dark relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="1"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="2"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="3"
              aria-label="Slide 1"
            ></button>
          </div>

          <div className="carousel-inner relative w-5/6 mx-auto flex overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img src={catluv} className="block w-full h-fit" />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">CatLuv</h5>
                <p>
                  A Single page frontend project mainly created with React and
                  Bootstrap.
                </p>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <img src={pitch} className="block w-full h-fit" />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">PitchPLS</h5>
                <p>
                  A fullstack project created with React, Bootstrap, and
                  MongoDB.
                </p>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <img src={haku} className="block w-full h-fit" />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Haku Library Restful API</h5>
                <p>An API created with MongoDB.</p>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <img src={buah} className="block w-full h-fit" />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Buah Tangan</h5>
                <p>
                  A simple frontend project created with HTML, CSS, and
                  Javascript.
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
export default Contents;
