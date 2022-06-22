import React from "react";
import { motion } from "framer-motion";

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
      <div
        className="min-w-full pt-4 bg-cust4"

      >
        <div className="prose prose-xl mx-auto text-cust1">
          <p>
            Culpa do eu enim elit. Dolor cillum ipsum laboris incididunt.
            Eiusmod reprehenderit exercitation sint est nisi culpa mollit
            eiusmod proident. Occaecat pariatur irure ipsum do culpa labore
            Lorem ullamco do laborum enim duis dolore id. Tempor deserunt
            officia ad laboris voluptate ut tempor nulla sint nostrud. Proident
            sint esse in tempor consequat reprehenderit.
          </p>
          <hr/>
          <p>
            Est aute laborum ad in sint excepteur nisi et. In eu nulla esse et
            quis anim commodo Lorem veniam est. Exercitation in officia qui
            incididunt amet eu nisi incididunt proident officia dolor magna
            aliquip.
          </p>
          <p>
            Non ex est laboris ullamco sunt ut dolore dolore. Velit fugiat ipsum
            adipisicing et aute non. Voluptate sint cupidatat aliqua officia
            voluptate ea ex. Occaecat eu id laboris incididunt Lorem nulla do
            nisi. Laboris ad sunt enim ipsum laboris aliquip cillum aute. Aute
            ea fugiat et adipisicing exercitation nulla proident dolore magna
            irure dolor amet. Magna amet aliquip laborum excepteur enim
            cupidatat cillum dolore proident labore. Et esse qui nisi cillum id
            ut et quis. Ut Lorem qui dolor in reprehenderit exercitation Lorem
            commodo consectetur laborum dolore voluptate est consequat.
          </p>
          <p>
            Nisi tempor nisi ex nisi in incididunt eiusmod occaecat proident.
            Laborum fugiat laboris laborum consectetur consequat consectetur
            Lorem cupidatat esse culpa deserunt laboris. Nisi nisi nostrud
            ullamco do tempor anim nisi veniam amet. Pariatur exercitation ut
            excepteur et consequat in exercitation amet irure dolore ad eu ex
            aute. Exercitation officia amet nostrud ut aute amet sunt sint Lorem
            ex tempor deserunt. Aliqua occaecat ex ea dolor reprehenderit velit
            nulla fugiat. Consectetur dolor veniam deserunt ipsum sit officia
            ullamco sit commodo sint ea ad duis. Labore eu aliqua cillum
            cupidatat esse irure. Sunt aute elit eiusmod aliqua. Ea duis veniam
            non ullamco.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
