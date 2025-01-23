const Footer = () => {
  return (
    <footer className="relative w-full bg-[#1E1E1E]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between px-16 py-20">
          <div className="bg-[#98E5E5] w-[671px] px-8 py-10 rounded-[20px_20px_120px_0]">
            <h2 className="text-[32px] leading-[1.2] font-semibold mb-10">
            Track your portfolio and give exclusive reward for smart re:allocation decision at BULIQ.
            </h2>
            <p className="text-xl mb-10">Ready to claim your points?</p>
            <button
              className="bg-[#1E293B] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#2d3748] transition-colors"
              aria-label="Swipe to learn more"
            >
              Swipe to learn more
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M9 6l6 6-6 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="relative w-[423px] h-[592px]">
            <img
              src="/Group 9.png"
              alt="Glowing cylinder"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute  top-[-250px]"
            style={{
              backgroundImage: `url('/Rectangle 13.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              width:"1523px",
              height: "680px",
              left:"-40px",
            }}
          ></div>

          <div className="relative pt-20 pb-12">
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center mb-16">
              <div>
                <svg
                  className="w-6 h-6 mx-auto mb-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                    strokeWidth="2"
                  />
                  <path d="M22 4l-10 8L2 4" strokeWidth="2" />
                </svg>
                <a
                  href="mailto:example@gmail.com"
                  className="text-[#3B82F6] hover:underline block mb-1"
                >
                  example@gmail.com
                </a>
                <span className="text-gray-800">Mail</span>
              </div>

              <div>
                <svg
                  className="w-6 h-6 mx-auto mb-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M2 12h20" strokeWidth="2" />
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-[#3B82F6] block mb-1">
                  Lorem ipsum dolor si amet
                </span>
                <span className="text-gray-800">Address</span>
              </div>

              <div>
                <svg
                  className="w-6 h-6 mx-auto mb-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-[#3B82F6] block mb-1">
                  +234 91 5766 8774
                </span>
                <span className="text-gray-800">Phone</span>
              </div>
            </div>

            <nav className="flex justify-center gap-12 mb-12">
              <a
                href="#"
                className="text-gray-800 hover:text-[#3B82F6] transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-[#3B82F6] transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-[#3B82F6] transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-[#3B82F6] transition-colors"
              >
                Work with us
              </a>
            </nav>

            <div className="flex justify-center gap-6 mb-8">
              <a
                href="#"
                className="text-[#3B82F6] hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#3B82F6] hover:opacity-80 transition-opacity"
                aria-label="Telegram"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>

            <p className="text-center text-gray-800">
              Copyright © 2025 Example. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
