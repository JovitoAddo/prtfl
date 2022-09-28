import React from "react";
import profile from "../Assets/profile-pic.png";
import { motion } from "framer-motion";
import Contacts from "./Contacts";
import Certificate from "./Certificate";
import { HashLink as Link } from "react-router-hash-link";
import Projects from "./Projects";

function Contents() {

  
  return (
    <motion.div
      className="flex flex-col content-center "

      // initial={{ width: 0 }}
      // animate={{ height: "100%" }}
      // exit={{ y: window.innerHeight, transition: { duration: 0.1 } }}
      // id="#top"
    >
      <div className="bg-cust2 ">
        {/* Photo */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex justify-center pt-3  "
        >
          {/* <Tilt style={{ background: "white" }}> */}
          <img
            src={profile}
            className=" border-8 border-cust4  hover:border-cust3 active:animate-spin cursor-default"
            style={{ height: "250px" }}
            alt="A photograph of my face"
          ></img>
          {/* </Tilt> */}
        </motion.div>

        <div className="prose container mx-auto text-cust4 grid pt-4 text-center ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
            className="text-cust4 text-3xl font-catamaran"
          >
            I am Jovito Addo, and I aspire to be a Front End Developer /
            Fullstack Developer
          </motion.div>
        </div>
        {/* <div className="prose pt-5 text-center mx-auto text-md text-black">
          Ex excepteur nisi mollit tempor occaecat pariatur eu officia proident
          incididunt. Eiusmod irure enim dolor consectetur commodo consectetur
          ipsum non est ipsum dolor. Occaecat aliqua nostrud reprehenderit
          incididunt. Elit consectetur labore esse fugiat irure proident sunt
          aliqua minim eiusmod.
        </div> */}
      </div>
      {/* WAVE SEPARATOR */}
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 500"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,500 C 0,500 0,166 0,166 C 34.93750292118516,183.76836347269676 69.87500584237031,201.5367269453935 106,212 C 142.1249941576297,222.4632730546065 179.43747955170386,225.62145569112275 214,223 C 248.56252044829614,220.37854430887725 280.3750759508142,211.97745029011543 315,203 C 349.6249240491858,194.02254970988457 387.0622166450392,184.46874314841557 428,167 C 468.9377833549608,149.53125685158443 513.3760574690292,124.14757711622234 553,111 C 592.6239425309708,97.85242288377766 627.4335534788436,96.940948386695 669,118 C 710.5664465211564,139.059051613305 758.889728615596,182.0886293369976 792,172 C 825.110271384404,161.9113706630024 843.0075320587722,98.7045342653146 872,107 C 900.9924679412278,115.2954657346854 941.0801431493151,195.093233601744 986,223 C 1030.919856850685,250.906766398256 1080.671895343968,226.92253132770946 1116,222 C 1151.328104656032,217.07746867229054 1172.2322754748127,231.21664108741805 1209,208 C 1245.7677245251873,184.78335891258195 1298.399002756781,124.21090432261822 1343,109 C 1387.600997243219,93.78909567738178 1424.1717134980627,123.93974162210907 1439,141 C 1453.8282865019373,158.06025837789093 1446.9141432509687,162.03012918894547 1440,166 C 1440,166 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="#f9d5a7"
          fill-opacity="0.53"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 250)"
        ></path>
        <path
          d="M 0,500 C 0,500 0,333 0,333 C 34.57849672507038,326.54446272063547 69.15699345014076,320.088925441271 103,313 C 136.84300654985924,305.911074558729 169.9505229245073,298.18876095555146 212,318 C 254.0494770754927,337.81123904444854 305.04091485182994,385.15603073652295 341,369 C 376.95908514817006,352.84396926347705 397.88581766817276,273.18711609835674 427,277 C 456.11418233182724,280.81288390164326 493.4158144754791,368.09550487005004 533,382 C 572.5841855245209,395.90449512994996 614.4509244299106,336.4308644214432 660,313 C 705.5490755700894,289.5691355785568 754.7804878048782,302.18103744417726 786,299 C 817.2195121951218,295.81896255582274 830.427124350577,276.8449858018478 867,295 C 903.572875649423,313.1550141981522 963.5110147928137,368.4390193484316 1001,363 C 1038.4889852071863,357.5609806515684 1053.5288164781684,291.3989368044258 1091,297 C 1128.4711835218316,302.6010631955742 1188.3737192945114,379.9652334338652 1232,385 C 1275.6262807054886,390.0347665661348 1302.9763063437856,322.7401294601133 1344,296 C 1385.0236936562144,269.2598705398867 1439.721055330347,283.0742487256819 1458,296 C 1476.278944669653,308.9257512743181 1458.1394723348265,320.9628756371591 1440,333 C 1440,333 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="#f9d5a7"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-1"
          transform="rotate(-180 720 250)"
        ></path>
      </svg>


      {/* PROJECT */}
      <div
      id="projects"
        // intial={{  opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{duration:3}}
        className="mx-auto min-w-full bg-cust4"
      >
        <div className="flex justify-center text-5xl text-cust2 pb-16 bg-gradient-to-b from-cust4 to-cust5 cursor-default">
          Past Projects
        </div>

        <Projects />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6b91c2"
          fill-opacity="1"
          d="M0,224L1440,288L1440,0L0,0Z"
        ></path>
      </svg>


      <div id="certificate" className="bg-cust4 ">
        <p className="flex justify-center pb-3 pt-5 text-5xl text-cust2 cursor-default">
          Certificate
        </p>
        <Certificate />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6b91c2"
          fill-opacity="1"
          d="M0,64L1440,160L1440,320L0,320Z"
        ></path>
      </svg>


      <div id="contacts" className="bg-cust5">
        <p className="flex justify-center pb-3 text-5xl text-cust2 cursor-default">
          Contact Me
        </p>
        <Contacts />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6b91c2"
          fill-opacity="1"
          d="M0,224L1440,96L1440,0L0,0Z"
        ></path>
      </svg>
      {/* <div>
        <Counter/>
      </div> */}
      {/* <div>
        <PostList/>
      </div> */}
      <div className="fixed bottom-10 right-10">
        <Link to="#top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-up-circle opacity-50 hover:stroke-cust3 transition hover:translate-y-1"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="8" x2="8" y2="12" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="16" y1="12" x2="12" y2="8" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
export default Contents;
