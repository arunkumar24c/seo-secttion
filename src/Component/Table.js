import React from "react";

const Table = () => {
  const data = [
    [
      "School",
      "Average GMAT Score",
      "Average Undergraduate GPA",
      "Average Work Experience (in years)",
      "Class Size (Fall)",
      "Most popular incoming class major",
      "Percent age of class with the most popular majors",
      "International Students",
      "Women",
    ],
    [
      "The Rotman School of Management, University of Toronto",
      "674",
      "3.6",
      "4",
      "275",
      "Business/Commerce",
      "31%",
      "65%",
      "45%",
    ],
    [
      "Desautels Faculty of Management, McGill University",
      "675",
      "NA",
      "5.5",
      "65-85",
      "Business & Engineering",
      "35% Each",
      "60%",
      "31%",
    ],
    [
      "Ivey Business School, Western University",
      "530 - 760",
      "NA",
      "5.5",
      "146",
      "Business",
      "NA",
      "35%",
      "35%",
    ],
    [
      "Smith School of Business, Queen's University",
      "Oliver Taylor",
      "8th",
      "Liam Walker",
      "Charlotte Hill",
      "Henry White",
      "Abigail Jackson",
      "James Johnson",
      "Grace Evans",
    ],
    [
      "Title5",
      "Emma Anderson",
      "9th",
      "Alexander Harris",
      "Amelia Wilson",
      "Benjamin Martin",
      "Ella Thompson",
      "William Davis",
      "Victoria Brown",
    ],
    [
      "Title6",
      "Daniel Lee",
      "10th",
      "Mia Turner",
      "Daniel Anderson",
      "Sophia Lee",
      "Noah Thomas",
      "Emily Wilson",
      "John Doe",
    ],
    [
      "Title7",
      "Sophia Taylor",
      "11th",
      "Emily Wilson",
      "David Johnson",
      "Emma Thompson",
      "Sarah Williams",
      "John Doe",
      "Jane Smith",
    ],
    [
      "Title8",
      "Emily Johnson",
      "12th",
      "Sophia Lee",
      "Noah Thomas",
      "Ava Clark",
      "Daniel Anderson",
      "Jane Smith",
      "David Johnson",
    ],
  ];

  return (
    <div className="w-[94%] mt-6 lg:w-full sm:w-full">
      <table className="table-auto w-full border-1 border-[#696969]">
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
