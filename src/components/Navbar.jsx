import { useState } from "react"
import {  Menu, X } from "lucide-react"

 function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full border-b border-[#11323B] bg-[#EFF9FC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Buliq Logo" className="h-13 w-full" />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <span className="text-lg text-gray-800">Ready To Earn Points?</span>
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

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex flex-col items-center space-y-4">
            <span className="text-lg text-gray-800">Ready To Earn Points?</span>
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
      </div>
    </nav>
  )
}

export default Navbar