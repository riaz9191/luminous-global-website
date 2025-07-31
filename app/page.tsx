"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Truck,
  ShoppingCart,
  Package,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Instagram,
  Facebook,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

// Smooth Counter Hook
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  return { count, setIsVisible }
}

// Fixed Intersection Observer Hook - No Glitch
function useInView(threshold = 0.3) {
  const [isInView, setIsInView] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger once when entering view
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px", // Trigger earlier
      },
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold, isInView])

  return [setRef, isInView] as const
}

// Typewriter Effect Hook
function useTypewriter(text: string, speed = 100) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return { displayText, isComplete }
}

export default function LuminousGlobalWebsite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [heroRef, heroInView] = useInView(0.1)
  const [aboutRef, aboutInView] = useInView(0.3)
  const [servicesRef, servicesInView] = useInView(0.3)
  const [whyRef, whyInView] = useInView(0.3)
  const [marketsRef, marketsInView] = useInView(0.3)
  const [productsRef, productsInView] = useInView(0.3)
  const [contactRef, contactInView] = useInView(0.3)

  const { count: countriesCount, setIsVisible: setCountriesVisible } = useCounter(50)
  const { count: productsCount, setIsVisible: setProductsVisible } = useCounter(1000)
  const { count: supportCount, setIsVisible: setSupportVisible } = useCounter(24)

  const { displayText: heroText, isComplete } = useTypewriter("Global FMCG & Ecommerce Distribution Simplified", 80)

  useEffect(() => {
    if (heroInView) {
      setCountriesVisible(true)
      setProductsVisible(true)
      setSupportVisible(true)
    }
  }, [heroInView, setCountriesVisible, setProductsVisible, setSupportVisible])

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        html {
          scroll-behavior: smooth;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .typewriter::after {
          content: '|';
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Prevent body scroll when mobile menu is open */
        body.menu-open {
          overflow: hidden;
        }
      `}</style>

      {/* Header - Fixed Z-Index */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-[100]">
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
                className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group z-[110]"
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
                  className={`text-gray-700 hover:text-blue-600 transition-all duration-300 opacity-0 animate-fadeUp delay-${(index + 1) * 100}`}
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
            className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-[105] ${
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
            <nav className="p-6">
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
                className={`mt-8 pt-6 border-t ${isMobileMenuOpen ? "opacity-100 animate-fadeUp delay-300" : "opacity-0"}`}
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
                className={`mt-8 pt-6 border-t ${isMobileMenuOpen ? "opacity-100 animate-fadeUp delay-400" : "opacity-0"}`}
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

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  className={`bg-blue-100 text-blue-800 hover:bg-blue-100 ${heroInView ? "opacity-100 animate-fadeUp" : "opacity-0"}`}
                >
                  🌍 Global FMCG & Ecommerce Distribution
                </Badge>
                <h1
                  className={`text-4xl lg:text-6xl font-bold text-gray-900 leading-tight ${heroInView ? "opacity-100" : "opacity-0"}`}
                >
                  <span className={isComplete ? "" : "typewriter"}>{heroText}</span>
                </h1>
                <p
                  className={`text-xl text-gray-600 leading-relaxed ${heroInView ? "opacity-100 animate-fadeUp delay-300" : "opacity-0"}`}
                >
                  At Luminous Global LLC, we connect quality, affordability, and efficiency — delivering everyday
                  essentials and trending products across global markets.
                </p>
              </div>
              <div
                className={`flex flex-col sm:flex-row gap-4 ${heroInView ? "opacity-100 animate-fadeUp delay-400" : "opacity-0"}`}
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
                className={`flex items-center space-x-8 pt-4 ${heroInView ? "opacity-100 animate-fadeUp delay-500" : "opacity-0"}`}
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
                className={`absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg ${heroInView ? "opacity-100 animate-fadeUp delay-600" : "opacity-0"}`}
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

      {/* Who We Are Section */}
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
                  className={`flex items-center space-x-4 ${aboutInView ? `opacity-100 animate-fadeUp delay-${(index + 2) * 100}` : "opacity-0"}`}
                >
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center`}>
                    <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                  </div>
                  <span className="font-semibold text-gray-900 text-lg">{item.text}</span>
                </div>
              ))}
              <p
                className={`text-gray-600 leading-relaxed text-lg ${aboutInView ? "opacity-100 animate-fadeUp delay-500" : "opacity-0"}`}
              >
                We serve both bulk buyers and individual consumers through strategic online channels, bridging
                continents, cultures, and customers with our comprehensive global commerce solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" ref={servicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${servicesInView ? "opacity-100 animate-fadeUp" : "opacity-0"}`}>
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
              <Card
                key={index}
                className={`border-0 shadow-lg hover-lift ${servicesInView ? `opacity-100 animate-fadeUp delay-${(index + 1) * 100}` : "opacity-0"}`}
              >
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
            ))}
          </div>
        </div>
      </section>

     
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4 opacity-0 animate-fadeUp">
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
              <div key={index} className={`opacity-0 animate-fadeUp delay-${(index + 1) * 100}`}>
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

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400 opacity-0 animate-fadeUp delay-500">
            <p>&copy; 2025 Luminous Global LLC. All rights reserved. | Florida, USA</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
