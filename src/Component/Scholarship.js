import React from 'react'

const Scholarship = () => {
  return (
    <div className="mt-5">
      <h1 className="text-[#1a1757] font-bold text-2xl ">
        Scholarships for a Canadian MBA for Indian students
      </h1>
      <p className="text-[#696969] font-normal mt-4 mb-5">
        Aiming to attract talented candidates, universities in Canada offer
        scholarships to study in Canada for those with unique profiles. Here are
        some scholarships that apply to Indian students:
      </p>
      {/* table */}
      <div className="flex justify-center p-4">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="text-[#ffffff] bg-[#0ea2aa] p-3">Song</th>
              <th className="text-[#ffffff] bg-[#0ea2aa] p-3">Artist</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-[#1a1757] font-bold bg-[#f0f0f0] p-3">
                Forté Fellowship Awards | Multiple universities
              </td>
              <td className="text-[#696969] p-2">
                Merit-based scholarship for women who exhibit exemplary
                <br />
                leadership, represent diverse backgrounds, and demonstrate a
                <br />
                commitment to advancing women in business.
                <br /> Value: CAD 10,000 to CAD 40,000
              </td>
            </tr>
            {/* 2nd */}
            <tr>
              <td className="text-[#1a1757] font-bold bg-[#f0f0f0] p-3">
                Entrance Awards | The Rotman School of <br />
                Management, University of Toronto
              </td>
              <td className="text-[#696969] p-2">
                Merit-based scholarship.
                <br /> Value: CAD 10,000 to CAD 90,000
              </td>
            </tr>
            {/* 3
             */}
            <tr>
              <td className="text-[#1a1757] font-bold bg-[#f0f0f0] p-3">
                30% Club Full-Time MBA Scholarship | The
                <br /> Rotman School of Management,
                <br /> University of Toronto
              </td>
              <td className="text-[#696969] p-2">
                Merit-based scholarship for women with substantial academic or
                <br />
                professional achievements.
                <br /> Value: Half tuition
              </td>
            </tr>
            {/* 4 */}
            <tr>
              <td className="text-[#1a1757] font-bold bg-[#f0f0f0] p-3">
                Diversity & Inclusion Award | The Rotman <br /> School of
                Management, University of Toronto
              </td>
              <td className="text-[#696969] p-2">
                Merit-based scholarship for underrepresented communities
                <br /> (Black, indigenous, and women).
                <br /> Value: CAD 10,0000
              </td>
            </tr>
            {/* 5 */}
            <tr>
              <td className="text-[#1a1757] font-bold bg-[#f0f0f0] p-3">
                Joseph L. Rotman Scholarship | The Rotman <br />
                School of Management, University of Toronto
              </td>
              <td className="text-[#696969] p-2">
                Merit-based scholarship.
                <br /> Value: Full tuition
              </td>
            </tr>
            {/* 6 */}
            <tr>
              <td className="text-[#1a1757] font-bold bg-[#f0f0f0] p-3">
                Forté Fellowship Awards | Multiple universities
              </td>
              <td className="text-[#696969] p-2">
                Merit-based scholarship for those who have demonstrated<br/>
                leadership skills. Preference is given to students with<br/> interest
                in entrepreneurship.<br/> Value: CAD 10,000
              </td>
            </tr>
            {/* 7 */}
            <tr>
              <td className="text-[#1a1757] font-bold bg-[#f0f0f0] p-3">
                Forté Fellowship Awards | Multiple universities
              </td>
              <td className="text-[#696969] p-2">
                Merit-based scholarship for women who exhibit exemplary
                <br />
                leadership, represent diverse backgrounds, and demonstrate a
                <br />
                commitment to advancing women in business.
                <br /> Value: CAD 10,000 to CAD 40,000
              </td>
            </tr>
            {/* 8 */}
            <tr>
              <td className="text-[#1a1757] font-bold bg-[#f0f0f0] p-3">
                Forté Fellowship Awards | Multiple universities
              </td>
              <td className="text-[#696969] p-2">
                Merit-based scholarship for women who exhibit exemplary
                <br />
                leadership, represent diverse backgrounds, and demonstrate a
                <br />
                commitment to advancing women in business.
                <br /> Value: CAD 10,000 to CAD 40,000
              </td>
            </tr>
            {/* 9 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Scholarship