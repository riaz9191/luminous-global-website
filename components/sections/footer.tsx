"use client"

import { useInView } from "@/hooks/use-hooks"
import { Globe } from "lucide-react"

export default function Footer() {
  const [ref, isInView] = useInView()

  return (
    <footer
      ref={ref}
      className={`fade-in-section ${isInView ? "is-visible" : ""} bg-gray-900 text-white py-12`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold">Luminous Global LLC</span>
            </div>
            <p className="text-gray-400 text-sm">Global FMCG & Ecommerce Distribution Simplified</p>
          </div>

          {[
            {
              title: "Services",
              items: ["Wholesale & B2B Supply", "Ecommerce Distribution", "International Sourcing", "Private Label"],
            },
            { title: "Markets", items: ["North America", "Middle East", "Africa", "Global Online"] },
            { title: "Contact", items: ["info@luminousgloballlc.com", "Florida, USA", "Founded 2025"] },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="hover:text-white transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Luminous Global LLC. All rights reserved. | Florida, USA</p>
        </div>
      </div>
    </footer>
  )
}
