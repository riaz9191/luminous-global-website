"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Menu } from "lucide-react"
import { siteConfig } from "@/config/site"
import { useState } from "react"
import MobileNav from "../sections/mobile-nav"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <header className=" border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-[100]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{siteConfig.name}</h1>
                <p className="text-xs text-gray-500">{siteConfig.contact.address}</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/contact">
                <Button className="hidden md:block bg-blue-600 hover:bg-blue-700">
                  Get Quote
                </Button>
              </Link>
              
              {isMobile && (
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
