import React from "react";
import torusImage from "../assets/Floating Green Torus.png";
import featureImage from "../assets/bb.png";

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import LiquidStakImg from "../assets/Liquid-stak.png";
import DEXImg from "../assets/DEX.png";
import L2Img from "../assets/L2-usage.png";
import RestakingImg from "../assets/Restaking.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeatureSection = () => {
  const cards = [
    { imgSrc: LiquidStakImg },
    { imgSrc: DEXImg },
    { imgSrc: L2Img },
    { imgSrc: RestakingImg },
    { imgSrc: DEXImg },
    { imgSrc: LiquidStakImg },
  ];

  return (
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
              Your portfolio and Unlock exclusive Rewards for Optimizing Your
              Investment.
            </p>
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

          <div className="w-full max-w-[424px]">
            <div
              className="sm:h-[400px] lg:h-[512px] rounded-full bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: `url(${featureImage})`,
              }}
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="relative mt-24">
        <div className="w-full h-2 mb-12"></div> 
          <div
            className="text-center mx-auto px-4 sm:px-6 lg:px-0 relative z-0"
            style={{
              width: "90%",
              maxWidth: "1200px",
              height: "442px",
              gap: "0px",
              borderRadius: "0px 0px 100px 100px",
              border: "2px solid #2ECEF2",
              background: "#0D0D0D",
            }}
          >
            <h3
              className="my-10"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "35px",
                fontWeight: "500",
                lineHeight: "48px",
                color: "#F5F5F5",
              }}
            >
              The Ultimate Layer for Asset Re:allocation
            </h3>

            <p
              className="mb-12"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "center",
                color: "#F5F5F5",
              }}
            >
              Uncover Your gateway to smarter, more rewarding asset
              reallocation.
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
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div
                    className=" rounded-3xl"

                  >
                    <img
                      src={card.imgSrc}
                      alt="image"
                      className="w-full h-auto object-cover"

                    />
                  </div>

                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
