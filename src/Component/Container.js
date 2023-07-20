import React from "react";

import Overview from "./Overview";
import MbaContainer from "./MbaContainer";
import Popular from "./Popular";
import CostMba from "./CostMba";
import Scholarship from "./Scholarship";
import TopProgram from "./TopProgram";
import Intake from "./Intake";
import Application from "./Application";
import Visa from "./Visa";
import Working from "./Working";

const Container = () => {
  return (
    <div className="flex flex-wrap">
      {/* left container */}
      <div className="w-full hidden xl:block lg:block top-0 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
        <div className="bg-[#ffffff] p-4">
          <div className="">
            <h2 className="text-lg text-[#1A1757] font-bold mb-4">
              Stay in Touch
            </h2>
            <div className="bg-[#E1E1E1] p-5">
              <p className="text-[12px] mb-2 text-[#1A1757] ">
                Fill the Form for Regular update
              </p>
              <p className="">
                <a href="" className="text-[#D82128]  ">
                  Subscribe Now{" "}
                </a>
              </p>
            </div>
          </div>

          <div className="bg-[#ffffff] mt-5">
            <h2 className="text-lg text-[#1A1757] font-bold mb-4">Jump To </h2>
            {/* lists */}
            <div className="p-3">
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  Overview
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  MBA system in Canada
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  Popular Canadian Universities
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  Cost of MBA in Canada
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  Scholarships for MBA in Canada
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  Top Programs and Specialisations
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  Intake & Deadline
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  Application Requirements
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  Visa for MBA in Canada
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  Work during Study
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  Why The Red Pen?
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  Testimonials
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  FAQs
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* right container */}
      <div className="w-full sm:w-full  lg:w-2/3 xl:w-3/4 px-4">
        <Overview />
        <MbaContainer />
        <Popular />
        <CostMba />
        <Scholarship />
        <TopProgram/>
        <Intake/>
        <Application/>
        <Visa/>
        <Working/>
      </div>
    </div>
  );
};

export default Container;
