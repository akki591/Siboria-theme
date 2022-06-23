import React from "react";
import { useRouter } from "next/router";
import PrimaryButton from "@utils/PrimaryButton";

const Header = () => {
  const router = useRouter();

  const menus = [
    {
      name: "Home",
      active: router.pathname === "/" ? true : false,
    },
    {
      name: "Collections",
      active: router.pathname === "/collections" ? true : false,
    },
    {
      name: "How We Collect",
      active: router.pathname === "/how-we-collect" ? true : false,
    },
    {
      name: "Sell An Antique",
      active: router.pathname === "/sell-an-antique" ? true : false,
    },
    {
      name: "Blog",
      active: router.pathname === "/blog" ? true : false,
    },
  ];

  return (
    // header begin
    <div className="w-full flex justify-between items-center text-center h-20 sticky inset-0">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="55"
          viewBox="0 0 90 55"
        >
          <text
            id="Siboria."
            className="text-2xl font-inter font-bold text-center"
            fill="#212832"
          >
            <tspan x="0" y="23">
              Siboria
            </tspan>
            <tspan y="23" fill="#ff7b29">
              .
            </tspan>
          </text>
        </svg>
      </span>
      <div className="flex items-center gap-8">
        {menus.map((menu) => (
          <div
            key={menu.name}
            className="flex flex-col gap-1 font-poppins font-normal transition-all ease-in-out group"
          >
            <span
              className={`${
                menu.active ? "text-gray-800" : "text-gray-500"
              } hover:text-gray-800 `}
            >
              {menu.name}
            </span>
            <span
              className={`bg-primary h-1 rounded-md w-full ${
                menu.active ? "scale-x-100" : "scale-x-0"
              } transition-all ease-out duration-300 group-hover:block group-hover:scale-x-100`}
            ></span>
          </div>
        ))}
      </div>
      <PrimaryButton>Our Collections</PrimaryButton>
    </div>
    // header stop
  );
};

export default Header;
