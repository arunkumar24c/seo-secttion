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
import Redpen from "./Redpen";
import Faq from "./Faq";
import TrpSection from "./TrpSection";
import { Link } from "react-scroll";

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
                  <Link to="Overview">Overview</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="MbaContainer">MBA system in Canada</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Popular">Popular Canadian Universities</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="CostMba">Cost of MBA in Canada</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Scholarship">Scholarships for MBA in Canada</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="TopProgram">Top Programs and Specialisations</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Intake">Intake & Deadline</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Application">Application Requirements</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Visa">Visa for MBA in Canada</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Working">Work during Study</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Redpen">Why The Red Pen?</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="TrpSection">Testimonials</Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Faq">FAQs</Link>
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
        <TopProgram />
        <Intake />
        <Application />
        <Visa />
        <Working />
        <Redpen />
        <TrpSection />
        <Faq />
      </div>
    </div>
  );
};

export default Container;
