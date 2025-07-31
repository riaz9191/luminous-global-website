"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useInView, useCounter, useTypewriter } from "@/hooks/use-hooks"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function Hero() {
  const [heroRef, heroInView] = useInView(0.1)
  const { count: countriesCount, setIsVisible: setCountriesVisible } = useCounter(50)
  const { count: productsCount, setIsVisible: setProductsVisible } = useCounter(1000)
  const { count: supportCount, setIsVisible: setSupportVisible } = useCounter(24)
  const { displayText: heroText, isComplete } = useTypewriter(
    "Global FMCG & Ecommerce Distribution Simplified",
    80,
  )

  useEffect(() => {
    if (heroInView) {
      setCountriesVisible(true)
      setProductsVisible(true)
      setSupportVisible(true)
    }
  }, [heroInView, setCountriesVisible, setProductsVisible, setSupportVisible])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32 z-"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge
                className={`bg-blue-100 text-blue-800 hover:bg-blue-100 ${
                  heroInView ? "opacity-100 animate-fadeUp" : "opacity-0"
                }`}
              >
                🌍 Global FMCG & Ecommerce Distribution
              </Badge>
              <h1
                className={`text-4xl lg:text-6xl font-bold text-gray-900 leading-tight ${
                  heroInView ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className={isComplete ? "" : "typewriter"}>{heroText}</span>
              </h1>
              <p
                className={`text-xl text-gray-600 leading-relaxed ${
                  heroInView ? "opacity-100 animate-fadeUp delay-300" : "opacity-0"
                }`}
              >
                At Luminous Global LLC, we connect quality, affordability, and efficiency — delivering everyday
                essentials and trending products across global markets.
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-4 ${
                heroInView ? "opacity-100 animate-fadeUp delay-400" : "opacity-0"
              }`}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover-lift group">
                Start Trading
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="hover-lift bg-transparent">
                View Products
              </Button>
            </div>
            <div
              className={`flex items-center space-x-8 pt-4 ${
                heroInView ? "opacity-100 animate-fadeUp delay-500" : "opacity-0"
              }`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{countriesCount}+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{productsCount}+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{supportCount}/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
          <div className={`relative ${heroInView ? "opacity-100 animate-float" : "opacity-0"}`}>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Global Distribution Network"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div
              className={`absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg ${
                heroInView ? "opacity-100 animate-fadeUp delay-600" : "opacity-0"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Trusted Partner</div>
                  <div className="text-sm text-gray-600">Florida-based U.S. Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
