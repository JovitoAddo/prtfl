import { React, useState } from "react";
import { motion } from "framer-motion";
import jacv from "../Assets/JovitoAddoCV.pdf";

function Contacts() {
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);
  const [cv, setCV] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [github, setGithub] = useState(false);

  return (
    <div className="pt-16 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="grid justify-around lg:flex"
      >
        <div className="group m-2 pt-4 grid justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mailbox stroke-cust3 group-hover:stroke-cust1 transition active:translate-y-4"
            width="175"
            height="175"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00abfb"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={() => {
              setEmail(!email);
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
            <path d="M12 11v-8h4l2 2l-2 2h-4" />
            <path d="M6 15h1" />
          </svg>
        
          <p className="text-center text-cust2 cursor-default">Email</p>
          <motion.p
            animate={{ opacity: email ? 1 : 0 }}
            className="text-center text-xl text-cust2 hover:text-cust3"
          >
            jovitoaddo@gmail
          </motion.p>
        </div>
        <div className="group m-2 pt-4 grid justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-phone-call stroke-cust3 group-hover:stroke-cust1 transition active:translate-y-4"
            width="175"
            height="175"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00abfb"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={() => {
              setPhone(!phone);
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            <path d="M15 7a2 2 0 0 1 2 2" />
            <path d="M15 3a6 6 0 0 1 6 6" />
          </svg>
          <p className="text-center text-cust2 cursor-default">Phone</p>
          <motion.p
            animate={{ opacity: phone ? 1 : 0 }}
            className="text-center text-xl text-cust2 hover:text-cust3"
          >
            +6281806016497
          </motion.p>
        </div>
        <div className="group m-2 pt-4 grid justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-file-certificate stroke-cust3 group-hover:stroke-cust1 transition active:translate-y-4"
            width="175"
            height="175"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00abfb"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={() => {
              setCV(!cv);
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
            <circle cx="6" cy="14" r="3" />
            <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
          </svg>
          <p className="text-center text-cust2 cursor-default">CV</p>
          <motion.div
            animate={{ opacity: cv ? 1 : 0 }}
            className="text-center text-xl text-cust2 hover:text-cust3"
          >
            <a href={jacv} target="_blank">
              Link to CV
            </a>
          </motion.div>
        </div>
        <div className="group m-2 pt-4 grid justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-linkedin stroke-cust3 group-hover:stroke-cust1 transition active:translate-y-4"
            width="175"
            height="175"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00abfb"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={() => {
              setLinkedin(!linkedin);
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
          <p className="text-center text-cust2 cursor-default">LinkedIn</p>
          <div className="text-center text-xl text-cust2 hover:text-cust3">
            <motion.a
              animate={{ opacity: linkedin ? 1 : 0 }}
              className=""
              href="https://www.linkedin.com/in/jovito-addo-70415a240/"
              target="_blank"
            >
              Link to LinkedIn
            </motion.a>
          </div>
        </div>
        <div className="group m-2 pt-4 grid justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-github stroke-cust3 group-hover:stroke-cust1 transition active:translate-y-4"
            width="175"
            height="175"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00abfb"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={() => {
              setGithub(!github);
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          <p className="text-center text-cust2 cursor-default">Github</p>
          <div className="text-center text-xl text-cust2 hover:text-cust3">
            <motion.a
              animate={{ opacity: github ? 1 : 0 }}
              href="https://github.com/JovitoAddo"
              target="_blank"
            >
              Link to Github
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contacts;
