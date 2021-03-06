import React from "react";
import weirdo from "../Assets/weirdo.jpg";
import { motion } from "framer-motion";
import buah from "../Assets/BuahTangan.png";
import pitch from "../Assets/PitchPLS.png";
import catluv from "../Assets/Catluv.png";
import haku from "../Assets/restful.png";
import { Link } from "react-router-dom";
import PastProjects from "./PastProjects";
import Contacts from "./Contacts";
import Certificate from "./Certificate";
function Contents() {
  return (
    <motion.div
      className="flex flex-col content-center "
      style={{}}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      id='#top'
    >
      <div className=" ">
        {/* Photo */}
        <div className="flex justify-center pt-3  ">
          <img
            src={weirdo}
            className="rounded-full border-double border-8 border-cust3"
            style={{ height: "250px" }}
            alt="A photograph of my face"
          ></img>
        </div>
        <div className="prose container mx-auto text-cust4 grid pt-4 text-center ">
          <p>
            My name is Jovito Addo, and im aspire to be an adult with job, or
            Fullstack developer / Frontend developer / Backend developer.
          </p>
        </div>
      </div>
      {/* WAVE SEPARATOR */}
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 29.5364606718274,211.58880183797947 59.0729213436548,223.17760367595898 82,227 C 104.9270786563452,230.82239632404102 121.24477529720821,226.87838713414362 139,235 C 156.7552247027918,243.12161286585638 175.94797746751235,263.30884778746656 204,246 C 232.05202253248765,228.69115221253344 268.96331483274247,173.88622171599008 298,156 C 327.03668516725753,138.11377828400992 348.19876320151775,157.14626534857314 370,173 C 391.80123679848225,188.85373465142686 414.24163236118665,201.52871688971743 435,206 C 455.75836763881335,210.47128311028257 474.83470735373555,206.73886709255711 494,212 C 513.1652926462644,217.26113290744289 532.4195382238709,231.51581474005414 562,218 C 591.5804617761291,204.48418525994586 631.487139750781,163.1978739472263 660,180 C 688.512860249219,196.8021260527737 705.6319027730049,271.6926894710407 723,260 C 740.3680972269951,248.3073105289593 757.9852491571994,150.03136816861078 779,138 C 800.0147508428006,125.96863183138922 824.4271005981971,200.18183785451615 850,227 C 875.5728994018029,253.81816214548385 902.3063484500128,233.2412804133246 932,238 C 961.6936515499872,242.7587195866754 994.3475056017517,272.8530404921853 1017,273 C 1039.6524943982483,273.1469595078147 1052.30362914298,243.34655761793405 1074,229 C 1095.69637085702,214.65344238206595 1126.4379778263283,215.76072903607846 1154,234 C 1181.5620221736717,252.23927096392154 1205.9444595517057,287.61052623775214 1230,265 C 1254.0555404482943,242.38947376224786 1277.7841839668483,161.7971660129129 1299,143 C 1320.2158160331517,124.2028339870871 1338.9188045809003,167.2008097105963 1362,187 C 1385.0811954190997,206.7991902894037 1412.5405977095497,203.39959514470183 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#90aacbff"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
      {/* PROJECT */}
      <div className="mx-auto min-w-full bg-cust4">
        <PastProjects />
        {/* IMAGE CAROUSEL */}
        {/* <div
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
              <img src={catluv} className="block w-full h-fit" alt='A screenshot of Catluv website.' />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">CatLuv</h5>
                <p>
                  A Single page frontend project mainly created with React and
                  Bootstrap.
                </p>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <img src={pitch} className="block w-full h-fit" alt='A screenshot of PitchPls! website.' />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">PitchPLS</h5>
                <p>
                  A fullstack project created with React, Bootstrap, and
                  MongoDB.
                </p>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <img src={haku} className="block w-full h-fit" alt='A screenshot of HakuLib RESTful API documentation.' />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Haku Library Restful API</h5>
                <p>An API created with MongoDB.</p>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <img src={buah} className="block w-full h-fit" alt='A screenshot of Buah Tangan website.' />
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
        </div> */}
      </div>
      <div>
        <Certificate/>
      </div>
      <div>
        <Contacts/>
      </div>
    </motion.div>
  );
}
export default Contents;
