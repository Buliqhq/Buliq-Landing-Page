import { useState } from "react"
import { Menu, X } from "lucide-react"


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
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
              className="flex items-center justify-center 
              font-semibold shadow-md bg-[#16345A] text-[#F5F5F5] 
              rounded-full px-6 py-3 space-x-2 hover:bg-opacity-80 transition-colors duration-300 mx-auto lg:mx-0"
              
            >
              <span>Join waitlists</span>
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
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="bg-[#D7EFF6] rounded-lg shadow-lg p-8 w-full max-w-5xl grid grid-cols-2 md:grid-cols-2 gap-10 md:gap-20">

            {/* Left Side - Logo & Illustration */}
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* Logo */}
              <img src="/logo.png" alt="Buliq Logo" className="h-16 w-auto" />

              {/* Illustration */}
              <img src="/public/Group.png" alt="Human Only Illustration" className="w-64 md:w-80 lg:w-96" />
            </div>

            {/* Right Side Form */}
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center md:text-left">Join the waitlist</h2>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Full name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name"
                  className="w-full bg-white text-gray-700 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ECEF2]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email"
                  className="w-full px-2 py-1 bg-white text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ECEF2]"
                />
              </div>

              {/* Button */}
              <button className="w-full bg-[#16345A] text-white font-semibold py-3 rounded-full mt-4 hover:bg-opacity-80 transition">
                Next
              </button>
            </div>

          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar