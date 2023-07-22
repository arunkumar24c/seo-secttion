import React from 'react'

const TrpSection = () => {
  return (
    <div className="mt-8 mb-8" name="TrpSection">
      <h1 className="flex justify-center text-[#1a1757] text-2xl font-bold pb-4 ">
        TRP Testimonials
      </h1>
      <p className="flex justify-center text-[#1a1757] text-lg font-normal pb-6">
        Here’s what our applicants have to say
      </p>
      <div className="flex justify-center gap-5">
        {/* 1st */}
        <div className="bg-[#f1f3f3] w-[400px] h-[319px]">
          <div className="p-6">
            <h2 className="text-[#1a1757] font-bold">Sandeep Kalsi</h2>
            <p className="text-[#404040] font-normal pb-2">Year of 97</p>
            <p className="text-[#404040] font-normal pb-2">
              “Thank you very much, Red Pen team - Prabhnoor, Trina, and Mehnaz.
              Your guidance was instrumental in getting her early admit offer in
              'Computer Science' at UofT St George campus.The topping on the
              cake was an exceptional scholarship award. I strongly recommend
              'Red Pen team' to guide teenagers for college admissions at
              Canada.”
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="bg-[#f1f3f3] w-[400px] h-[319px] hidden xl:block ">
          <div className="p-6">
            <h2 className="text-[#1a1757] font-bold">Sreeja Iyer</h2>
            <p className="text-[#404040] font-normal pb-2">Year of 97</p>
            <p className="text-[#404040] font-normal pb-2">
              Namita and Sheetal joined us at Sparkling Mindz Global School for
              a fruitful face-to-face session on motivation and finding the best
              path for each child. Their passion and commitment were evident,
              providing valuable clarity to parents and students. We gained
              insights into subject selections and the importance of higher
              education. Excited for future interactions!
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="bg-[#f1f3f3] w-[400px] h-[319px] sm:hidden">
          <div className="p-6">
            <h2 className="text-[#1a1757] font-bold">Ayanna Lobo</h2>
            <p className="text-[#404040] font-normal pb-2">Year of 97</p>
            <p className="text-[#404040] font-normal pb-2">
              The Red Pen surpassed my expectations. Dhishana provided
              invaluable assistance in improving my college essays, while
              Prishma guided me throughout the entire process of college
              selection, essay editing, interview preparation, and CV building.
              They are knowledgeable and excellent counselors. Thank you,
              Prishma, Dhishana, and the Red Pen team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrpSection