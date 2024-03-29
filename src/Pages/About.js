import React from "react";
import { motion } from "framer-motion";
import funky from "../Assets/funky.png";
import { Link } from "react-router-dom";
function About() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className=""
    >
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 37.58297489547898,176.37318383125057 75.16594979095797,152.74636766250117 116,135 C 156.83405020904203,117.25363233749883 200.91917573164704,105.38771318124589 246,127 C 291.08082426835296,148.61228681875411 337.15734728245377,203.70277961251523 382,215 C 426.84265271754623,226.29722038748477 470.45143513853793,193.80116836869308 521,204 C 571.5485648614621,214.19883163130692 629.0369121633945,267.09254691271235 670,255 C 710.9630878366055,242.90745308728765 735.400916207884,165.8286439804575 777,152 C 818.599083792116,138.1713560195425 877.3594230050696,187.59287716545757 919,209 C 960.6405769949304,230.40712283454243 985.1613917718371,223.79984735771237 1025,223 C 1064.838608228163,222.20015264228763 1119.9950099075825,227.20773340369283 1174,216 C 1228.0049900924175,204.79226659630717 1280.8585685978335,177.36921902751635 1325,172 C 1369.1414314021665,166.63078097248365 1404.5707157010834,183.31539048624182 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#90aacbff"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
      <div className="min-w-full pt-4 bg-cust4 dark:bg-black">
        <div className="prose prose-xl mx-auto text-cust1">
          <h1 className="text-cust2">You're not supposed to be here</h1>
          <hr />
          <p className="prose text-cust1 p-2 text-2xl">
            Hi, im Addo i like to learn and try new things, but it make me a
            jack of all trades and master of none. Im sociable enough to work
            well with a team, but also introverted enough so im fine working
            alone. I live in Ciputat South Tangerang, i prefer staying at home
            rather than going outside, but i will go if my friends invite me to
            go somewhere. I dont really have a hobby other than watching movies
            / series / pro-wrestling or playing video games.
          </p>
          <hr />
          <div className="prose prose-xl grid justify-items-center">
            <h2 className="text-cust1 pl-2">
              You're not supposed to be here, look at this picture
              of Funky Kong.
            </h2>
            <img src={funky} className="" />
          </div>
          <p className="pl-2">
            If that picture interest you to hire me, click{" "}
            <Link
              to="/contacts"
              className="text-cust2 hover:text-cust3"
              style={{ textDecoration: "none" }}
            >
              this link to go to the contact page
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
