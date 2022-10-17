import React from "react";
import buah from "../Assets/BuahTangan.png";
import pitch from "../Assets/PitchPLS.png";
import catluv from "../Assets/Catluv.png";
import haku from "../Assets/restful.png";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div
      className="grid p-2 bg-cust5"
    >
      {/* projectdiv */}
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1 }}
        as="outdiv"
        className="grid items-center justify-items-center min-w-full min-h-fit pb-10 md:flex"
      >
        <div className="group grid justify-items-center items-center w-fit md:w-2/5 relative rounded bg-gradient-to-b from-neutral-focus to-transparent pb-2">
          <img
            src={pitch}
            className="rounded opacity-100 group-hover:opacity-40"
          />
          <h1 className="absolute pt-5 text-cust3 invisible group-hover:visible text-6xl cursor-default">
            Pitchpls!
          </h1>
        </div>
        <div className="grid w-3/5 justify-center object-fill">
          <h1 className="prose text-center text-cust2 text-5xl pb-1 cursor-default font-catamaran">
            Pitchpls!
          </h1>
          <p className="prose text-cust1 text-lg text-left cursor-default p-2 font-catamaran">
            !DISCLAIMER: This fullstack Website have high dependency with the
            restful API. but at the time it's created, heroku is having a
            problem with upload and my team can't upload the API. so if you want
            to see how the website work, you could watch the presentation video.
          </p>
          <p className="prose text-cust2 text-lg text-left cursor-default p-2 font-catamaran">
            It's a crowdfunding website with tiktok like presentation for better
            discoverability.
          </p>
          <p className="prose text-cust3 text-lg text-left cursor-default p-2 font-catamaran">
            Project Duration: 2 Week.
          </p>
          <div className="flex justify-around p-2">
            <a
              href="https://pitchpls.netlify.app/"
              target="_blank"
              className="m-2 text-cust1 hover:text-cust3 transition hover:translate-y-1 hover:shadow-lg border-2 border-dashed rounded p-2"
            >
              Preview Site
            </a>
            <a
            href="https://youtu.be/bUSL2_VE8GM"
            target="_blank"
              className="m-2 text-cust1 hover:text-cust3 transition hover:translate-y-1 hover:shadow-lg border-2 border-dashed rounded p-2"
            >
              Youtube
            </a>
          </div>
        </div>
      </motion.div>
      {/* different project */}
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1 }}
        as="outdiv"
        className="grid items-center justify-items-center min-w-full min-h-fit pb-10 md:flex"
      >
        <div className="group grid justify-items-center items-center w-fit md:w-2/5 relative rounded bg-gradient-to-b from-neutral-focus to-transparent pb-2">
          <img
            src={catluv}
            className="rounded opacity-100 group-hover:opacity-40"
          />
          <h1 className="absolute pt-5 text-cust3 invisible group-hover:visible text-6xl cursor-default">
            CatLuv
          </h1>
        </div>
        <div className="grid w-3/5 justify-center object-fill">
          <h1 className="prose text-center text-cust2 text-5xl pb-1 cursor-default font-catamaran">
            CatLuv
          </h1>
          <p className="prose text-cust1 text-lg text-left cursor-default p-2 font-catamaran">
            A single-page frontend project, that created with React, Bootstrap,
            external API, and considerable time limit.
          </p>
          <p className="prose text-cust2 text-lg text-left cursor-default p-2 font-catamaran">
            An information website about cats with better UI/UX than other cats
            info site.
          </p>
          <p className="prose text-cust3 text-lg text-left cursor-default p-2 font-catamaran">
            Project Duration: 2 Week.
          </p>
          <div className="flex justify-around p-2">
            <a
            href="https://catluv.netlify.app/"
            target="_blank"
              className="m-2 text-cust1 hover:text-cust3 transition hover:translate-y-1 hover:shadow-lg border-2 border-dashed rounded p-2"
            >
              Preview Site
            </a>
            <a 
            href="https://youtu.be/hHHztHY3vxw"
            target="_blank"
              className="m-2 text-cust1 hover:text-cust3 transition hover:translate-y-1 hover:shadow-lg border-2 border-dashed rounded p-2"
            >
              Youtube
            </a>
          </div>
        </div>
      </motion.div>
      {/* different project */}
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1 }}
        as="outdiv"
        className="grid items-center justify-items-center min-w-full min-h-fit pb-10 md:flex"
      >
        <div className="group grid items-center justify-items-center w-fit md:w-2/5 relative rounded bg-gradient-to-b from-neutral-focus to-transparent pb-2">
          <img
            src={haku}
            className="rounded opacity-100 group-hover:opacity-40"
          />
          <h1 className="absolute pt-5 text-cust3 invisible group-hover:visible text-6xl cursor-default">
            Haku API
          </h1>
        </div>
        <div className="grid w-3/5 justify-center object-fill">
          <h1 className="prose text-center text-cust2 text-5xl pb-1 cursor-default font-catamaran">
            Haku Library RESTful API
          </h1>
          <p className="prose text-cust1 text-lg text-left cursor-default p-2 font-catamaran">
            A Restful API created using mongoDB, postman, nodeJS.
          </p>
          <p className="prose text-cust2 text-lg text-left cursor-default p-2 font-catamaran">
            A RESTful API for library website for admin to add, remove or edit
            data from database.
          </p>
          <p className="prose text-cust3 text-lg text-left cursor-default p-2 font-catamaran">
            Project Duration: 2 Week.
          </p>
          <div className="flex justify-around p-2">
            <a
            href="https://haku-library-api.herokuapp.com/"
            target="_blank"
              className="m-2 text-cust1 hover:text-cust3 transition hover:translate-y-1 hover:shadow-lg border-2 border-dashed rounded p-2"
            >
              Preview Site
            </a>
          </div>
        </div>
      </motion.div>
      {/* different project */}
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1 }}
        as="outdiv"
        className="grid items-center justify-items-center min-w-full min-h-fit pb-10 md:flex"
      >
        <div className="group grid justify-items-center items-center w-fit md:w-2/5 relative rounded bg-gradient-to-b from-neutral-focus to-transparent pb-2">
          <img
            src={buah}
            className="rounded opacity-100 group-hover:opacity-40"
          />
          <h1 className="absolute pt-5 text-cust3 invisible group-hover:visible text-4xl cursor-default md:text-6xl">
            BuahTangan
          </h1>
        </div>
        <div className="grid w-3/5 justify-center object-fill">
          <h1 className="prose text-center text-cust2 text-5xl pb-1 cursor-default font-catamaran">
            BuahTangan
          </h1>
          <p className="prose text-cust1 text-lg text-left cursor-default p-2 font-catamaran">
            A simple HTML and CSS website, it's a first project that my team
            created since learning frontend in a month. Half of the content in
            this website dependent on a mockAPI that accidentally got deleted.
          </p>
          <p className="prose text-cust2 text-lg text-left cursor-default p-2 font-catamaran">
            An eCommerce website for buying regional stuff and food.
          </p>
          <p className="prose text-cust3 text-lg text-left cursor-default p-2 font-catamaran">
            Project Duration: 5 days.
          </p>
          <div className="flex justify-around p-2">
            <a 
            href="https://buahtangankelompok1.netlify.app/"
            target="_blank"
              className="m-2 text-cust1 hover:text-cust3 transition hover:translate-y-1 hover:shadow-lg border-2 border-dashed rounded p-2"
            >
              Preview Site
            </a>
          </div>
        </div>
      </motion.div>
      {/* end project div */}
    </div>
  );
}

export default Projects;
