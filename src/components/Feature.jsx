import { useState } from "react"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Form from "./Form" 

import torusImage from "../assets/Floating Green Torus.png"
import featureImage from "../assets/bb.png"
import LiquidStakImg from "../assets/Liquid-stak.png"
import DEXImg from "../assets/DEX.png"
import L2Img from "../assets/L2-usage.png"
import RestakingImg from "../assets/Restaking.png"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const FeatureSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => {
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
  }

  const cards = [
    { imgSrc: LiquidStakImg },
    { imgSrc: DEXImg },
    { imgSrc: L2Img },
    { imgSrc: RestakingImg },
    { imgSrc: DEXImg },
    { imgSrc: LiquidStakImg },
  ]

  return (
    <>
      <section
        className="bg-[#0A2742] min-h-screen py-12 relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${torusImage})`,
          backgroundSize: "60rem auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between space-x-0 lg:space-x-16">
            <div className="bg-[#7FDCE2] shadow-lg rounded-[20px_20px_120px_0px] p-6 sm:p-8 md:p-10 w-full max-w-[520px] mb-6 lg:mb-0">
              <h2 className="text-3xl font-bold text-[#234256] mb-6 leading-tight text-center lg:text-left">
                SEAMLESSLY RE:ALLOCATE
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#292929] mb-8 leading-relaxed text-center lg:text-left">
                Your portfolio and Unlock exclusive Rewards for Optimizing Your Investment.
              </p>
              <button
                onClick={openForm}
                className="flex items-center justify-center font-semibold shadow-md bg-[#16345A] text-[#F5F5F5] rounded-full px-6 py-3 space-x-2 hover:bg-opacity-80 transition-colors duration-300 mx-auto lg:mx-0"
              >
                <span>Sign up for waitlists</span>
              </button>
            </div>

            <div className="w-full sm:w-[400px] lg:w-[424px] mx-auto mt-6 sm:mt-0">
              <div
                className="h-[300px] sm:h-[400px] lg:h-[512px] rounded-full bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage: `url(${featureImage})`,
                  backgroundSize: "cover",
                }}
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="relative mt-24">
            <div className="w-full h-2"></div>
            <div
              className="text-center mx-auto px-4 sm:px-6 lg:px-0 relative z-0 w-full h-[300px] lg:h-[400px]"
              style={{
                gap: "0px",
                borderRadius: "0px 0px 100px 100px",
                border: "2px solid #2ECEF2",
                background: "#0D0D0D",
              }}
            >
              <h3 className="my-6 text-center text-lg sm:text-2xl md:text-4xl font-bold text-[#F5F5F5] leading-[28.8px] sm:leading-[40px] md:leading-[48px] font-lato">
                The Ultimate Layer for Asset Re:allocation
              </h3>

              <p
                className=""
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#F5F5F5",
                }}
              >
                Uncover Your gateway to smarter, more rewarding asset reallocation.
              </p>
            </div>

            {/* Swiper Cards */}
            <div className="relative -mt-20 z-10">
              <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 35,
                  },
                }}
                className="mySwiper"
              >
                {cards.map((card, index) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                      <img
                        src={card.imgSrc || "/placeholder.svg"}
                        alt="image"
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      <Form isOpen={isFormOpen} onClose={closeForm} />
    </>
  )
}

export default FeatureSection

