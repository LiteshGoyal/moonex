import React, { useState, useEffect } from "react";
import WebFont from 'webfontloader';

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      question: "How do I get a Referral Code?",
      answer: "",
      open: false,
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
      open: false,
    },
    {
      question: "How do I get a Referral Code?",
      answer: "",
      open: false,
    },
  ]);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Raleway', 'sans-serif', 'Fira Code'],
      },
    });
  }, []);
  const toggleFaq = (index) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      })
    );
  };

  return (
    <section style={{ fontFamily: 'Raleway' }} className="py-10 sm:py-16 lg:py-24 relative" id="faq">
      <div className="mx-auto max-w-7xl rounded-xl bg-[#F7F9FF05] max-w-5xl py-12">
        <div
          className="absolute top-60 left-20 transform -translate-x-1/2 w-96 h-96 rounded-full z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(224, 180, 23, 0.1) 0%, rgba(224, 180, 23, 0.01) 70%, transparent 100%)",
          }}
        ></div>

        <div
          className="absolute top-1/2 right-0 transform translate-x-[10%] translate-y-[-50%]  hidden lg:block w-80 h-80 rounded-full z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(224, 180, 23, 0.1) 0%, rgba(224, 180, 23, 0.01) 70%, transparent 100%)",
              
          }}
        ></div>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#e0b417] sm:text-4xl lg:text-5xl">
            FAQs
          </h2>
        </div>

        <div className="w-full mt-8 md:mt-16">
          {faq.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-300 w-3xl px-12 border-t border-b border-[#1C2333]`}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-6 py-5"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-white">
                  {item.question}
                </span>

                <svg
                  className={`w-6 h-6 text-gray-400 transform ${
                    item.open ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`${
                  item.open ? "block" : "hidden"
                } px-6 pb-5 text-gray-400`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
