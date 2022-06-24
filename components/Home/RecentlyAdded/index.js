/* eslint-disable @next/next/no-img-element */
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const RecentlyAdded = () => {
  return (
    <div className="mt-32">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-start">
          <span className="font-poppins text-5xl font-bold text-gray-800">
            RecentlyAdded
          </span>
          <span className="font-inter text-gray-400 text-base mt-2">
            Not thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </span>
        </div>
        <div className="flex justify-evenly gap-4 items-center">
          <button className="h-12 w-12 rounded-full text-center items-center p-3 border-2 border-gray-400 transition-all ease-in-out shadow-md group hover:border-2 hover:border-primary hover:shadow-xl">
            <ArrowLeftIcon className="h-5 w-5 text-gray-500 group-hover:text-primary" />
          </button>
          <button className="h-12 w-12 rounded-full p-3 items-center border-2 border-primary bg-primary transition-all ease-in-out shadow-md group hover:border-2 hover:bg-white hover:shadow-xl">
            <ArrowRightIcon className="h-5 w-5 text-white group-hover:text-primary" />
          </button>
        </div>
      </div>
      <div className="flex mt-8">
        <div className="flex flex-col gap-6 rounded-md p-4 border border-gray-300 transition-all ease-in-out hover:shadow-lg hover:bg-white hover:border-white">
          <img
            src="/images/added-1.png"
            width="350"
            height="190"
            alt="added-1"
          />
          <span className="flex flex-col gap-1">
            <span className="font-poppins text-xl font-semibold text-gray-800">
              Yet bed any for travelling
            </span>
            <span className="font-inter font-medium text-xs text-gray-400">
              <span className="border-r pr-2 border-gray-400">Year 1192</span>
              <span className="ml-2">Weapons</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
