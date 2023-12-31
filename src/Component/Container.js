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
import { SectionScroll } from "../utilit";

const Container = () => {
  return (
    <div className="flex ">
      <div className="hidden xl:block xl:w-1/5 fixed overflow-y-scroll top-0">
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
                  <Link to="Overview" smooth duration={500}>
                    Overview
                  </Link>
                </a>
              </p>
              <p
                onClick={() => SectionScroll("mba-canada")}
                className="text-m text-[#1A1757] font-medium mb-7 "
              >
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="MbaContainer" smooth duration={500}>
                    MBA system in Canada
                  </Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Popular" smooth duration={500}>
                    Popular Canadian Universities
                  </Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="CostMba" smooth duration={500}>
                    Cost of MBA in Canada
                  </Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Scholarship" smooth duration={500}>
                    Scholarships for MBA in Canada
                  </Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="TopProgram" smooth duration={500}>
                    Top Programs and Specialisations
                  </Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Intake" smooth duration={500}>
                    Intake & Deadline
                  </Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Application" smooth duration={500}>
                    Application Requirements
                  </Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Visa" smooth duration={500}>
                    Visa for MBA in Canada
                  </Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Working" smooth duration={500}>
                    Work during Study
                  </Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Redpen" smooth duration={500}>
                    Why The Red Pen?
                  </Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="TrpSection" smooth duration={500}>
                    Testimonials
                  </Link>
                </a>
              </p>
              <p className="text-m text-[#1A1757] font-medium mb-7 ">
                <a href="" className="border-b-2 border-b-[#1A1757]">
                  <Link to="Faq" smooth duration={500}>
                    FAQs
                  </Link>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right container */}
      <div className=" xl:flex xl:justify-end sm:w-full">
        <div className="xl:w-4/5 sm:w-full lg:w-full p-6">
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
    </div>
  );
};

export default Container;
