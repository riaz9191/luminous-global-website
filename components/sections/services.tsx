"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import MotionDiv from "@/components/ui/motion-div"
import { Globe, Package, ShoppingCart } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600">
            Comprehensive global distribution services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Package,
              title: "Wholesale & B2B Supply",
              description: "Packaged foods, beverages, personal care & household items for bulk buyers",
              color: "blue",
            },
            {
              icon: ShoppingCart,
              title: "Online Ecommerce Store",
              description: "Trending lifestyle and convenience products for individual consumers",
              color: "purple",
            },
            {
              icon: Globe,
              title: "International Sourcing",
              description: "Global sourcing and export for resellers (Amazon, Walmart, Noon, etc.)",
              color: "green",
            },
          ].map((service, index) => (
            <MotionDiv key={index} delay={index * 0.2}>
              <Card className={`border-0 shadow-lg hover-lift h-full`}>
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
