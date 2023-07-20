import React from "react";
import img from "../assest/Mask group.png";
import img1 from "../assest/Mask group (1).png";
import img2 from "../assest/Mask group (2).png";

const Redpen = () => {
  return (
    <div className="mt-7 mb-7" name="Redpen">
      <h1 className="text-[#1a1757] font-bold text-2xl mb-2">
        Why The Red Pen?
      </h1>
      <p className="text-[#696969] mb-3">
        The Red Pen is committed to finding the ‘best-fit’ institution for you.
        We are committed to helping our applicants and their families by first
        understanding their cultural background, financial plans, long-term
        goals, interests, academic performance, and professional expertise
      </p>
      <ul className="p-5">
        <li className="mb-4 text-[#696969]">
          • Our consultants include graduates from 15 of the top 20 global
          business schools, including Wharton School of the University of
          Pennsylvania, Columbia Business School, INSEAD, HEC Paris, The New
          York University Leonard N. Stern School of Business, UCLA Anderson
          School of Management, Samuel Curtis Johnson Graduate School of
          Management, IESE Business School and more.
        </li>
        <li className="mb-4 text-[#696969]">
          • We have dedicated country specialists with in-depth knowledge about
          leading business schools, their ethos, application requirements, and
          processes in the US, UK, Canada, Europe, Singapore, and more.
        </li>
        <li className="mb-4 text-[#696969]">
          • Our experienced writers brainstorm and edit 500+ essays and resumes
          every year. They have been published or featured in the Hindustan
          Times, Economic Times, Indian Express, Mumbai Mirror, Business
          Standard, The Financial Express, Yahoo! Finance, and many other media
          outlets.
        </li>
      </ul>
      <p className="text-[#696969]">
        We have worked with applicants whose profiles range from finance and
        investing to technology, retail, advertising, marketing, management
        consulting, family business, not-for-profit, and the armed forces.
      </p>
      {/* card */}
      <div className="bg-[#f3f3f3] h-auto mt-8 mb-5">
        <h1 className="text-[#1a1757] flex justify-center font-bold text-2xl pt-4 pb-5">
          Related Post
        </h1>
        {/* 1st */}
        <div className="flex flex-wrap justify-center gap-4 h-auto mb-5">
          <div className="w-[358px] h-[431px]  bg-[#ffffff]">
            <img src={img} className="w-[358px] h-[192px]" />
            <div className="h-231px p-2">
              <p className="text-[#404040] pb-2">
                Pre-College Advising • Guest Post
              </p>
              <h1 className="text-[#1a1757] pb-3 text-xl font-bold">
                A Day in the Life of a Charterhouse Online Student
              </h1>
              <p className="text-[#404040] pb-3">
                Exclusive one-on-one interactions in Mumbai and New Delhi by
                appointment only.
              </p>
              <p className="text-[#404040]">10/01/2023</p>
              <div className="flex justify-end items-center h-[56px] bg-[#f8f8f8]">
                <a href="" className="text-[#1a1757] font-bold">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="w-[358px] h-[421px]  bg-[#ffffff]">
            <img src={img1} className="w-[358px] h-[192px]" />
            <div className="h-231px p-2">
              <p className="text-[#404040] pb-2">
                Pre-College Advising • Guest Post
              </p>
              <h1 className="text-[#1a1757] pb-3 text-xl font-bold">
                Overcoming Education Inflation and Currency Depreciation
              </h1>
              <p className="text-[#404040] pb-3">
                Exclusive one-on-one interactions in Mumbai and New Delhi by
                appointment only.
              </p>
              <p className="text-[#404040]">10/01/2023</p>
              <div className="flex justify-end items-center h-[56px] bg-[#f8f8f8]">
                <a href="" className="text-[#1a1757] font-bold">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="w-[358px] h-[421px] lg:mb-5 sm:mb-5 bg-[#ffffff]">
            <img src={img2} className="w-[358px] h-[192px]" />
            <div className="h-231px p-2">
              <p className="text-[#404040] pb-2">Boarding School Series</p>
              <h1 className="text-[#1a1757] pb-3 text-xl font-bold">
                Meet Representatives From Leading British Boarding Schoolss
              </h1>
              <p className="text-[#404040] pb-3">
                Exclusive one-on-one interactions in Mumbai and New Delhi by
                appointment only.
              </p>
              <p className="text-[#404040]">10/01/2023</p>
              <div className="flex justify-end items-center h-[56px] bg-[#f8f8f8]">
                <a href="" className="text-[#1a1757] font-bold">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redpen;
