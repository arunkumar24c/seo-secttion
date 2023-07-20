import React from "react";

const CostMba = () => {
  return (
    <div className="mt-8" name="CostMba">
      <h1 className="text-[#1A1757] text-2xl font-bold mb-4">
        Cost of MBA in Canada for International Students
      </h1>
      <p className="text-[#696969] text-lg mb-5">
        Pursuing an MBA degree in Canada has become a popular choice for
        students seeking advanced business education. However, it is important
        to consider the associated costs before making this decision.
      </p>
      {/* table  */}
      <table className="xl:w-[1100px] xl:h-[260px] lg:w-full sm:w-full">
        <thead className="table-auto bg-[#0EA2AA] text-[#ffffff] p-2">
          <tr className="">
            <th className="p-2">Program</th>
            <th className="p-2">Canada</th>
            <th className="p-2">United States</th>
            <th className="p-2">United Kingdom</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-[#1a1757] font-bold p-3">Full-Time MBA</td>
            <td className="text-[#696969] p-3">35, 331 to 101,560 p.a</td>
            <td className="text-[#696969] p-3">60,000 to 80,000 p.a</td>
            <td className="text-[#696969] p-3">50,000 to 90,000 p.a.</td>
          </tr>
          {/* 2nd */}
          <tr>
            <td className="text-[#1a1757] font-bold p-3">EMBA</td>
            <td className="text-[#696969] p-3">59,768 to 103,533</td>
            <td className="text-[#696969] p-3">150,000 to 220,000</td>
            <td className="text-[#696969] p-3">50,000 to 130,000</td>
          </tr>
          {/* 3rd */}
          <tr>
            <td className="text-[#1a1757] font-bold p-3">Part-Time MBA</td>
            <td className="text-[#696969] p-3">50,000 to 100,602</td>
            <td className="text-[#696969] p-3">50,000 to 200,000</td>
            <td className="text-[#696969] p-3">40,000 to 100,000</td>
          </tr>
        </tbody>
      </table>
      <p className="text-[#696969] font-normal mb-4 mt-7">
        Disclaimer: Costs are approximate as of 2023 and subject to change. The
        duration of MBA may vary. UK Full-Time MBA can be one year. All figures
        are in USD. International students must review immigration regulations
        before considering part-time study.
      </p>
      <p className="text-[#696969] font-medium mb-4 mt-6">
        When looking at the cost of an MBA in Canada for Indian students, one
        facet often overlooked is the cost of living, which should be a
        criterion in your business school selection.
      </p>
      {/* 2nd table */}
      <div className="flex justify-center mb-11 mt-11">
        <table className="table-auto xl:ml-[8rem] xl:w-[592px] xl:h-[111px] sm:">
          <thead>
            <tr className="text-[#ffffff] bg-[#0EA2AA] ">
              <th className="p-1">Canada</th>
              <th className="p-1">United States</th>
              <th className="p-1">United Kingdom</th>
            </tr>
          </thead>
          <tbody className="text-[#696969]">
            <tr className="p-3">
              <td className="p-4">
                15,352 - 21,514
                <br /> per year
              </td>
              <td>
                34,111- 87,833
                <br /> per year
              </td>
              <td>
                19,920 – 25,680
                <br /> per year
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-[#696969] text-sm mb-11">
        Source: university and government websites.
      </p>
      {/* 2nd table */}
      <div className="flex justify-center mb-11 mt-11">
        <table className="table-auto">
          <thead>
            <tr>
              <th
                className="bg-[#0EA2AA] 
             text-[#ffffff] font-bold p-3 "
              >
                Expenses
              </th>
              <th
                className="bg-[#0EA2AA] 
             text-[#ffffff] font-bold p-3 "
              >
                Approximate yearly costs
              </th>
            </tr>
          </thead>
          <tbody className="p-2">
            <tr>
              <td className="bg-[#F0F0F0] p-3">Accommodation</td>
              <td className=" p-3">
                On campus:10,000
                <br /> Off-campus: 5,900
              </td>
            </tr>
            <tr>
              <td className="bg-[#F0F0F0] p-3">Public transportation</td>
              <td className=" p-3">1,000</td>
            </tr>
            <tr>
              <td className="bg-[#F0F0F0] p-3">Food</td>
              <td className=" p-4">2,900-3,700</td>
            </tr>
            <tr>
              <td className="bg-[#F0F0F0] p-3">
                Health insurance for<br/> international students
              </td>
              <td className=" p-3">550</td>
            </tr>
            <tr>
              <td className="bg-[#F0F0F0] p-4">
                Study material <br/>and stationery
              </td>
              <td className=" p-3">1500</td>
            </tr>
            <tr>
              <td className="bg-[#F0F0F0] p-3">Personal Expenses</td>
              <td className=" p-4">1500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-[#696969] font-normal">
        Disclaimer: Costs will vary by individual. All figures are listed in USD
        and based on residency in downtown Toronto. Figures are subject to
        change. Source: The Rotman School of Management, 2023
      </p>
      <p className="text-[#696969] font-bold">
        A Canadian education consultant can help estimate the total cost of an
        MBA in Canada for Indian students.
      </p>
    </div>
  );
};

export default CostMba;
