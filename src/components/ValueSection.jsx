const Card = ({ title, content, isList = false }) => {
    return (
      <div className="relative bg-[#16345A] text-white w-full max-w-lg p-5 sm:p-10 gap-5 rounded-[30px_0px_30px_0px] border-t-4 border-transparent font-lato text-base font-medium leading-6 sm:leading-7 text-left">
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
        <h3 className="text-lg sm:text-xl font-medium leading-7 sm:leading-8 mb-4">
          {title}
        </h3>
        {isList ? (
          <ul className="text-sm sm:text-base space-y-2">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm sm:text-base">{content}</p>
        )}
      </div>
    );
  };
  
  const ValueSection = () => {
    return (
      <section className="relative py-8 sm:py-16 px-4 sm:px-6 lg:px-20 bg-[#D7EFF6] bg-[url('/Floating Green Torus.png')] bg-contain bg-no-repeat bg-top-right">
        <div className="max-w-[1340px] mx-auto grid gap-8 sm:gap-12">
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-6 sm:gap-10">
            <div className="flex justify-center w-full lg:w-1/2">
              <img
                src="/water valut.png"
                alt="Water Vault"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
              />
            </div>
            <Card
              title="Uncover Your Re-allocation True Value"
              content="Discover how re-allocations of assets, liquidity, and activities can transform your portfolio into a reward-generating machine."
            />
          </div>
  
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-6 sm:gap-10">
            <Card
              title="Receive Exclusive Rewards For Smart Allocation Decision"
              content={[
                "Every move counts: Reveal the hidden opportunities in your asset relocation, and boost your wallet.",
                "Perform other activities and monetize through points and rewards.",
              ]}
              isList
            />
            <div className="flex justify-center w-full lg:w-1/2">
              <img
                src="/prysim.png"
                alt="Prism"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ValueSection;
  