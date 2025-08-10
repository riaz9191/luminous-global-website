"use client"

import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const navItems = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About", href: "/about", icon: "🏢" },
    { name: "Services", href: "/services", icon: "⚙️" },
    { name: "Products", href: "/products", icon: "📦" },
    { name: "Contact", href: "/contact", icon: "📞" },
  ]

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-300 ease-in-out ${
        isOpen ? "bg-black/60 backdrop-blur-sm" : "bg-transparent pointer-events-none"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="font-bold text-gray-900">Luminous Global</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <nav className="p-6">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                  <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium">
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}
