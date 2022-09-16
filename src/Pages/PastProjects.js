import { React, useState, Fragment } from "react";
import buah from "../Assets/BuahTangan.png";
import pitch from "../Assets/PitchPLS.png";
import catluv from "../Assets/Catluv.png";
import haku from "../Assets/restful.png";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

function PastProjects() {
  let [isOpen, setIsOpen] = useState(false);
  const [isOpenC, setIsOpenC] = useState(false);
  const [isOpenR, setIsOpenR] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function closeModalC() {
    setIsOpenC(false);
  }

  function closeModalR() {
    setIsOpenR(false);
  }

  function closeModalB() {
    setIsOpenB(false);
  }

  function newTab() {
    window.open("https://youtu.be/bUSL2_VE8GM", "_blank");
    setIsOpen(false);
  }

  function newTab2() {
    window.open("https://pitchpls.netlify.app/", "_blank");
    setIsOpen(false);
  }

  function newTabC() {
    window.open("https://youtu.be/hHHztHY3vxw", "_blank");
    setIsOpen(false);
  }

  function newTab2C() {
    window.open("https://catluv.netlify.app/", "_blank");
    setIsOpen(false);
  }

  function newTabR() {
    window.open("https://haku-library-api.herokuapp.com/", "_blank");
    setIsOpen(false);
  }

  function newTabB() {
    window.open("https://buahtangankelompok1.netlify.app/", "_blank");
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function openModalC() {
    setIsOpenC(true);
  }
  function openModalR() {
    setIsOpenR(true);
  }
  function openModalB() {
    setIsOpenB(true);
  }

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="bg-cust4"
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

      <div className="grid justify-items-center grid-cols-1 gap-4 px-4 py-5 md:grid-cols-2 bg-cust4">
        <div
          id="proj1"
          onClick={openModal}
          className="grid justify-items-center relative mb-5 rounded w-auto h-auto text-cust2 hover:text-cust4 "
          style={{}}
        >
          <img
            src={pitch}
            alt="something"
            className="rounded opacity-40 hover:opacity-100"
          ></img>
          <h1 className="absolute pl-3 pt-3 text-5xl cursor-default text-inherit top-auto" >
            PitchPls!
          </h1>
        </div>

        <div
          id="proj1"
          onClick={openModalC}
          className="grid justify-items-center relative mb-5 rounded w-auto h-auto text-cust2 hover:text-cust4"
          style={{}}
        >
          <img
            src={catluv}
            alt="something"
            className="rounded opacity-40 hover:opacity-100"
          ></img>
          <h1 className="absolute pl-3 pt-3 text-5xl cursor-default text-inherit top-auto">
            CatLuv
          </h1>
        </div>

        <div
          id="proj1"
          onClick={openModalR}
          className="grid justify-items-center relative mb-5 rounded w-auto h-auto text-cust2 hover:text-cust4"
          style={{}}
        >
          <img
            src={haku}
            alt="something"
            className="rounded opacity-40 hover:opacity-100"
          ></img>
          <h1 className="absolute pl-3 pt-3 text-5xl cursor-default text-inherit top-auto">
            HakuLib API
          </h1>
        </div>

        <div
          id="proj1"
          onClick={openModalB}
          className="grid justify-items-center relative mb-5 rounded w-auto h-auto text-cust2 hover:text-cust4"
          style={{}}
        >
          <img
            src={buah}
            alt="something"
            className="rounded opacity-40 hover:opacity-100"
          ></img>
          <h1 className="absolute pl-3 pt-3 text-5xl cursor-default text-inherit top-auto">
            BuahTangan
          </h1>
        </div>
        {/* MODAL PITCHPLS */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50"  onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md border border-cust3 transform overflow-hidden rounded-2xl bg-cust4 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-cust2 cursor-default"
                    >
                      PitchPls! *DISCLAIMER*
                    </Dialog.Title>
                    <div className="mt-2 prose">
                      <p className="text-lg  text-cust1 " style={{fontFamily: "Catamaran"}}>
                        This fullstack Website have high dependency with the
                        restful API. but at the time it's created, heroku is
                        having a problem with upload and my team can't upload
                        the API. so if you want to see how the website work, you
                        could watch the presentation video.
                        <p style={{fontFamily: "Catamaran"}}>
                          It's a crowdfunding website with tiktok like
                          presentation.
                        </p>
                        <p style={{fontFamily: "Catamaran"}}> Project Duration: 2 Week </p>
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md bg-cust1 px-4 m-2 py-2 text-sm font-medium text-black hover:bg-cust3 "
                        onClick={newTab2}
                      >
                        Netlify Link
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md bg-cust1 px-4 m-2 py-2 text-sm font-medium text-black hover:bg-cust3 "
                        onClick={newTab}
                      >
                        Youtube Link
                      </button>
                      <button
                        type="button"
                        className="absolute top-0 right-0 m-3 text-cust1 hover:text-cust3"
                        onClick={closeModal}
                      >
                        ✖
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* MODAL CATLUV */}
        <Transition appear show={isOpenC} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModalC}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full border border-cust3 max-w-md transform overflow-hidden rounded-2xl bg-cust4 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-cust2 cursor-default"
                    >
                      CatLuv
                    </Dialog.Title>
                    <div className="mt-2 prose">
                      <p className="text-lg text-cust1" style={{fontFamily: "Catamaran"}}>
                        A single-page frontend project, that created with React,
                        Bootstrap, external API, and considerable time limit.
                        <p style={{fontFamily: "Catamaran"}}>
                          An information website about cats with better
                          presentation than wiki.
                        </p>
                        <p style={{fontFamily: "Catamaran"}}>Project Duration: 2 Week</p>
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md bg-cust1 px-4 m-2 py-2 text-sm font-medium text-black hover:bg-cust3 "
                        onClick={newTab2C}
                      >
                        Netlify Link
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md bg-cust1 px-4 m-2 py-2 text-sm font-medium text-black hover:bg-cust3 "
                        onClick={newTabC}
                      >
                        Youtube Link
                      </button>
                      <button
                        type="button"
                        className="absolute top-0 right-0 m-3 text-cust1 hover:text-cust3"
                        onClick={closeModalC}
                      >
                        ✖
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* MODAL Restful API */}
        <Transition appear show={isOpenR} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModalR}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full border border-cust3 max-w-md transform overflow-hidden rounded-2xl bg-cust4 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-cust2 cursor-default"
                    >
                      Haku Library RESTful API
                    </Dialog.Title>
                    <div className="mt-2 prose">
                      <p className="text-lg text-cust1" style={{fontFamily: "Catamaran"}}>
                        A Restful API created using mongoDB, postman, nodeJS.
                        <p style={{fontFamily: "Catamaran"}}>
                          A RESTful API for library website for admin to add,
                          remove or edit data from database.
                        </p>
                        <p style={{fontFamily: "Catamaran"}}>Project Duration: 2 Week</p>
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md bg-cust1 px-4 py-2 text-sm font-medium text-black hover:bg-cust3 "
                        onClick={newTabR}
                      >
                        Heroku Link
                      </button>
                      <button
                        type="button"
                        className="absolute top-0 right-0 m-3 text-cust1 hover:text-cust3"
                        onClick={closeModalR}
                      >
                        ✖
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* MODAL BUAH TANGAN */}
        <Transition appear show={isOpenB} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModalB}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full border border-cust3 max-w-md transform overflow-hidden rounded-2xl bg-cust4 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-cust2 cursor-default"
                    >
                      Buah Tangan
                    </Dialog.Title>
                    <div className="mt-2 prose">
                      <p className="text-lg text-cust1" style={{fontFamily: "Catamaran"}}>
                        A simple HTML and CSS website, it's a first project that
                        my team created since learning frontend in a month. Half
                        of the content in this website dependent on a mockAPI
                        that accidentally got deleted.
                        <p style={{fontFamily: "Catamaran"}}>
                          An eCommerce website for buying regional stuff and
                          food.
                        </p>
                        <p style={{fontFamily: "Catamaran"}}>Project Duration: 5 days</p>
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md bg-cust1 px-4 py-2 text-sm font-medium text-black hover:bg-cust3"
                        onClick={newTabB}
                      >
                        Netlify Link
                      </button>
                      <button
                        type="button"
                        className="absolute top-0 right-0 m-3 text-cust1 hover:text-cust3"
                        onClick={closeModalB}
                      >
                        ✖
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </motion.div>
  );
}

export default PastProjects;
