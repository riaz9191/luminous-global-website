"use client"

import { useInView } from "@/hooks/use-hooks"
import { Globe, ShoppingCart, Zap } from "lucide-react"
import Image from "next/image"

export default function WhoWeAre() {
  const [ref, isInView] = useInView()

  return (
    <section
      ref={ref}
      className={`fade-in-section ${isInView ? "is-visible" : ""} py-20 bg-white`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Luminous Global LLC is a U.S.-registered company based in Florida,
              focused on the import, export, and distribution of fast-moving
              consumer goods (FMCG) and trending ecommerce products.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Import & Export</h4>
                  <p className="text-gray-600">Sourcing and supplying goods across international borders.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">FMCG Distribution</h4>
                  <p className="text-gray-600">Efficiently delivering everyday essentials to global markets.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Ecommerce Trends</h4>
                  <p className="text-gray-600">Specializing in high-demand, trending online products.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Who We Are - Luminous Global"
              width={500}
              height={500}
              className="rounded-xl shadow-lg hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  )
}