import React from 'react'
import Imgs from "../assest/Group 62611998.png"

const Visa = () => {
  return (
    <div className="mt-5" name="Visa">
      <h1 className="text-[#1a1757] font-bold text-2xl mb-4">
        Visa for MBA in Canada for International Students
      </h1>
      <h2 className=" font-bold text-[#696969]">Study Permit</h2>
      <p className="text-[#696969] mb-6">
        When applying for a visa, it is essential to add the cost of living to
        the cost of the MBA program in Canada for Indian students, as you will
        be required to maintain this minimum amount in your savings to prove
        that you have sufficient reserves to pay for your expenses when you
        apply for a study permit. Along with this, you will need a visitor visa,
        or an electronic travel authorization, which will be issued at the same
        time as your study permit.
      </p>
      <p className="text-[#696969] mb-6">
        Rather than attend business school in the Spring intake, most students
        defer to the Fall due to better job placements. But some schools, like
        Ivey Business School, only have a spring intake in March.
      </p>
      <div className="flex justify-center mb-11 mt-11">
        <table className="table-auto w-[654px] h-[232px] xl:w-[792px] xl:h-[111px] sm:w-full ">
          <thead>
            <tr className="text-[#ffffff] bg-[#0EA2AA] ">
              <th className="p-3">Persons coming to Canada</th>
              <th className="p-3">
                Amount of funds required per
                <br /> year (doesn’t include tuition fees)
              </th>
              <th className="p-3">
                Amount of funds required per
                <br /> month (apart from tuition)
              </th>
            </tr>
          </thead>
          <tbody className="text-[#696969]">
            <tr className="p-3">
              <td className="p-5 text-[#1a1757] font-bold bg-[#eaeaea]">
                You (the student)
              </td>
              <td className="p-3">CAN$10,000</td>
              <td className="p-3">CAN$833</td>
            </tr>
            <tr className="p-3">
              <td className="p-5 text-[#1a1757] font-bold bg-[#eaeaea]">
                First family member
              </td>
              <td className="p-3">CAN$4,000</td>
              <td className="p-3">CAN$333</td>
            </tr>
            <tr>
              <td className="p-5 text-[#1a1757] font-bold bg-[#eaeaea]">
                Every additional
                <br /> accompanying
                <br /> family member
              </td>
              <td className="p-3">CAN$3,000</td>
              <td className="p-3">CAN$255</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[#afafaf] mb-7">
        Source: Government of Canada website (How Much Money Do I Need To Study
        In Canada As An International Student? - Canada Immigration and Visa
        Information. Canadian Immigration Services and Free Online Evaluation.)
        <br />
        <span className="font-bold">Disclaimer: </span>These figures are from
        2021 and are a subject to change.
      </p>
      <p className="text-[#696969] font-normal mb-4">
        Your MBA in Canada works to quicken the process of attaining a PR. You
        can get a three-year work permit, depending on the institution and
        course. This allows you to work and apply for a PR simultaneously, with
        the Canadian education adding to your points tally. Once you have a PR,
        you must be on Canadian soil for three years before applying for
        citizenship. The USA, on the other hand, could be more lenient. Getting
        a PR or a green card in the US depends on the industry you join and at
        what position. And then, the wait time to get the PR in your hand could
        vary from 3 to 10 years.
      </p>
      <p className="text-[#696969] font-normal mb-4">
        Most MBA applicants wish to work in Canada after graduation for at least
        a few years. Work experience in Canada will help boost your resume stand
        out should you choose to return to your home country in a couple of
        years.
      </p>
      <p className="text-[#696969] font-normal mb-4">
        Since employment plays a significant role when selecting a business
        school, a Canadian visa easily stands out from its more famous neighbor.
        Doing an MBA from Canada offers one advantage no other country can
        match. It provides a virtual shortcut to permanent residence in the
        country. To address its historic labor shortage in Canada, the
        government is spearheading the federal Express Entry system, which
        includes specific points for Canadian education. This has made it easier
        for international graduates to achieve Canadian immigration.
      </p>
      <p className="text-[#696969] font-normal mb-4">
        This means MBA from a Canadian school can virtually guarantee permanent
        residence in Canada and a well-paying job in just six months
        post-completion. This process is cumbersome in the US or UK and might
        take anywhere between 5 to 10 years.
      </p>
      {/* post container  */}
      <div className=" lg:w-full flex justify-center xl:w-[950px] xl:h-[270px]  bg-[#f8f8f8] sm:w-full  mt-11 rounded-lg">
        {/* left content */}
        <div className="w-[460px] h-[270px] pt-11">
          <h2 className="text-2xl font-bold  text-[#1A1757]">
            We help you select an MBA program in<br/> Canada as per your financialrequirement
          </h2>
          <div className=" pt-5">
            <button className="bg-[#D82128] w-[131px] h-[39px] rounded-full  text-white font-medium">
              Consult Now
            </button>
          </div>
        </div>
        {/* right content */}
        <div>
          <img
            src={Imgs}
            className="w-[261px] h-[153px] pl-11 pt-6 mt-2 xl:pt-9 xl:h-[171px] sm:h-[180px] sm:w-[280px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Visa