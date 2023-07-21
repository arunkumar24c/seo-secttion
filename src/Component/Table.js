import React from "react";

const Table = () => {
 
  return (
    <div className="w-[94%] mt-6 lg:w-full sm:w-full">
      <table className="table-auto sm:w-full w-full border-1 lg:w-full border-[#696969]">
        <thead className="bg-[#0ea2aa] text-[#ffffff]">
          <tr>
            <th>School</th>
            <th>
              Average <br />
              GMAT
              <br /> Score
            </th>
            <th>
              Average
              <br /> Undergrad
              <br />
              uate GPA
            </th>
            <th>
              Average Work <br />
              Experience
              <br /> (in years)
            </th>
            <th>
              Class Size <br />
              (Fall)
            </th>
            <th>
              Most popular
              <br /> incoming <br />
              class major
            </th>
            <th>
              Percent age of <br />
              class with the <br />
              most popular
              <br /> majors
            </th>
            <th>
              International
              <br /> Students
            </th>
            <th>Women</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className="text-[#1a1757] font-bold p-4">
              The Rotman School
              <br /> of Management,
              <br /> University of Toronto
            </td>
            <td className="text-[#696969] p-4">674</td>

            <td className="text-[#696969] p-4">4</td>
            <td className="text-[#696969] p-4">275</td>
            <td className="text-[#696969] p-4">Business/Commerce</td>
            <td className="text-[#696969] p-4">31%</td>
            <td className="text-[#696969] p-4">65%</td>
            <td className="text-[#696969] p-4">45%</td>
          </tr>
          <tr>
            <td className="text-[#1a1757] font-bold p-4">
              Desautels
              <br /> Faculty of
              <br /> Management,
              <br /> McGill University
            </td>
            <td className="text-[#696969] p-4">675</td>

            <td className="text-[#696969] p-4">NA</td>
            <td className="text-[#696969] p-4">5.5</td>
            <td className="text-[#696969] p-4">65-85</td>

            <td className="text-[#696969] p-4">Business&Engineering</td>
            <td className="text-[#696969] p-4">35%Each</td>
            <td className="text-[#696969] p-4">60%</td>
            <td className="text-[#696969] p-4">31%</td>
          </tr>
          <tr>
            <td className="text-[#1a1757] font-bold p-4">
              Ivey Business
              <br /> School, Western <br /> University
            </td>
            <td className="text-[#696969] p-4">530 - 760</td>

            <td className="text-[#696969] p-4">NA</td>
            <td className="text-[#696969] p-4">5.5</td>
            <td className="text-[#696969] p-4">146</td>
            <td className="text-[#696969] p-4">Business</td>
            <td className="text-[#696969] p-4">NA</td>
            <td className="text-[#696969] p-4">35%</td>
            <td className="text-[#696969] p-4">35%</td>
          </tr>
          <tr>
            <td className="text-[#1a1757] font-bold p-4">
              Smith School of
              <br /> Business, Queen's
              <br /> University
            </td>
            <td className="text-[#696969] p-4">640</td>

            <td className="text-[#696969] p-4">NA</td>
            <td className="text-[#696969] p-4">4.2</td>
            <td className="text-[#696969] p-4">69</td>
            <td className="text-[#696969] p-4">Business</td>
            <td className="text-[#696969] p-4">25%</td>
            <td className="text-[#696969] p-4">30%</td>
            <td className="text-[#696969] p-4">40%</td>
          </tr>
          <tr className="">
            <td className="text-[#1a1757] font-bold p-4 ">
              Schulich School of
              <br /> Business, York
              <br /> University
            </td>
            <td className="text-[#696969] p-4">636</td>
            <td className="text-[#696969] p-4">6.62</td>
            <td className="text-[#696969] p-4">5.5</td>
            <td className="text-[#696969] p-4">270</td>
            <td className="text-[#696969] p-4">Eng./Math/Science</td>
            <td className="text-[#696969] p-4">43%</td>
            <td className="text-[#696969] p-4">63%</td>
            <td className="text-[#696969] p-4">40%</td>
          </tr>
          <tr className="">
            <td className="text-[#1a1757] font-bold p-4 ">
              Alberta School of
              <br /> Business, University
              <br /> of Alberta
            </td>
            <td className="text-[#696969] p-4">535</td>
            <td className="text-[#696969] p-4">3.2</td>
            <td className="text-[#696969] p-4">5.4</td>
            <td className="text-[#696969] p-4">54</td>
            <td className="text-[#696969] p-4">
              Engineering &<br /> Financial services
            </td>
            <td className="text-[#696969] p-4">
              12%
              <br />
              each
            </td>
            <td className="text-[#696969] p-4">49%</td>
            <td className="text-[#696969] p-4">30%</td>
          </tr>
          <tr className="">
            <td className="text-[#1a1757] font-bold p-4 ">
              John Molson School
              <br /> of Business,
              <br /> Concordia University
            </td>
            <td className="text-[#696969] p-4">640</td>
            <td className="text-[#696969] p-4">3.3</td>
            <td className="text-[#696969] p-4">5.5</td>
            <td className="text-[#696969] p-4">80</td>
            <td className="text-[#696969] p-4">Engineering</td>
            <td className="text-[#696969] p-4">26%</td>
            <td className="text-[#696969] p-4">49.2%</td>
            <td className="text-[#696969] p-4">40.2%</td>
          </tr>
          <tr className="p-3">
            <td className="text-[#1a1757] font-bold p-4 ">
              UBC Sauder School
              <br /> of Business
            </td>
            <td className="text-[#696969] p-4">NA</td>
            <td className="text-[#696969] p-4">NA</td>
            <td className="text-[#696969] p-4">7</td>
            <td className="text-[#696969] p-4">101</td>
            <td className="text-[#696969] p-4">Engineering</td>
            <td className="text-[#696969] p-4">37%</td>
            <td className="text-[#696969] p-4">67%</td>
            <td className="text-[#696969] p-4">33%</td>
          </tr>
        </tbody>
      </table>
      <p className="text-[#696969] font-normal">
        Disclaimer: These figures are subject to change by the respective
        universities.<br/> Source: University websites.
      </p>
    </div>
  );
};

export default Table;
