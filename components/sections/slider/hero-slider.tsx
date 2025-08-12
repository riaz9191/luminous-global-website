"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";
const slideImages = [
  {
    id: 1,
    src: "https://dimg04.tripcdn.com/images/0a10u12000msoqe7n0896.png",
    alt: "A family enjoying a vacation",
  },
  {
    id: 2,
    src: "https://dimg04.tripcdn.com/images/0a10y12000me91szrC35A.png",
    alt: "An illustration for a referral program",
  },
  {
    id: 3,
    src: "https://dimg04.tripcdn.com/images/0a13i12000mktltzr71CB.png",
    alt: "An airplane in the sky",
  },
  {
    id: 4,
    src: "https://dimg04.tripcdn.com/images/0a14412000mrm02nn677B.png ",
    alt: "Another beautiful travel destination",
  },
];
export default function HeroSlider() {
  return (
    <section className='relative w-full max-w-7xl mx-auto py-8 px-6'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        navigation={{
          nextEl: "#swiper-button-next-multi",
          prevEl: "#swiper-button-prev-multi",
        }}
        pagination={{
          el: "#hero-slider-pagination",
          clickable: true,
        }}
        className='!pb-12'
      >
        {slideImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className='relative w-full h-[200px] rounded-xl overflow-hidden shadow-lg'>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='rounded-xl object-cover'
                sizes='(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        id='swiper-button-prev-multi'
        aria-label='Previous slide'
        className='absolute top-1/2 ml-3 -mt-5 -translate-y-1/2 -left-4 w-12 h-12 bg-primary  rounded-full flex items-center justify-center  cursor-pointer hover:bg-orange-400 z-10 border-4 border-white'
      >
        <ChevronLeft className='w-6 h-6 text-white' />
      </button>
      <button
        id='swiper-button-next-multi'
        aria-label='Next slide'
        className='absolute top-1/2 mr-3 -mt-5 -translate-y-1/2 -right-4 w-12 h-12 bg-primary  rounded-full flex items-center justify-center  cursor-pointer hover:bg-orange-400 z-10 border-4 border-white'
      >
        <ChevronRight className='w-6 h-6 text-white' />
      </button>
      <div
        id='hero-slider-pagination'
        className='flex justify-center items-center space-x-2'
      ></div>
    </section>
  );
}
