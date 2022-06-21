import { React, useState, Fragment } from "react";
import funky from "../Assets/funky.png";
import buah from "../Assets/BuahTangan.png";
import pitch from "../Assets/PitchPLS.png";
import catluv from "../Assets/Catluv.png";
import haku from "../Assets/restful.png";
import { Dialog, Transition } from "@headlessui/react";

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
    <div
      className="grid justify-items-center grid-cols-1 gap-4 px-4 py-5 md:grid-cols-2"
      style={{ backgroundColor: "#4b5870" }}
    >
      <div
        id="proj1"
        onClick={openModal}
        className="grid justify-items-center relative mb-5 rounded w-auto h-auto "
        style={{}}
      >
        <img
          src={pitch}
          alt="something"
          className="rounded opacity-40 hover:opacity-100"
        ></img>
        <h1 className="absolute pl-3 pt-3 text-5xl cursor-default text-white top-auto">
          PitchPls!
        </h1>
      </div>

      <div
        id="proj1"
        onClick={openModalC}
        className="grid justify-items-center relative mb-5 rounded w-auto h-auto "
        style={{}}
      >
        <img
          src={catluv}
          alt="something"
          className="rounded opacity-40 hover:opacity-100"
        ></img>
        <h1 className="absolute pl-3 pt-3 text-5xl cursor-default text-white top-auto">
          CatLuv
        </h1>
      </div>

      <div
        id="proj1"
        onClick={openModalR}
        className="grid justify-items-center relative mb-5 rounded w-auto h-auto "
        style={{}}
      >
        <img
          src={haku}
          alt="something"
          className="rounded opacity-40 hover:opacity-100"
        ></img>
        <h1 className="absolute pl-3 pt-3 text-5xl cursor-default text-white top-auto">
          HakuLib API
        </h1>
      </div>

      <div
        id="proj1"
        onClick={openModalB}
        className="grid justify-items-center relative mb-5 rounded w-auto h-auto "
        style={{}}
      >
        <img
          src={buah}
          alt="something"
          className="rounded opacity-40 hover:opacity-100"
        ></img>
        <h1 className="absolute pl-3 pt-3 text-5xl cursor-default text-white top-auto">
          BuahTangan
        </h1>
      </div>
      {/* MODAL PITCHPLS */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md border border-stone-800 transform overflow-hidden rounded-2xl bg-slate-700 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    PitchPls! DISCLAIMER
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-stone-400">
                      This fullstack Website have high dependency with the
                      restful API. but at the time it's created, heroku is having a
                      problem with upload and my team can't upload the API. so if
                      you want to see how the website work, you could watch the
                      presentation video.
                      <p> Project Duration: 2 Week</p>
                     
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-gray-400 px-4 m-2 py-2 text-sm font-medium text-black hover:bg-gray-200 "
                      onClick={newTab2}
                    >
                      Netlify Link
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-gray-400 px-4 m-2 py-2 text-sm font-medium text-black hover:bg-gray-200 "
                      onClick={newTab}
                    >
                      Youtube Link
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
        <Dialog as="div" className="relative z-10" onClose={closeModalC}>
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
                <Dialog.Panel className="w-full border border-stone-800 max-w-md transform overflow-hidden rounded-2xl bg-slate-700 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    CatLuv
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-stone-400">
                      A single-page frontend project, that created with React,
                      Bootstrap, external API, and considerable time limit.
                      <p>Project Duration: 2 Week</p>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-gray-400 px-4 m-2 py-2 text-sm font-medium text-black hover:bg-gray-200 "
                      onClick={newTab2C}
                    >
                      Netlify Link
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-gray-400 px-4 m-2 py-2 text-sm font-medium text-black hover:bg-gray-200 "
                      onClick={newTabC}
                    >
                      Youtube Link
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
        <Dialog as="div" className="relative z-10" onClose={closeModalR}>
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
                <Dialog.Panel className="w-full border border-stone-800 max-w-md transform overflow-hidden rounded-2xl bg-slate-700 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Haku Library RESTful API
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-stone-400">
                      A Restful API created using mongoDB.
                      <p>Project Duration: 2 Week</p>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-gray-400 px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 "
                      onClick={newTabR}
                    >
                      Netlify Link
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
        <Dialog as="div" className="relative z-10" onClose={closeModalB}>
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
                <Dialog.Panel className="w-full border border-stone-800 max-w-md transform overflow-hidden rounded-2xl bg-slate-700 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Buah Tangan
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-stone-400">
                      A simple HTML and CSS website, it's a first project that
                      my team created since learning frontend in a month. Half
                      of the content in this website dependent on a mockAPI that
                      i accidentally delete.
                      <p>Project Duration: 5 days</p>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-gray-400 px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 "
                      onClick={newTabB}
                    >
                      Netlify Link
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default PastProjects;
