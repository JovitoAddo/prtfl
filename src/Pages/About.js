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
      <div
        className="min-w-full pt-4"
        style={{ backgroundColor: "#4b5870" }}
      >
        <div className="prose prose-xl mx-auto text-white">
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
