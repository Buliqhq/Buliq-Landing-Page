import React from "react";

const Card = ({ title, content, isList = false }) => {
  return (
    <div className="relative bg-[#16345A] text-white w-[557px] h-[290px] p-[40px_20px_0px_20px] gap-5 rounded-[30px_0px_30px_0px] border-t-4 border-transparent font-lato text-base font-medium leading-[48px] text-left">
      <div
        className="absolute inset-0 rounded-[30px_0px_30px_0px] border-4 border-transparent"
        style={{
          background:
            "linear-gradient(252.12deg, #374957 14.52%, #00CE9E 61.07%, #00CE9E 107.62%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      ></div>
      <h3 className="text-2xl font-medium leading-[48px]">{title}</h3>
      {isList ? (
        <ul className="text-sm space-y-2">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm">{content}</p>
      )}
    </div>
  );
};

const ValueSection = () => {
  return (
    <section className="relative py-16 px-6 lg:px-20 bg-[#D7EFF6] bg-[url('/Floating Green Torus.png')] bg-contain bg-no-repeat bg-top-right">
      <div className="max-w-[1340px] mx-auto grid gap-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/water valut.png"
              alt="Water Vault"
              className="w-[700px] h-[700px] object-contain"
            />
          </div>
          {/* Text Card */}
          <Card
            title="Uncover Your Re-allocation True Value"
            content="Discover how re-allocations of assets, liquidity, and activities can transform your portfolio into a reward-generating machine."
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Text Card */}
          <Card
            title="Receive Exclusive Rewards For Smart Allocation Decision"
            content={[
              "Every move counts: Reveal the hidden opportunities in your asset relocation, and boost your wallet.",
              "Perform other activities and monetize through points and rewards.",
            ]}
            isList
          />
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/prysim.png"
              alt="Prism"
              className="w-[700px] h-[700px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
