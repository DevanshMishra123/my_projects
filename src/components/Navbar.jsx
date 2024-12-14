import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; 

const Navbar = () => {
  return (
    <div className="bg-green-950 sticky top-0">
      <div className="container w-[70vw] m-auto flex justify-between items-center h-24 text-xl">
        <h1><span className="text-white">Pass</span><span className="text-green-500">OP</span></h1>
        <div className="icon rounded-full bg-green-700 text-white p-1 border border-white">
          <FontAwesomeIcon className="rounded-full border border-white" icon={faGithub} />
          <span className="m-2">Github</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
