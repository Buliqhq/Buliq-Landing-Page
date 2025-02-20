"use client"

import { X } from "lucide-react"
import { useState } from "react"

// Use the correct API URL based on the environment
const API_URL = import.meta.env.DEV
  ? "http://localhost:3001/api" // Match your Vercel dev server port
  : "https://buliq.vercel.app/api"

function Form({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      console.log("Submitting form data:", formData)
      const response = await fetch(`${API_URL}/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const responseText = await response.text()
      console.log("Raw response:", responseText)

      let data
      try {
        data = JSON.parse(responseText)
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError)
        throw new Error(`Server error: ${responseText || "Please try again later"}`)
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.")
      }

      setSuccess(true)
      setTimeout(() => {
        onClose()
        setSuccess(false)
        setFormData({ name: "", email: "" })
      }, 2000)
    } catch (err) {
      console.error("Submission error:", err)
      setError(
        err.message.includes("Failed to fetch")
          ? "Unable to connect to the server. Please check your internet connection."
          : err.message || "Unable to join waitlist at this time. Please try again later.",
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-[#D7EFF6] rounded-lg shadow-lg w-full max-w-5xl my-4 md:my-8">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 md:right-4 md:top-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2ECEF2] rounded-full p-1"
        >
          <X className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 p-6 md:p-8">
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
            <img src="/logo.png" alt="Buliq Logo" className="h-12 md:h-16 w-auto" />
            <img src="/Group.png" alt="Human Only Illustration" className="w-52 sm:w-64 md:w-80 lg:w-96" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6 text-center md:text-left">
              Join the waitlist
            </h2>

            {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}

            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                Successfully joined the waitlist!
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Full name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full bg-white text-gray-700 px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ECEF2] text-sm md:text-base"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-white text-gray-700 px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ECEF2] text-sm md:text-base"
                required
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#16345A] text-white font-semibold py-2.5 md:py-3 rounded-full mt-4 hover:bg-opacity-80 transition disabled:opacity-50 text-sm md:text-base"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form

