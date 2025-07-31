"use client"

import { useInView } from "@/hooks/use-hooks"
import { MapPin, Shield, Truck, Zap } from "lucide-react"

export default function WhyChooseUs() {
  const [whyRef, whyInView] = useInView(0.3)

  return (
    <section ref={whyRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${whyInView ? "opacity-100 animate-fadeUp" : "opacity-0"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">Your trusted partner for global FMCG and ecommerce distribution</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: MapPin,
              title: "Florida-based U.S. Company",
              desc: "Registered and operated from Florida, USA",
              color: "blue",
            },
            { icon: Shield, title: "Trusted Sourcing", desc: "From UAE, India, China & USA", color: "purple" },
            { icon: Truck, title: "Amazon-ready Logistics", desc: "& dropshipping solutions", color: "green" },
            { icon: Zap, title: "Fast Delivery", desc: "Across USA, Canada, UAE & more", color: "orange" },
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center space-y-4 ${
                whyInView ? `opacity-100 animate-fadeUp delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <div
                className={`w-20 h-20 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto`}
              >
                <item.icon className={`h-10 w-10 text-${item.color}-600`} />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
