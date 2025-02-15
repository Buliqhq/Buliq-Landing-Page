import { X } from 'lucide-react'
import { useState } from "react"

function Form({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch('http://localhost:3000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSuccess(true)
      setTimeout(() => {
        onClose()
        setSuccess(false)
        setFormData({ name: "", email: "" })
      }, 2000)

    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-[#D7EFF6] rounded-lg shadow-lg w-full max-w-5xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2ECEF2] rounded-full p-1"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 p-8">
          {/* Left Side - Logo & Illustration */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <img src="/logo.png" alt="Buliq Logo" className="h-16 w-auto" />
            <img src="/Group.png" alt="Human Only Illustration" className="w-64 md:w-80 lg:w-96" />
          </div>

          {/* Right Side Form */}
          <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center md:text-left">
              Join the waitlist
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                Successfully joined the waitlist!
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Full name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ECEF2]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ECEF2]"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#16345A] text-white font-semibold py-3 rounded-full mt-4 hover:bg-opacity-80 transition disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Next"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form