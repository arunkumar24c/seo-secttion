import React from 'react'
import Img from "../assest/Group 62611912.png"

const MbaContainer = () => {
  return (
    <div name="MbaContainer">
      <div className="bg-[#ffffff] p-4">
        <h1 className="text-2xl font-bold text-[#1A1757] mb-4">
          The MBA education system in Canada
        </h1>

        <p className="text-[#696969] text-[18px] mb-2">
          Before considering applying for an MBA in Canada, you must have
          completed a recognized bachelor’s degree. Most business schools
          require a four-year undergraduate education. However, some business
          schools have also recently accepted three-year bachelor’s degrees. 
        </p>
        <p className="text-[#696969] text-[18px] mb-2">
          The MBA programs in Canada are robust and can be tailored to your
          requirements. The MBA course duration in Canada is two years, but at
          certain universities, such as the Smith School of Business and Ivey
          Business School, you can complete your MBA in a year. 
        </p>
        <p className="text-[#696969] text-[18px] mb-2">
          Every business school has its structure, but most start with
          foundation or core courses. Foundation topics include leadership,
          organizational behavior, finance, accounting, strategy, and economics.
          Once you complete these, you can choose your specialization and
          related electives based on the industry you want to pursue after
          graduation. It could be human resources, finance, marketing, or
          information technology. 
        </p>
        <p className="text-[#696969] text-[18px] mb-2">
          At most business schools, an internship is part of the curriculum. You
          can complete your training in any term after the core. At Rotman
          School of Management, for example, the entire first year is spent on
          the core, with the last term offering core electives. The summer break
          between the two years is utilized for internships, and the second year
          is where you select your MBA major and electives. At the Desautels
          Faculty of Management, however, only the fall term focuses on the
          core; you can start choosing electives from the winter term.
        </p>
        {/* 2nd para  */}
        <div>
          <p>
            Besides the Full-Time MBA, Canadian business schools offer MBA
            programs that are structured differently:
          </p>
          {/* lists */}
          <div className="p-3">
            <ul>
              <li className="text-[#696969] font-normal pb-2">
                •
                <span className="text-[#696969] font-bold text-lg">
                  Executive MBA (EMBA) –
                </span>
                This hyper-specialized MBA takes over 13-15 months. This is
                ideal for senior management applicants whose average work
                experience is about 8 to 10 years and who continue to work
                throughout the course. The EMBA enhances the skill levels of
                upper management to accelerate their career growth.
              </li>
              <li className="text-[#696969] font-normal pb-2">
                •
                <span className="text-[#696969] font-bold text-lg">
                  Part-time MBA –
                </span>
                Meant for the working professional who can’t afford to take a
                year or two off for a dedicated MBA. This program lets you
                understand business fundamentals, offers weekday morning or
                evening classes, and is spread over three to four years. This
                program may have week-long intensives during the spring or
                summer terms.
              </li>
              <li className="text-[#696969] font-normal pb-2">
                •
                <span className="text-[#696969] font-bold text-lg">
                  Joint MBA or Dual degrees –
                </span>
                This unique structure combines disciplines, such as law,
                pharmacy education, medicine, engineering, and fine arts, among
                others, with an MBA program. This is designed to impart
                knowledge from two different sectors so that you can bring some
                business insights to your chosen profession.
              </li>
            </ul>
          </div>
          {/* poster container */}
          <div className=" flex justify-center bg-[#f8f8f8] rounded-lg sm:w-full lg:w-full">
            {/* left content */}
            <div className="w-[460px] h-[150px] pt-[60px] pl-4 pr-5">
              <h2 className="text-2xl font-bold text-[#1A1757] ">
                Speak to our Canada expert to
                <br /> understand the education system
              </h2>
              <div className="pl-3 pt-5">
                <button className="bg-[#D82128] w-[131px] h-[39px] rounded-full text-white font-medium">
                  Consult Now
                </button>
              </div>
            </div>
            {/* right content */}
            <div className=' pt-7 pl-5 mt-3'>
              <img src={Img} className="w-[228px] h-[163px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MbaContainer