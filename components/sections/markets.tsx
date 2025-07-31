"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import MotionDiv from "@/components/ui/motion-div"

export default function Markets() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Global Markets</h2>
          <p className="text-xl text-blue-100">
            Serving customers across continents with reliable distribution networks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "North America", desc: "USA, Canada, Mexico" },
            { title: "Middle East", desc: "UAE, Saudi Arabia, Qatar" },
            { title: "Africa", desc: "Bulk & distributor sales" },
            { title: "Online Worldwide", desc: "Global ecommerce reach" },
          ].map((market, index) => (
            <MotionDiv key={index} delay={index * 0.2}>
              <Card
                className={`bg-white/10 border-white/20 text-white backdrop-blur-sm hover-lift h-full`}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl">{market.title}</CardTitle>
                  <CardDescription className="text-blue-100 text-base">{market.desc}</CardDescription>
                </CardHeader>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
