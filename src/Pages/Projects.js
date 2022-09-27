import React from "react";
import buah from "../Assets/BuahTangan.png";
import pitch from "../Assets/PitchPLS.png";
import catluv from "../Assets/Catluv.png";
import haku from "../Assets/restful.png";
import { StyledProject } from "./Style/Projects.styled";

function Projects() {
  return (
    <div className="p-2 bg-cust5">
      {/* projectdiv */}
      <div as="outdiv" className="flex flex-wrap min-w-full min-h-full pb-10">
        <div className="w-2/5 relative rounded bg-gradient-to-b from-neutral-focus to-transparent">
          <img src={buah} className="rounded opacity-40 hover:opacity-100" />
        </div>
        <div className="grid w-3/5 pl-7 justify-center">
          <h1 className="prose text-center text-cust2 text-5xl pb-1 cursor-default">
            BuahTangan
          </h1>
          <p className="prose text-cust2 text-justify cursor-default">
            Do consectetur non duis velit sunt excepteur magna in culpa
            incididunt nostrud Lorem velit. Laboris duis nulla labore ad quis
            cillum mollit ex quis eiusmod et proident sint. In eiusmod elit
            laboris fugiat nostrud. Veniam nisi tempor occaecat ea duis aliqua
            adipisicing ullamco ipsum qui in eiusmod excepteur quis.Nostrud
            exercitation reprehenderit ullamco labore nisi dolore. Magna fugiat
            commodo aute sit consectetur Lorem ea. Nisi incididunt esse mollit
          </p>
          <div className="flex justify-around">
            <button className="hover:text-cust2 border-2 border-solid rounded p-2">
              something
            </button>
            <button className="hover:text-cust2 border-2 border-solid rounded p-2">
              something
            </button>
          </div>
        </div>
      </div>
      {/* different project */}
      <div className="flex  min-w-full divide-cust4 pb-10">
        <div className="w-2/5 relative rounded bg-gradient-to-b from-neutral-focus to-transparent ">
          <img src={buah} className="rounded opacity-40 hover:opacity-100" />
        </div>
        <div className="grid w-3/5 pl-7 justify-center">
          <h1 className="prose text-center text-cust2 text-5xl pb-1 cursor-default">
            BuahTangan
          </h1>
          <p className="prose text-cust2 text-justify cursor-default">
            Do consectetur non duis velit sunt excepteur magna in culpa
            incididunt nostrud Lorem velit. Laboris duis nulla labore ad quis
            cillum mollit ex quis eiusmod et proident sint. In eiusmod elit
            laboris fugiat nostrud. Veniam nisi tempor occaecat ea duis aliqua
            adipisicing ullamco ipsum qui in eiusmod excepteur quis.Nostrud
            exercitation reprehenderit ullamco labore nisi dolore. Magna fugiat
            commodo aute sit consectetur Lorem ea. Nisi incididunt esse mollit
          </p>
          <div className="flex justify-around">
            <button className="hover:text-cust2 border-2 border-solid rounded p-2">
              something
            </button>
            <button className="hover:text-cust2 border-2 border-solid rounded p-2">
              something
            </button>
          </div>
        </div>
      </div>
      {/* different project */}
      <div className="flex  min-w-full divide-cust4 pb-10">
        <div className="w-2/5 relative rounded bg-gradient-to-b from-neutral-focus to-transparent ">
          <img src={buah} className="rounded opacity-40 hover:opacity-100" />
        </div>
        <div className="grid w-3/5 pl-7 justify-center">
          <h1 className="prose text-center text-cust2 text-5xl pb-1 cursor-default">
            BuahTangan
          </h1>
          <p className="prose text-cust2 text-justify cursor-default">
            Do consectetur non duis velit sunt excepteur magna in culpa
            incididunt nostrud Lorem velit. Laboris duis nulla labore ad quis
            cillum mollit ex quis eiusmod et proident sint. In eiusmod elit
            laboris fugiat nostrud. Veniam nisi tempor occaecat ea duis aliqua
            adipisicing ullamco ipsum qui in eiusmod excepteur quis.Nostrud
            exercitation reprehenderit ullamco labore nisi dolore. Magna fugiat
            commodo aute sit consectetur Lorem ea. Nisi incididunt esse mollit
          </p>
          <div className="flex justify-around">
            <button className="hover:text-cust2 border-2 border-solid rounded p-2">
              something
            </button>
            <button className="hover:text-cust2 border-2 border-solid rounded p-2">
              something
            </button>
          </div>
        </div>
      </div>
      {/* different project */}
      <div className="flex  min-w-full divide-cust4 pb-10">
        <div className="w-2/5 relative rounded bg-gradient-to-b from-neutral-focus to-transparent ">
          <img src={buah} className="rounded opacity-40 hover:opacity-100" />
        </div>
        <div className="grid w-3/5 pl-7 justify-center">
          <h1 className="prose text-center text-cust2 text-5xl pb-1 cursor-default">
            BuahTangan
          </h1>
          <p className="prose text-cust2 text-justify cursor-default">
            Do consectetur non duis velit sunt excepteur magna in culpa
            incididunt nostrud Lorem velit. Laboris duis nulla labore ad quis
            cillum mollit ex quis eiusmod et proident sint. In eiusmod elit
            laboris fugiat nostrud. Veniam nisi tempor occaecat ea duis aliqua
            adipisicing ullamco ipsum qui in eiusmod excepteur quis.Nostrud
            exercitation reprehenderit ullamco labore nisi dolore. Magna fugiat
            commodo aute sit consectetur Lorem ea. Nisi incididunt esse mollit
          </p>
          <div className="flex justify-around">
            <button className="hover:text-cust2 border-2 border-solid rounded p-2">
              something
            </button>
            <button className="hover:text-cust2 border-2 border-solid rounded p-2">
              something
            </button>
          </div>
        </div>
      </div>
      {/* end project div */}
    </div>
  );
}

export default Projects;
