import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-customLightBlue py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-customDarkGray mb-4 font-lato leading-10">
            Need To Contact Us?
          </h2>
          <p className="mb-6 text-base md:text-lg lg:text-xl leading-6 text-customDarkGray">
            Kindly fill out the form, we will <br /> get back to you immediately.
          </p>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12h2a2 2 0 012 2v6H4v-6a2 2 0 012-2h2m4 0v-4a4 4 0 018 0v4m-4-4v4"
              />
            </svg>
            <span className="text-customDarkGray text-sm md:text-lg leading-6">
            buliq@gmail.com
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-customBlue text-white rounded-[10px] p-6 md:p-8 lg:p-[50px] shadow-lg w-full max-w-[550px] mx-auto md:mx-0">
          <h3 className="text-2xl md:text-2xl font-semibold font-lato mb-6 md:mb-8 leading-8 md:leading-10">
            Are you a protocol interested in Buliq.com? <br />
            <span className="font-light">Let's get in touch.</span>
          </h3>
          <form className="space-y-4 md:space-y-6 lg:space-y-[54px]">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm md:text-base leading-5 font-medium text-gray-300 mb-2 md:mb-3"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 md:py-3 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base leading-5 font-medium text-gray-300 mb-2 md:mb-3"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 md:py-3 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm md:text-base leading-5 font-medium text-gray-300 mb-2 md:mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 md:py-3 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full max-w-[325px] h-[50px] sm:h-[60px] mt-[20px] sm:mt-[30px] px-0 py-[10px] text-[#16345A] text-base sm:text-lg bg-[#83DDE3] rounded-full border border-[#EFF9FC] hover:opacity-90 transition-opacity duration-300"
              >
                Enter
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
