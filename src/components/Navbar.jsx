import { useState } from "react"
import { Menu, X } from "lucide-react"
import Form from "./Form"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openForm = () => {
    setIsFormOpen(true)
    setIsMenuOpen(false) // Close mobile menu when form opens
  }

  const closeForm = () => {
    setIsFormOpen(false)
  }

  return (
    <>
      <nav className="w-full border-b border-[#11323B] bg-[#EFF9FC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16"> {/* Reduced height */}
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="Buliq Logo" className="h-10 w-auto" /> {/* Reduced logo size */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-lg text-gray-800">Ready To Earn Points?</span>
              <button
                onClick={openForm}
                className="flex items-center justify-center 
                font-semibold shadow-md bg-[#16345A] text-[#F5F5F5] 
                rounded-full px-6 py-3 space-x-2 hover:bg-opacity-80 
                transition-colors duration-300 mx-auto lg:mx-0"
              >
                <span>Join waitlists</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-600 
                focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-[#16345A] rounded-md p-2"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#EFF9FC] rounded-lg shadow-lg">
              <div className="flex flex-col items-center space-y-4 p-4">
                <span className="text-lg text-gray-800 text-center">Ready To Earn Points?</span>
                <button
                  onClick={openForm}
                  className="w-full flex items-center justify-center 
                  font-semibold shadow-md bg-[#16345A] text-[#F5F5F5] 
                  rounded-full px-6 py-3 space-x-2 hover:bg-opacity-80 
                  transition-colors duration-300"
                >
                  <span>Join waitlists</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Form Modal */}
      <Form isOpen={isFormOpen} onClose={closeForm} />
    </>
  )
}

export default Navbar
