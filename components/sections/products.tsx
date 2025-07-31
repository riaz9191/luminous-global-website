"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MotionDiv from "@/components/ui/motion-div"
import Image from "next/image"

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
          <p className="text-xl text-gray-600">Comprehensive range of FMCG and trending ecommerce products</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Grocery & Staples", image: "grocery items and food staples" },
            { name: "Snacks & Beverages", image: "snacks and beverages display" },
            { name: "Personal Care & Hygiene", image: "personal care and hygiene products" },
            { name: "Household & Cleaning", image: "household cleaning products" },
            { name: "Trending Amazon Products", image: "trending ecommerce products" },
            { name: "International Bestsellers", image: "international bestselling products" },
          ].map((category, index) => (
            <MotionDiv key={index} delay={index * 0.2}>
              <Card
                className={`border-0 shadow-lg hover-lift overflow-hidden h-full`}
              >
                <CardHeader className="p-0">
                  <div className="overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=300&query=${category.image}`}
                      alt={category.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-center text-lg">{category.name}</CardTitle>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
