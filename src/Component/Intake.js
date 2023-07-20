import React from 'react'

const Intake = () => {
  return (
    <div className="mt-5" name="Intake">
      <h1 className="text-[#1a1757] text-2xl font-bold mb-3">
        Intake and Deadlines for MBA in Canada
      </h1>
      <p className="text-[#696969] mb-3">
        Business schools in Canada have varying intakes. Fall and Winter are the
        most common, with a handful of universities offering a Spring or Summer
        intake for a limited number of programs.
      </p>
      <p className="text-[#696969] mb-3">
        The application deadline for each intake varies and consists of multiple
        rounds, some even going up to Round 6. You should apply in Round 1 as
        the available seats reduce with every subsequent round, and the latter
        rounds are usually reserved for domestic students.
      </p>
      <p className="text-[#696969] mb-3">
        Below are the deadlines for most Canadian business schools, but these
        can vary significantly. Some schools, such as Schulich School of
        Business, close their Round 3 application deadlines for the Fall intake
        as early as October of the previous year. And some can stretch it into
        April of the course year, such as Rotman School of Management and HEC
        Montreal. It is essential to check the deadline for each university with
        a consultancy for Canada study.
      </p>
      {/* table container */}
      <div className="flex justify-center mb-11 mt-11">
        <table className="table-auto w-[786px] h-[300px] xl:ml-[8rem] xl:w-[592px] xl:h-[111px] ">
          <thead>
            <tr className="text-[#ffffff] bg-[#0EA2AA] ">
              <th className="p-3">Intake</th>
              <th className="p-3">Starts In</th>
              <th className="p-3">Deadlines In</th>
            </tr>
          </thead>
          <tbody className="text-[#696969]">
            <tr className="p-3">
              <td className="p-5 text-[#1a1757] font-bold bg-[#eaeaea]">
                Fall
              </td>
              <td className="p-3">August - September</td>
              <td className="p-3">
                Round 1: August - October of the previous year
                <br /> Round 2: January of the course year
                <br /> Round 3: March of the course year
              </td>
            </tr>
            <tr className="p-3">
              <td className="p-5 text-[#1a1757] font-bold bg-[#eaeaea]">
                Winter
              </td>
              <td className="p-3">January</td>
              <td className="p-3">
                Of the previous year:
                <br /> Round 1: Jan to March
                <br /> Round 2: March to April <br />
                Round 3: April to May
              </td>
            </tr>
            <tr>
              <td className="p-5 text-[#1a1757] font-bold bg-[#eaeaea]">
                Spring <br />
                (Summer)
              </td>
              <td className="p-3">March-May</td>
              <td className="p-3">
                Of the previous year:
                <br /> Round 1: Jan to March
                <br /> Round 2: March to April <br />
                Round 3: April to May
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[#696969]">
        Rather than attend business school in the Spring intake, most students
        defer to the Fall due to better job placements. But some schools, like
        Ivey Business School, only have a spring intake in March
      </p>
    </div>
  );
}

export default Intake