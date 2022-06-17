import React from "react";

function Error() {
  return (
    <div className="text-neutral-400 grid grid-rows-2">
      <h1 className=" flex justify-center" style={{ fontSize: "30vw" }}>
        404
      </h1>
      <h2 className="flex justify-center px-3" style={{textAlign:'center'}}>
        You've reach the end of the line, please turn back or prepare to suffer the consequences.
      </h2>
    </div>
  );
}

export default Error;
