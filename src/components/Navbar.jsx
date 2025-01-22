import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"

 function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Buliq Logo" className="h-13 w-full" />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <span className="text-lg text-gray-800">Ready To Earn Points?</span>
            <button className="flex items-center space-x-2 bg-[#1E2959] text-white px-6 py-2 rounded-full hover:bg-[#161d3e] transition-colors">
              <span>Claim Point</span>
              <ArrowRight className="h-5 w-5" />
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
            <button className="flex items-center space-x-2 bg-[#1E2959] text-white px-6 py-2 rounded-full hover:bg-[#161d3e] transition-colors">
              <span>Claim Point</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar