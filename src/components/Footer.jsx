const Footer = () => {
  return (
    <footer className="relative w-full bg-[#1E1E1E]">
      <div className="max-w-[1440px] mx-auto">
        {/* Top content section */}
        <div className="flex flex-wrap items-center justify-between px-6 py-8 lg:px-12 lg:py-12">
          {/* Left content box */}
          <div className="bg-[#98E5E5] w-full lg:w-[671px] px-6 py-6 lg:px-8 lg:py-8 rounded-[20px_20px_120px_0] mb-8 lg:mb-0">
            <h2 className="text-[24px] lg:text-[28px] leading-[1.2] font-semibold mb-4 lg:mb-6">
              Track your portfolio and give exclusive rewards for smart re:allocation decisions at BULIQ.
            </h2>
            <p className="text-base lg:text-lg mb-4 lg:mb-6">Ready to claim your points?</p>
            <button className="flex items-center justify-center font-semibold shadow-md bg-[#16345A] text-[#F5F5F5] rounded-full px-6 py-3 space-x-2 hover:bg-opacity-80 transition-colors duration-300 mx-auto lg:mx-0">
              <span>Swipe to learn more</span>
            </button>
          </div>

          {/* Right image */}
          <div className="relative w-full lg:w-[423px] h-[250px] lg:h-[400px]">
            <img src="/Group 9.png" alt="Glowing cylinder" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Footer content with background */}
        <div className="relative h-[480px]">
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/Rectangle 13.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "1523px",
              height: "480px",
              left: "-40px",
            }}
          ></div>

          {/* Centered footer content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Navigation */}
            <nav className="flex justify-center gap-8 mb-8">
              <a href="#" className="text-gray-800 hover:text-[#3B82F6] transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-800 hover:text-[#3B82F6] transition-colors">
                About
              </a>
              <a href="#" className="text-gray-800 hover:text-[#3B82F6] transition-colors">
                Contact
              </a>
            </nav>

            {/* Social links */}
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-[#3B82F6] hover:opacity-80 transition-opacity" aria-label="Twitter">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="text-[#3B82F6] hover:opacity-80 transition-opacity" aria-label="Telegram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-center text-gray-800 text-sm">Copyright © 2025 @buliq.xyz. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

