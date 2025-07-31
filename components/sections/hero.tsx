"use client"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCounter, useTypewriter, useInView } from "@/hooks/use-hooks"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [ref, isInView] = useInView();
  const countriesRef = useCounter(50, 2000, 0, isInView)
  const productsRef = useCounter(1000, 2000, 0, isInView)
  const supportRef = useCounter(24, 2000, 0, isInView)
  const [typewriterRefRaw, displayText] = useTypewriter(
    "Global FMCG & Ecommerce Distribution Simplified", 50, isInView
  )
  const typewriterRef = typewriterRefRaw as React.RefObject<HTMLHeadingElement>

  return (
    <section
      id='home'
      ref={ref}
      className={`relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32`}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='space-y-6'>
              <Badge className={`bg-blue-100 text-blue-800 hover:bg-blue-100`}>
                🌍 Global FMCG & Ecommerce Distribution
              </Badge>
              <h1
                ref={typewriterRef}
                className={`text-4xl lg:text-6xl font-bold text-gray-900 leading-tight`}
              >
                {displayText}
              </h1>
              <p className={`text-xl text-gray-600 leading-relaxed`}>
                At Luminous Global LLC, we connect quality, affordability, and
                efficiency — delivering everyday essentials and trending
                products across global markets.
              </p>
            </div>
           
            <div className={`flex flex-col sm:flex-row gap-4`}>
              <Link href="#contact">
                <Button
                  size='lg'
                  className='bg-blue-600 hover:bg-blue-700 hover-lift group'
                >
                  Start Trading
                  <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                </Button>
              </Link>
              <Link href="#products">
                <Button
                  size='lg'
                  variant='outline'
                  className='hover-lift bg-transparent'
                >
                  View Products
                </Button>
              </Link>
            </div>
            <div className={`flex items-center space-x-8 pt-4`}>
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
          <div className={`relative animate-float`}>
            <Image
              /**
               * Placeholder image for the Hero section.
               * This image visually represents the global distribution network or the company's reach.
               * It's a temporary asset and should be replaced with a relevant, high-quality image.
               */
              src={siteConfig.images.hero}
              alt='Global Distribution Network'
              width={600}
              height={600}
              className='rounded-2xl shadow-2xl'
            />
            <div
              className={`absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg`}
            >
              <div className='flex items-center space-x-3'>
                <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                  <CheckCircle className='h-6 w-6 text-green-600' />
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>
                    Trusted Partner
                  </div>
                  <div className='text-sm text-gray-600'>
                    Florida-based U.S. Company
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
