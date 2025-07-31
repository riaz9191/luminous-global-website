"use client"

import { useInView } from "@/hooks/use-hooks"
import { MapPin, Package, Star } from "lucide-react"
import Image from "next/image"

export default function About() {
  const [aboutRef, aboutInView] = useInView(0.3)

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${aboutInView ? "opacity-100 animate-fadeUp" : "opacity-0"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Luminous Global LLC is a U.S.-registered company based in Florida, focused on the import, export, and
            distribution of fast-moving consumer goods (FMCG) and trending ecommerce products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${aboutInView ? "opacity-100 animate-fadeUp delay-100" : "opacity-0"}`}>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Luminous Global LLC Office"
              width={500}
              height={400}
              className="rounded-xl shadow-lg hover-lift"
            />
          </div>
          <div className="space-y-6">
            {[
              { icon: MapPin, text: "Founded: 2025 | HQ: Florida, USA", color: "blue" },
              { icon: Package, text: "Focus: FMCG, Ecommerce, Private Label", color: "purple" },
              { icon: Star, text: "Values: Integrity, Speed, Quality, Global Reach", color: "green" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 ${
                  aboutInView ? `opacity-100 animate-fadeUp delay-${(index + 2) * 100}` : "opacity-0"
                }`}
              >
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center`}>
                  <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                </div>
                <span className="font-semibold text-gray-900 text-lg">{item.text}</span>
              </div>
            ))}
            <p
              className={`text-gray-600 leading-relaxed text-lg ${
                aboutInView ? "opacity-100 animate-fadeUp delay-500" : "opacity-0"
              }`}
            >
              We serve both bulk buyers and individual consumers through strategic online channels, bridging
              continents, cultures, and customers with our comprehensive global commerce solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
