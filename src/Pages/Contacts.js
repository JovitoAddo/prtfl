import { React, useState } from "react";
import { Transition } from "@headlessui/react";
import {motion} from "framer-motion"

function Contacts() {
  const [showEmail, setShowEmail] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <motion.div className="text-white" style={{ backgroundColor: "#4b5870" }}
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{duration: 0.1}}}>
      <div className=" pt-3 grid grid-rows-4">
        <div className="py-4 pr-6">
          <button
            onClick={() => setShowEmail((showEmail) => !showEmail)}
            className="w-1/3  py-2 pl-5 rounded-r-lg flex"
            style={{ backgroundColor: "#111827", fontSize: "2vw" }}
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
            className="w-3/5 mt-2 py-2 pl-5 rounded-r-lg"
            style={{ backgroundColor: "#111827", fontSize: "3vw" }}
          >
            jovitoaddo@gmail.com
          </Transition>
        </div>
        
        <div className="py-4 pr-6">
          <button
            onClick={() => setShowPhone((showPhone) => !showPhone)}
            className="w-1/3  py-2 pl-5 rounded-r-lg flex"
            style={{ backgroundColor: "#111827", fontSize: "2vw" }}
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
            className="w-3/5 mt-2 py-2 pl-5 rounded-r-lg"
            style={{ backgroundColor: "#111827", fontSize: "3vw" }}
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
            className="w-1/3  py-2 pl-5 rounded-r-lg flex"
            style={{ backgroundColor: "#111827", fontSize: "2vw" }}
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
            className="w-3/5 mt-2 py-2 pl-5 rounded-r-lg"
            style={{ backgroundColor: "#111827", fontSize: "3vw" }}
          >
            <a href='https://www.canva.com/design/DAFByh4U92A/pIGaHwLe1xnB665YiCKmkw/view?utm_content=DAFByh4U92A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target='_blank'> Canva Link</a>
          </Transition>
        </div>
      </div>
    </motion.div>
  );
}

export default Contacts;
