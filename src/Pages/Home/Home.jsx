import { useContext, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import nextbtn from "../../assets/nextbtn.svg";
import prevbtn from "../../assets/prevbtn.svg";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Component } from "react";
import Slider from "react-slick";
const Home = () => {
  const { places } = useContext(AuthContext);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="relative">
      <div className="w-full absolute z-10">{/* <Navbar></Navbar> */}</div>
      {/* <>
        <Swiper
          cssMode={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {places?.map((place, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="h-screen bg-no-repeat bg-cover bg-bottom relative"
                style={{ backgroundImage: `url(${place?.image})` }}
              >
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.70)]">
                  <div className="flex flex-col h-screen pt-[236px] max-w-[1160px] mx-auto">
                    <h1 className="text-[97px] text-white">{place?.name}</h1>
                    <p className="text-white max-w-[455px] mt-2">
                      {place?.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      <div className="">
        <>
          <Swiper
            cssMode={true}
            slidesPerView={2}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <>Slide 1</>
            {places.map((place, idx) => (
              <SwiperSlide key={idx}>
                <img
                  className="w-[227px] h-[416px] rounded-[20px] object-fill"
                  src={place.image}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>

      <div className="absolute z-10 bottom-[100px] w-full flex justify-center gap-3">
        <button className="swiper-button-prev">
          <img src={prevbtn} alt="" />
        </button>
        <button className="swiper-button-next">
          <img src={nextbtn} alt="" />
        </button>
      </div> */}

      <div className="flex items-center justify-center h-full">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="bg-black">
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;

/*

*/
