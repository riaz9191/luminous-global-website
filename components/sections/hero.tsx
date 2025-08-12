// src/components/Hero.tsx

"use client";

import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCounter, useTypewriter, useInView } from "@/hooks/use-hooks"; // Assuming these are your custom hooks
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// --- Swiper Imports ---
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Import fade effect styles
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

// --- Image Data for the Slider ---
const heroImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    alt: "Global logistics and shipping containers",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=2072&auto=format&fit=crop",
    alt: "Busy warehouse with shelves of products",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop",
    alt: "E-commerce transaction on a digital tablet",
  },
];

export default function Hero() {
  const [ref, isInView] = useInView();
  const countriesRef = useCounter(50, 2000, 0, isInView);
  const productsRef = useCounter(1000, 2000, 0, isInView);
  const supportRef = useCounter(24, 2000, 0, isInView);
  const [typewriterRefRaw, displayText] = useTypewriter(
    "Global FMCG & Ecommerce Distribution Simplified",
    50,
    isInView,
  );
  const typewriterRef = typewriterRefRaw as React.RefObject<HTMLHeadingElement>;

  return (
    <section
      id='home'
      ref={ref}
      className='relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden' // Added overflow-hidden
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* --- Left Column: Text Content --- */}
          <div className='space-y-8'>
            <div className='space-y-6'>
              <Badge className='bg-blue-100 text-blue-800 hover:bg-blue-100'>
                🌍 Global FMCG & Ecommerce Distribution
              </Badge>
              <h1
                ref={typewriterRef}
                className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight h-36 lg:h-48'
              >
                {displayText}
              </h1>
              <p className='text-xl text-gray-600 leading-relaxed'>
                At Luminous Global LLC, we connect quality, affordability, and
                efficiency — delivering everyday essentials and trending
                products across global markets.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Link href='/contact'>
                <Button
                  size='lg'
                  className='bg-blue-600 hover:bg-blue-700 hover-lift group'
                >
                  Start Trading
                  <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                </Button>
              </Link>
              <Link href='/products'>
                <Button
                  size='lg'
                  variant='outline'
                  className='hover-lift bg-transparent'
                >
                  View Products
                </Button>
              </Link>
            </div>

            <div className='flex items-center space-x-8 pt-4'>
              {/* ... your counter divs ... */}
              <div className='text-center'>
                <div
                  ref={countriesRef}
                  className='text-3xl font-bold text-gray-900'
                >
                  50+
                </div>
                <div className='text-sm text-gray-600'>Countries Served</div>
              </div>
              <div className='text-center'>
                <div
                  ref={productsRef}
                  className='text-3xl font-bold text-gray-900'
                >
                  1000+
                </div>
                <div className='text-sm text-gray-600'>Products</div>
              </div>
              <div className='text-center'>
                <div
                  ref={supportRef}
                  className='text-3xl font-bold text-gray-900'
                >
                  24/7
                </div>
                <div className='text-sm text-gray-600'>Support</div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Swiper Image Slider with Navigation --- */}
          <div className='relative w-full h-[450px] lg:h-[550px] group'>
            {" "}
            {/* Added group for button visibility */}
            <Swiper
              modules={[Autoplay, Navigation, EffectFade]} // Add Navigation module
              loop={true}
              effect={"fade"}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // Configure custom navigation buttons
              navigation={{
                nextEl: "#hero-swiper-next",
                prevEl: "#hero-swiper-prev",
              }}
              className='w-full h-full rounded-2xl shadow-2xl'
            >
              {heroImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className='object-cover'
                    sizes='(max-width: 1024px) 100vw, 50vw'
                    priority
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* --- Custom Navigation Buttons --- */}
            <button
              id='hero-swiper-prev'
              aria-label='Previous slide'
              className='absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 cursor-pointer hover:bg-white/80 transition-all z-10 opacity-0 group-hover:opacity-100'
            >
              <ChevronLeft className='w-6 h-6' />
            </button>
            <button
              id='hero-swiper-next'
              aria-label='Next slide'
              className='absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 cursor-pointer hover:bg-white/80 transition-all z-10 opacity-0 group-hover:opacity-100'
            >
              <ChevronRight className='w-6 h-6' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
