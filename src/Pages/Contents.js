import React from "react";
import funky from "../Assets/funky.png";

function Contents() {
  return (
    <container className="container-fluid lg" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="col m-2">
          <img src={funky} />
        </div>
        <div className="row">
          <div className="col">
            Minim eiusmod elit dolore aute commodo dolor do aute duis Lorem sint
            ut sint ut. Id anim est est sit irure duis ut ea. Sint id
            exercitation elit laboris aute proident nisi. Ex et et voluptate
            esse officia anim Lorem amet anim deserunt. Excepteur enim nisi
            excepteur deserunt dolor. Esse laboris cillum velit nisi ipsum
            deserunt enim ex pariatur. Labore qui est ad ipsum ea aliquip eu
            occaecat dolore deserunt veniam in deserunt ea.
          </div>
          <div
            className="col"
            style={{
              borderStyle: "solid",
              borderColor: "#d49e42",
              backgroundColor: "#cfb588",
            }}
          >
            Consectetur deserunt nulla dolor voluptate ullamco aliquip dolor
            aliquip et proident fugiat. Reprehenderit magna ex veniam amet. Nisi
            culpa nulla aliqua proident sint. Esse commodo ad nulla nostrud
            cillum ea minim esse esse aute aliquip nostrud. Officia commodo nisi
            velit sunt tempor elit cupidatat nostrud anim do cupidatat laborum
            duis exercitation. Officia nisi quis do dolor duis aute ad ut
            consectetur aute. Aliquip irure mollit sunt deserunt laborum nulla
            elit aliquip eiusmod incididunt.
          </div>
        </div>
      </div>
    </container>
  );
}

export default Contents;
