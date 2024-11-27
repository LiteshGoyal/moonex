import React from "react";
const features = [
  {
    icon: "/Dollar.svg",
    header: "Cheapest TXs",
    feature:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
  {
    icon: "/Shield_check.svg",
    header: "CerTIK",
    feature:
      "We are Audited by Certik. CertiK is the leading security-focused ranking platform to ",
  },
  {
    icon: "/Phone_Off.svg",
    header: "No Contract Sells",
    feature: "No contract sells to fund the marketing wallets",
  },
  {
    icon: "/Options_3.svg",
    header: "CrossDex Support",
    feature:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
];
const Features = () => {
  return (
    <section className="bg-transparent py-10 px-6 text-white" id="features">
      <h2 className="text-center text-3xl font-bold">Our <span className="text-[#e0b417]"> Features</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:space-x-12 lg:mx-20">
        {features.map((feature, index) => (
          <div key={index} className="mt-6">
            <div className="bg-gray-600 bg-opacity-10 border border-gray-800 p-6 rounded-lg min-h-80 ">
              <img src={feature.icon} className="rounded-full p-4 bg-gray-700 mb-8" alt="" />
              <h3 className="text-lg font-semibold mb-4">{feature.header}1</h3>
              <p className="mt-2 text-[#B6B6B6]">{feature.feature}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
