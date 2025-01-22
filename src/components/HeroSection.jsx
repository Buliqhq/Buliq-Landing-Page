import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative border-b border-[#11323B] bg-[#EFF9FC] py-12 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
          FROM RE-ALLOCATION TO ANTIQUITY
        </h1>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8">
          Re-allocate today, rediscover the treasures of tomorrow
        </p>

        <div className="flex flex-col justify-center items-center gap-6" >
          <div className="px-6 sm:px-8 md:px-10 py-6 sm:py-8 bg-[#7EDCE2] rounded-[20px]  text-[24px] sm:text-xl md:text-2xl font-medium text-center">
            Your reward is eager to be claimed <br />
            Claim Now
          </div>

          <button className="flex items-center space-x-2 bg-[#1E2959] text-white px-6 py-2 rounded-full hover:bg-[#161d3e] transition-colors">
            <span>Claim Point</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative mt-[-218px] mb-[-48px]">
        <img
          src="/BULIQ blue 1.png"
          alt="BULIQ Blue Logo"
          className="w-full object-cover h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
