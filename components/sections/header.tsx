"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, ArrowRight } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

  return (
    <header className="border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Mobile Menu Button & Logo */}
          <div className="flex items-center space-x-3">
            {/* Animated Hamburger Menu - Mobile Only */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
                document.body.classList.toggle("menu-open", !isMobileMenuOpen)
              }}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group z-50"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-2 opacity-0 animate-fadeUp">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Luminous Global LLC</h1>
                <p className="text-xs text-gray-500">Florida, USA</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Products", "Contact"].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-gray-700 hover:text-blue-600 transition-all duration-300 opacity-0 animate-fadeUp delay-${
                  (index + 1) * 100
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 hover-lift opacity-0 animate-fadeUp delay-600">
            Get Quote
          </Button>

          {/* Mobile CTA Button */}
          <Button className="md:hidden bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2">Quote</Button>
        </div>

        {/* Mobile Menu Overlay - Higher Z-Index */}
        <div
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-50 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => {
            setIsMobileMenuOpen(false)
            document.body.classList.remove("menu-open")
          }}
        ></div>

        {/* Mobile Menu Slide Panel - Highest Z-Index */}
        <div
          className={`md:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[110] ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="h-4 w-4 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900">Luminous Global</h2>
                <p className="text-xs text-gray-500">Florida, USA</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                document.body.classList.remove("menu-open")
              }}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Navigation */}
          <nav className="p-6 bg-white  ">
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#home", icon: "🏠" },
                { name: "About", href: "#about", icon: "🏢" },
                { name: "Services", href: "#services", icon: "⚙️" },
                { name: "Products", href: "#products", icon: "📦" },
                { name: "Contact", href: "#contact", icon: "📞" },
              ].map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      document.body.classList.remove("menu-open")
                    }}
                    className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group ${
                      isMobileMenuOpen ? `opacity-100 animate-fadeUp delay-${index * 50}` : "opacity-0"
                    }`}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                    <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu CTA */}
            <div
              className={`mt-8 pt-6 border-t ${
                isMobileMenuOpen ? "opacity-100 animate-fadeUp delay-300" : "opacity-0"
              }`}
            >
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  document.body.classList.remove("menu-open")
                }}
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Footer */}
            <div
              className={`mt-8 pt-6 border-t ${
                isMobileMenuOpen ? "opacity-100 animate-fadeUp delay-400" : "opacity-0"
              }`}
            >
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">📧 info@luminousgloballlc.com</p>
                <p className="text-sm text-gray-600">📍 Florida, USA</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 font-bold text-sm">IG</span>
                  </button>
                  <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 font-bold text-sm">FB</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}