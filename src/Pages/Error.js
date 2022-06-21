import React from "react";

function Error() {
  return (
    <div className="text-neutral-400 grid grid-rows-2" >
      <h1 className=" flex justify-center" style={{ fontSize: "30vw" }}>
        404
      </h1>
      <h2 className="flex justify-center px-3" style={{textAlign:'center'}}>
        The page you're looking for is not exist. Or maybe you just trying to see my 404 page?
      </h2>
    </div>
  );
}

export default Error;
