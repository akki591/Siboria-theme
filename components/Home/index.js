/* eslint-disable @next/next/no-img-element */
import PrimaryButton from "@utils/PrimaryButton";
import React from "react";
import { FastForwardIcon, SearchIcon } from "@heroicons/react/solid";
import SecondaryButton from "@utils/SecondaryButton";
import RecentlyAdded from "@components/Home/RecentlyAdded";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="flex col-span-1 justify-center flex-col items-start gap-1">
          <p className="font-poppins text-secondary font-bold text-5xl">
            World’s Biggest
          </p>
          <p className="font-poppins text-accent font-bold text-5xl">
            Anitque Collection
          </p>
          <span className="font-inter text-sm text-gray-500 mt-3">
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded
            incommode.
          </span>
          <div className="flex gap-8 mt-8">
            <PrimaryButton className="px-6 py-3">
              <span className="font-poppins font-semibold text-base">
                Discover Now
              </span>
            </PrimaryButton>
            <a className="flex gap-3 items-center group">
              <span className="h-12 w-12 p-4 rounded-full ring-4 shadow-xl transition-all ease-in-out duration-500 ring-primary group-hover:bg-secondary group-hover:scale-100">
                <FastForwardIcon className="text-gray-600 group-hover:text-white" />
              </span>
              <span className="font-poppins font-semibold transition-all ease-in-out text-base text-gray-500 group-hover:text-gray-800">
                Watch Video
              </span>
            </a>
          </div>
        </div>
        <div className="flex justify-end col-span-1">
          <img src="/images/pot.png" height="650" width="380" alt="Pot" />
        </div>
        <div className="flex col-span-1 justify-center flex-col gap-10 items-center">
          <div className="flex gap-6 group">
            <div className="bg-white h-fit items-center p-3 shadow-md rounded-lg group-hover:shadow-xl">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="h-6 w-6"
                  viewBox="0 0 22.908 26.763"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#fd8c4d" />
                      <stop offset="1" stopColor="#fd6c4d" />
                    </linearGradient>
                  </defs>
                  <g id="Group" transform="translate(-990 -247)">
                    <path
                      id="Vector"
                      d="M19.042,11.653,16.9,8.352a1.752,1.752,0,0,1-.2-.649A8.441,8.441,0,0,0,9.173,0a2.67,2.67,0,0,1-.892,2.257L6.859,3.471,7.3,5.3a2.64,2.64,0,0,1-.5,2.257A2.676,2.676,0,0,1,4.74,8.578a2.617,2.617,0,0,1-1.366-.367L1.784,7.223.223,8.211A.558.558,0,0,1,0,8.324v.141a9.764,9.764,0,0,0,3.374,7.28,1.1,1.1,0,0,1,.39.846v5.474a.735.735,0,0,0,.669.734h7.221a.745.745,0,0,0,.809-.734V18.622a.4.4,0,0,1,.39-.4h2.509a1.407,1.407,0,0,0,1.394-1.411V13.374a.281.281,0,0,1,.279-.282h1.227A.918.918,0,0,0,19.042,11.653Z"
                      transform="translate(993.705 250.963)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Vector-2"
                      data-name="Vector"
                      d="M5.964,9.262l2.119,1.3a.782.782,0,0,0,1.171-.846L8.668,7.287a.841.841,0,0,1,.251-.79l1.9-1.637a.788.788,0,0,0-.446-1.383l-2.481-.2a.8.8,0,0,1-.669-.48L6.27.487a.783.783,0,0,0-1.45,0L3.873,2.8a.766.766,0,0,1-.669.48l-2.481.2A.766.766,0,0,0,.276,4.832l1.9,1.637a.841.841,0,0,1,.251.79L1.837,9.713a.782.782,0,0,0,1.171.846l2.119-1.3A.879.879,0,0,1,5.964,9.262Z"
                      transform="translate(990 247)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <span className="font-inter font-extrabold text-3xl text-left">
              <span className="text-gray-800">2591</span>
              <p className="font-inter font-extralight text-gray-400 text-sm">
                Year
              </p>
            </span>
          </div>
          <div className="flex gap-6 group">
            <div className="bg-white h-fit items-center p-3 shadow-md rounded-lg group-hover:shadow-xl">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="h-6 w-6"
                  viewBox="0 0 22.686 25.808"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#fd8c4d" />
                      <stop offset="1" stopColor="#fd6c4d" />
                    </linearGradient>
                  </defs>
                  <g id="Group" transform="translate(-990 -355)">
                    <path
                      id="Vector"
                      d="M4.545,0h13.6a1.071,1.071,0,0,1,1.046,1.058V3.012c4.988.814,4.5,9.525-.563,9.607a7.876,7.876,0,0,1-5.631,4.4V21.33h1.77c.322,0,.563.326.644.651l.8,3.175c.08.326-.322.651-.644.651H7.2c-.4,0-.8-.326-.724-.651l.8-3.175c.161-.326.322-.651.724-.651H9.694V17.015a7.876,7.876,0,0,1-5.631-4.4c-5.068-.081-5.551-8.793-.563-9.607V1.058A1.071,1.071,0,0,1,4.545,0ZM11.7,4.152l.8,2.361h2.574c.885,0,.885.244.161.733L13.233,8.711l.8,2.524c.241.814,0,.9-.644.407l-2.011-1.465L9.292,11.642c-.724.57-.8.407-.563-.407l.8-2.442L7.441,7.246c-.724-.488-.563-.733.241-.651h2.494l.8-2.524C11.222,3.257,11.464,3.338,11.7,4.152Zm7.481,6.839V4.559C21.841,5.373,21.841,10.177,19.186,10.991Zm-15.687,0V4.559C.845,5.373.845,10.177,3.5,10.991Z"
                      transform="translate(990 355)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <span className="font-inter font-extrabold text-3xl text-left">
              <span className="text-gray-800">591</span>
              <p className="font-inter font-extralight text-gray-400 text-sm">
                Bids So far.
              </p>
            </span>
          </div>
          <div className="flex gap-6 group">
            <div className="bg-white h-fit items-center p-3 shadow-md rounded-lg group-hover:shadow-xl">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="h-6 w-6"
                  viewBox="0 0 27.852 22.775"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#fd8c4d" />
                      <stop offset="1" stopColor="#fd6c4d" />
                    </linearGradient>
                  </defs>
                  <g id="Group" transform="translate(-987 -465)">
                    <path
                      id="Vector"
                      d="M13.125,17.574l-1.362-.031a1.036,1.036,0,0,1-.96-.689,1.075,1.075,0,0,1,.279-1.159l3.188-2.913V.94A.937.937,0,0,0,13.342,0H.929A.937.937,0,0,0,0,.94v20.9a.937.937,0,0,0,.929.94H5.2v-4.26a.379.379,0,0,1,.371-.376H8.791a.379.379,0,0,1,.371.376v4.229h4.148a1.653,1.653,0,0,1-.124-.658V17.574ZM2.507,4.981A.279.279,0,0,1,2.786,4.7H5.665a.279.279,0,0,1,.279.282V7.894a.279.279,0,0,1-.279.282H2.786a.279.279,0,0,1-.279-.282Zm3.5,9.21a.279.279,0,0,1-.279.282H2.848a.279.279,0,0,1-.279-.282V11.278A.279.279,0,0,1,2.848,11H5.727a.279.279,0,0,1,.279.282ZM8.265,4.95a.279.279,0,0,1,.279-.282h2.91a.279.279,0,0,1,.279.282V7.863a.279.279,0,0,1-.279.282H8.574A.279.279,0,0,1,8.3,7.863V4.95Zm.341,9.523a.279.279,0,0,1-.279-.282V11.278A.279.279,0,0,1,8.605,11h2.879a.279.279,0,0,1,.279.282v2.913a.279.279,0,0,1-.279.282Z"
                      transform="translate(987 465)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Vector-2"
                      data-name="Vector"
                      d="M13.744,5.075V.846H11.453v2.1L8.42.125a.525.525,0,0,0-.681,0L0,7.174l2.384.063v5.545A.625.625,0,0,0,3,13.408H6.408V10.244a.691.691,0,0,1,.681-.689H9.132a.691.691,0,0,1,.681.689v3.164h3.374a.625.625,0,0,0,.619-.627V7.362l2.26-.157Zm-4.21.815a.492.492,0,0,1-.5.5H7.182a.492.492,0,0,1-.5-.5v-.5a.492.492,0,0,1,.5-.5H9.039a.492.492,0,0,1,.5.5Z"
                      transform="translate(998.787 474.314)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <span className="font-inter font-extrabold text-3xl text-left">
              <span className="text-gray-800">India</span>
              <p className="font-inter font-extralight text-gray-400 text-sm">
                Origin
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full mt-16">
        <div className="grid grid-cols-5 bg-white text-center shadow-md rounded-xl p-8 hover:shadow-xl">
          <div className="col-span-1 flex flex-col gap-2 justify-center items-center">
            <span className="font-inter font-semibold text-base">Location</span>
            <select className="px-3 py-1 font-inter text-sm text-gray-500 focus:outline-none">
              <option>Norway</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
          <div className="col-span-1 flex flex-col gap-2 justify-center items-center">
            <span className="font-inter font-semibold text-base">Religion</span>
            <select className="px-3 py-1 font-inter text-sm text-gray-500 focus:outline-none">
              <option>Astaro</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
          <div className="col-span-1 flex flex-col gap-2 justify-center items-center">
            <span className="font-inter font-semibold text-base">Year</span>
            <select className="px-3 py-1 font-inter text-sm text-gray-500 focus:outline-none">
              <option>591 AK</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
          <div className="col-span-1 flex flex-col gap-2 justify-center items-center">
            <span className="font-inter font-semibold text-base">Type</span>
            <select className="px-3 py-1 font-inter text-sm text-gray-500 focus:outline-none">
              <option>Weapons</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <SecondaryButton className="py-3 px-9">
              <span className="flex justify-center items-center gap-2">
                <SearchIcon className="w-6 h-6" />
                <span>Search</span>
              </span>
            </SecondaryButton>
          </div>
        </div>
      </div>
      <RecentlyAdded />
    </>
  );
};

export default Home;
