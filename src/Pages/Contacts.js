import { React, useState } from "react";
import { Transition } from "@headlessui/react";
import {motion} from "framer-motion"

function Contacts() {
  const [showEmail, setShowEmail] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <motion.div
    initial={{x:"-50vw"}}
    whileInView={{x:"0vw"}}
    viewport={{once:false, amount: 0.1}}
    transition={{duration:1}}
    id='contacts'
    className='pt-5 bg-cust4'
    // initial={{width:0}}
    // animate={{width:"100%"}}
    // exit={{x:window.innerWidth,transition:{duration: 0.1}}}
     >
      {/* <svg
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
      </svg> */}
      
      <div className=" pt-3 grid grid-rows-4 text-cust4 bg-cust4">
        <div className="py-4 pr-6">
          <button
            onClick={() => setShowEmail((showEmail) => !showEmail)}
            className="w-2/5  py-2 pl-5 rounded-r-lg flex bg-cust2 hover:bg-cust3 hover:text-cust1"
            style={{ fontSize: "5vw", fontFamily:"Catamaran" }}
          >
            Email ▼
          </button>
          <Transition
            show={showEmail}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className="w-3/5 mt-2 py-2 pl-5 rounded-r-lg bg-cust2 cursor-default"
            style={{ fontSize: "4vw", fontFamily:"Catamaran" }}
          >
            jovitoaddo@gmail.com
          </Transition>
        </div>
        
        <div className="py-4 pr-6">
          <button
            onClick={() => setShowPhone((showPhone) => !showPhone)}
            className="w-2/5  py-2 pl-5 rounded-r-lg flex bg-cust2 hover:bg-cust3 hover:text-cust1"
            style={{  fontSize: "5vw", fontFamily:"Catamaran" }}
          >
            Phone ▼
          </button>
          <Transition
            show={showPhone}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className="w-3/5 mt-2 py-2 pl-5 rounded-r-lg bg-cust2 cursor-default"
            style={{ fontSize: "4vw", fontFamily:"" }}
          >
            (+62)81806016497
          </Transition>
        </div>

        {/* <div className="grid justify-items-end py-4">
          <button
            onClick={() => setShowPhone((showPhone) => !showPhone)}
            className="w-1/6 py-2 pr-5 rounded-l-lg flex justify-end "
            style={{ backgroundColor: "#111827", fontSize: "2vw" }}
          >
           ▼ Phone
          </button>
          <Transition
            show={showPhone}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            className="w-2/5 mt-2 py-2 pr-5 rounded-l-lg flex justify-end"
            style={{ backgroundColor: "#111827", fontSize: "3vw" }}
          >
            (+62)81806016497
          </Transition>
        </div> */}
        <div className="pt-4 pr-6">
          <button
            onClick={() => setIsShowing((isShowing) => !isShowing)}
            className="w-2/5  py-2 pl-5 rounded-r-lg flex bg-cust2 hover:bg-cust3 hover:text-cust1"
            style={{ fontSize: "4vw", fontFamily:"Catamaran" }}
          >
            Take my CV ▼
          </button>
          <Transition
            show={isShowing}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className="w-3/5 mt-2 py-2 pl-5 rounded-r-lg bg-cust2"
            style={{ fontSize: "4vw", fontFamily:"Catamaran" }}
          >
            <a className=' hover:text-cust3' style={{fontFamily:"Catamaran"}} href='https://www.canva.com/design/DAFEaaSleSA/l-QdRSm6sqfqKsK4mJpN7g/view?utm_content=DAFEaaSleSA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target='_blank'> Canva Link</a>
          </Transition>
        </div>
      </div>
    </motion.div>
  );
}

export default Contacts;
