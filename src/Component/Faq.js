import React, { useState } from "react";

const FAQItem = ({ question, answer, isActive, toggleFAQ }) => {
  return (
    <div
      className={`border rounded-md ${isActive ? "bg-white" : "bg-white"} p-4`}
    >
      <div
        className={`cursor-pointer  flex justify-between items-center ${
          isActive ? "font-semibold" : "font-normal"
        }`}
        onClick={toggleFAQ}
      >
        <span className="text-[#1a1757] font-bold text-lg">{question}</span>
        <span className="ml-2 text-[#5B5B5B] text-2xl">
          {isActive ? "⊖" : "⊕"}
        </span>
      </div>
      {isActive && (
        <div className="mt-2 text-lg text-[#5B5B5B] bg-white">{answer}</div>
      )}
    </div>
  );
};

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Can I still apply if I don’t meet the minimum requirements?",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "When is the best time to apply?",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Should I wait for the application deadline to apply?",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Am I guaranteed admission if I meet the minimum requirements?",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "When do I get notified about my application status?",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Does an internship count as work experience?",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isActive = !updatedFaqs[index].isActive;
    setFaqs(updatedFaqs);
  };

  return (
    <div className="container w-full lg:w-full sm:w-full p-6" name="Faq">
      <h1 className="text-[#1a1757] font-bold text-3xl mb-6 pl-4">FAQs</h1>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isActive={faq.isActive}
          toggleFAQ={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
