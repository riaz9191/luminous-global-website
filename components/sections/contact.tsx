"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useInView } from "@/hooks/use-hooks"
import { Facebook, Instagram, Mail, MapPin, Phone, Loader2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function Contact() {
  const [ref, isInView] = useInView()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast.error("Failed to send message.")
      }
    } catch (error) {
      toast.error("An error occurred.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`fade-in-section ${isInView ? "is-visible" : ""} py-20 bg-white`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Let's Do Business!</h2>
          <p className="text-xl text-gray-600">
            If you are a supplier, wholesaler, or buyer — reach out to us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "info@luminousgloballlc.com" },
                  { icon: Phone, text: "Phone/WhatsApp: Available on request" },
                  { icon: MapPin, text: "Florida, USA" },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4`}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <contact.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-base lg:text-lg break-words">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cool Follow Us Section with Color Icons */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-6 text-lg">Follow Us</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <Instagram className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">@luminousglobal</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <Facebook className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">luminousgloballlc</span>
                </a>
              </div>
            </div>
          </div>

          {/* Fixed Contact Form for Mobile */}
          <div className="w-full">
            <Card
              className={`border-0 shadow-lg hover-lift w-full`}
            >
              <CardHeader>
                <CardTitle className="text-xl">Contact Form</CardTitle>
                <CardDescription className="text-base">
                  Send us a message and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="h-12 w-full"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="h-12 w-full"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="tsx space-y-2">
                    <Label htmlFor="message" className="text-base">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business needs..."
                      rows={4}
                      className="w-full resize-none"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 hover-lift h-12 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
