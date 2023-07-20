import React from 'react'
import Img from "../assest/Layer_1 (1).png";
const Overview = () => {
  return (
    <div>
      <div className="bg-[#ffffff] p-4">
        <p className="text-[#404040] text-[12px]">
          Pre-College Advising • Post
        </p>
        <h1 className="text-2xl font-bold text-[#1A1757] mb-4">
          Why should you apply for an MBA in Canada?{" "}
        </h1>
        <img src={Img} className="w-[539px] h-[238px]" />
        <p className="text-[#696969] text-[18px]">
          Known for providing a high quality of life, Canada is home to
          approximately 6,00,000 international students, and these numbers keep
          growing. If you want to pursue an MBA in Canada from India, here are
          some factors that you should consider:
        </p>
        {/* list 1 */}
        <div className="p-3">
          <ul>
            <li className="text-[#696969] font-normal pb-2">
              •
              <span className="text-[#1A1757] font-bold text-lg">
                Job opporunities:
              </span>
              Canada has the 9th largest economy in the world by nominal GDP and
              is listed as one of the best countries to live and work.
              Currently, Canada’s employment rate is 62.4 percent which is
              marginally better than that of the USA’s 60.2 percent. Jobs are
              booming across all sectors.
            </li>
            <li className="text-[#696969] font-normal pb-2">
              •
              <span className="text-[#1A1757] font-bold text-lg">
                High employability:
              </span>
              Canadian business schools consistently rank in the top 100
              business schools of the world, making graduates from these schools
              highly sought after. A record-breaking 96 percent of Rotman School
              of Management students gained employment within three months of
              graduation in 2022. 58 percent of full-time MBA students in the
              class of 2023 are international students. In 2022, 96 percent of
              the MBA graduates in the Ivey Business School seeking employment
              in Canada received an offer. 40 percent of this batch were
              international students.
            </li>
            <li className="text-[#696969] font-normal pb-2">
              •
              <span className="text-[#1A1757] font-bold text-lg">
                High return on investment:
              </span>
              MBA programs in Canada have a high ROI and positive qualification
              outcomes. On average, it takes about four years to recover your
              MBA costs, but it can be as quick as two to three years. In terms
              of salary, you can expect about a 75 percent increase as compared
              to your pre-MBA salary or even higher. For example, the Smith
              School of Business has seen the average base salary of its
              graduates increase by 73 percent from pre-MBA jobs.
            </li>
            <li className="text-[#696969] font-normal pb-2">
              •
              <span className="text-[#1A1757] font-bold text-lg">
                Attractive immigration policies:
              </span>
              The Canadian government has made it easy for Indian students to
              apply for permanent residency (PR) and citizenship. In the US or
              UK, this might take anywhere between 5 to 10 years, while in
              Canada, you can apply for a three-year work permit that allows you
              to apply for a PR immediately after.
            </li>
            <li className="text-[#696969] font-normal pb-2">
              •
              <span className="text-[#1A1757] font-bold text-lg">
                Affordable education:
              </span>
              Canada is much more affordable than the US and UK. In Canada, the
              tuition cost for an MBA in an average college for international
              students is $30,435-$31,856.  The universities also offer a
              variety of scholarships that could help save money. 
            </li>
            <li className="text-[#696969] font-normal pb-2">
              •
              <span className="text-[#1A1757] font-bold text-lg">
                Multicultural environment:
              </span>
              Canada has many ethnic and cultural groups, with a sizeable Indian
              population. The number of Indians who became permanent residents
              in Canada increased by more than 105 percent in the past decade. 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview