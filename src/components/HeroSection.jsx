
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

        <div className="flex flex-col justify-center items-center gap-6">
          <div className="px-6 sm:px-8 md:px-10 py-6 sm:py-8 bg-[#7EDCE2] rounded-[20px] text-[24px] sm:text-xl md:text-2xl font-medium text-center">
            Your reward is eager to be claimed <br />
            Claim Now
          </div>

          <button
              className="flex items-center justify-center font-semibold shadow-md bg-[#16345A] text-[#F5F5F5] rounded-full px-6 py-3 space-x-2 hover:bg-opacity-80 transition-colors duration-300 mx-auto lg:mx-0"
            >
              <span>Sign up for waitlists</span>
              <svg
                xmlns="http://www.w3.org/2003/svg"
                viewBox="0 0 25 25"
                fill="none"
                className="w-6 h-6"
              >
                <path
                  d="M12.5 16.2698L16.5 12.2698M16.5 12.2698L12.5 8.26978M16.5 12.2698H8.5M22.5 12.2698C22.5 17.7926 18.0228 22.2698 12.5 22.2698C6.97715 22.2698 2.5 17.7926 2.5 12.2698C2.5 6.74693 6.97715 2.26978 12.5 2.26978C18.0228 2.26978 22.5 6.74693 22.5 12.2698Z"
                  stroke="#F5F5F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
        </div>
      </div>

      <div className="relative mt-[-218px] mb-[-48px] hidden sm:block">
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
