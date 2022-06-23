import React from "react";

const SecondaryButton = ({ children, onclick = null, className = null }) => {
  return (
    <div>
      <button
        className={`btn-secondary relative group ${className}`}
        onClick={onclick}
      >
        <span className="h-full w-full scale-0 inset-0 absolute transition-all ease-in-out group-hover:scale-100 rounded-full group-hover:rounded-md bg-primary duration-300"></span>
        <div className="group-hover:z-10 group-hover:text-white relative">{children}</div>
      </button>
    </div>
  );
};

export default SecondaryButton;
