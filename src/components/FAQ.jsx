import React, { useState,useEffect } from "react";
import Button from "./Button";


const faqs = [
  {
    question:
      "What is Victoriam's mission in the AI industry?",
    answer:
      "Victoriam aims to leverage artificial intelligence to create impactful, industry-specific solutions, driving innovation and addressing unique challenges across various sectors.",
  },
  {
    question:
      "How does Victoriam approach innovation in AI technology?",
    answer:
      "Our approach combines deep industry insights with cutting-edge AI research, focusing on developing solutions that offer significant value and transformational impact.",
  },
  {
    question:
      "What makes Victoriam's approach to AI innovation unique?",
    answer:
      "Victoriam stands out in the AI landscape through its commitment to harnessing patent-pending technology. This allows for the development of solutions that provide unparalleled precision and customization across various industries, differentiating Victoriam from other market solutions by its ability to address specific challenges with innovative and tailored AI applications.",
  },
  {
    question: "How does Victoriam contribute to sustainability and ethical AI practices?",
    answer:
      "Victoriam is committed to sustainable development and ethical AI, ensuring our technologies are developed responsibly and contribute positively to society and the environment.",
  },
  {
    question:
      "How can businesses and individuals engage with Victoriam?",
    answer:
      "Interested parties can connect with us through our website, where we provide detailed information on collaboration opportunities, technology insights, and how our AI solutions can benefit various stakeholders.",
  },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <div className="border-2 border-[#212A31] dark:border-[#212A31] rounded-md" data-aos="fade-left">
      <button
        className="flex justify-between items-center w-full py-5 px-6 text-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#111920] dark:text-white text-[20px] md:text-[24px] font-medium">
          {faq.question}
        </span>
        <span>
          {isOpen ? (
            <svg
              width="16"
              height="2"
              viewBox="0 0 16 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0.80127L0 0.80127"
                stroke="url(#paint0_linear_100_7)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_100_7"
                  x1="0.369372"
                  y1="0.831098"
                  x2="0.493293"
                  y2="2.78581"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0CC8E8" />
                  <stop offset="1" stopColor="#2DEEAA" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              className="stroke-[#111920] dark:stroke-white"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.80127V16.8013"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M0 8.80127H16"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 px-6 text-[16px] text-[#111920] dark:text-white">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqComponent = () => {
  return (
    <div className="overflow-x-hidden" id="Faq">
      <div className=" p-0 md:p-0 sm:p-0 lg:p-6">
        <div className="mb-[32px] md:flex justify-between items-center ">
          <h2 className="text-[32px] md:text-[40px] leading-[40px] text-[#111920] dark:text-white font-semibold text-center md:text-start lg:text-start  ">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
