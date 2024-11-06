'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Recycle, Clock, Award, Leaf, TreePine, Sprout } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Make the LandingPage function the default export
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Recycle className="h-6 w-6 text-[#1B4D3E]" />
            <span className="text-xl font-bold text-[#1B4D3E]">MotionGround</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link className="text-[#1B4D3E] hover:text-[#2C7A62]" href="#how-it-works">
              How It Works
            </Link>
            <Link className="text-[#1B4D3E] hover:text-[#2C7A62]" href="#impact">
              Our Impact
            </Link>
            <Link className="text-[#1B4D3E] hover:text-[#2C7A62]" href="#about">
              About Us
            </Link>
            <Link className="text-[#1B4D3E] hover:text-[#2C7A62]" href="#contact">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-[#FF7F50] opacity-20" />
        <div className="absolute right-0 bottom-0 w-60 h-60 rounded-full bg-[#D8B4DC] opacity-20" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-[#1B4D3E]">
              Transforming Waste into Wealth, One Community at a Time
            </h1>
            <p className="text-[#1B4D3E]/80 text-lg mb-8">
              Join us on a journey toward a cleaner, greener Nigeria by recycling smarter, faster, and more efficiently.
            </p>
            <Button className="bg-[#1B4D3E] hover:bg-[#2C7A62] text-[#F5F5F0] px-8 py-6 text-lg rounded-full">
              Get Started Now
            </Button>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/recycleplant.jpg"
              alt="Recycling Community"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#1B4D3E]/5">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-[#F5F5F0] border-[#1B4D3E]/10">
            <CardContent className="p-6 text-center">
              <Recycle className="h-12 w-12 mx-auto mb-4 text-[#FF7F50]" />
              <h3 className="text-xl font-serif mb-2 text-[#1B4D3E]">Integrated Solutions</h3>
              <p className="text-[#1B4D3E]/70">
                Africa&apos;s First Fully Integrated Waste-to-Value Chain, making recycling accessible to all.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F5F0] border-[#1B4D3E]/10">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-[#D8B4DC]" />
              <h3 className="text-xl font-serif mb-2 text-[#1B4D3E]">Real-Time Tracking</h3>
              <p className="text-[#1B4D3E]/70">
                Monitor your environmental impact and recycling progress in real-time through our app.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F5F0] border-[#1B4D3E]/10">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-[#9DC209]" />
              <h3 className="text-xl font-serif mb-2 text-[#1B4D3E]">Earn Rewards</h3>
              <p className="text-[#1B4D3E]/70">
                Get incentivized for your recycling efforts while contributing to a cleaner environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16 text-[#1B4D3E]">This is how it works</h2>
          <div className="relative">
            <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-[#1B4D3E]/20" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center relative pt-4">
                <div className="bg-[#FF7F50] text-[#F5F5F0] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 font-bold text-2xl">
                  1
                </div>
                <h3 className="text-xl font-serif mb-2 text-[#1B4D3E]">Sign Up</h3>
                <p className="text-[#1B4D3E]/70">
                  Take a few minutes to register and set up your recycling preferences.
                </p>
              </div>
              <div className="text-center relative pt-4">
                <div className="bg-[#D8B4DC] text-[#F5F5F0] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 font-bold text-2xl">
                  2
                </div>
                <h3 className="text-xl font-serif mb-2 text-[#1B4D3E]">Schedule Pickup</h3>
                <p className="text-[#1B4D3E]/70">
                  Request a pickup through our app and we&apos;ll collect your recyclables.
                </p>
              </div>
              <div className="text-center relative pt-4">
                <div className="bg-[#9DC209] text-[#F5F5F0] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 font-bold text-2xl">
                  3
                </div>
                <h3 className="text-xl font-serif mb-2 text-[#1B4D3E]">Track Impact</h3>
                <p className="text-[#1B4D3E]/70">
                  Monitor your contribution and earn rewards for your recycling efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-[#1B4D3E]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16 text-[#1B4D3E]">Our Impact</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-[#F5F5F0] border-[#1B4D3E]/10">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 mx-auto mb-4 text-[#FF7F50]" />
                <h3 className="text-4xl font-bold text-[#1B4D3E] mb-2">5,000+</h3>
                <p className="text-[#1B4D3E]/70">Tons of waste collected</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F5F5F0] border-[#1B4D3E]/10">
              <CardContent className="p-6 text-center">
                <TreePine className="h-12 w-12 mx-auto mb-4 text-[#D8B4DC]" />
                <h3 className="text-4xl font-bold text-[#1B4D3E] mb-2">200+</h3>
                <p className="text-[#1B4D3E]/70">Local jobs created</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F5F5F0] border-[#1B4D3E]/10">
              <CardContent className="p-6 text-center">
                <Sprout className="h-12 w-12 mx-auto mb-4 text-[#9DC209]" />
                <h3 className="text-4xl font-bold text-[#1B4D3E] mb-2">50,000+</h3>
                <p className="text-[#1B4D3E]/70">Trees saved</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F5F5F0] border-[#1B4D3E]/10">
              <CardContent className="p-6 text-center">
                <Recycle className="h-12 w-12 mx-auto mb-4 text-[#FF7F50]" />
                <h3 className="text-4xl font-bold text-[#1B4D3E] mb-2">30%</h3>
                <p className="text-[#1B4D3E]/70">Reduction in landfill waste</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16 text-[#1B4D3E]">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#1B4D3E] font-serif">
                  How does MotionGround work?
                </AccordionTrigger>
                <AccordionContent className="text-[#1B4D3E]/70">
                  MotionGround is a mobile app that connects you with local recycling services. Simply download the app,
                  schedule a pickup, and our team will collect your recyclables while you earn rewards for your contribution.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#1B4D3E] font-serif">
                  What types of materials do you collect?
                </AccordionTrigger>
                <AccordionContent className="text-[#1B4D3E]/70">
                  We collect various materials including plastic, paper, glass, metal, and electronics. Our app provides
                  detailed guidelines on what can be recycled and how to prepare materials for collection.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#1B4D3E] font-serif">
                  How do I earn rewards?
                </AccordionTrigger>
                <AccordionContent className="text-[#1B4D3E]/70">
                  You earn points for every kilogram of recyclables collected. These points can be redeemed for cash,
                  vouchers, or used to support local environmental initiatives.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[#1B4D3E] font-serif">
                  Where do you operate?
                </AccordionTrigger>
                <AccordionContent className="text-[#1B4D3E]/70">
                  We currently operate in major cities across Nigeria, with plans to expand to more locations.
                  Check our app for service availability in your area.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1B4D3E]/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4 text-[#1B4D3E]">Ready to make a difference?</h2>
          <p className="text-[#1B4D3E]/80 mb-8 max-w-2xl mx-auto">
            Join communities and businesses across Nigeria who are making a difference through sustainable waste management.
          </p>
          <Button className="bg-[#1B4D3E] hover:bg-[#2C7A62] text-[#F5F5F0] px-8 py-6 text-lg rounded-full">
            {/* Replace with your App Store link or download button */}
            Download App Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B4D3E] text-[#F5F5F0]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif mb-4">About</h3>
              <div className="space-y-2">
                <Link className="block hover:text-[#9DC209]" href="#">
                  Our Story
                </Link>
                <Link className="block hover:text-[#9DC209]" href="#">
                  Impact
                </Link>
                <Link className="block hover:text-[#9DC209]" href="#">
                  Team
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-serif mb-4">Resources</h3>
              <div className="space-y-2">
                <Link className="block hover:text-[#9DC209]" href="#">
                  Blog
                </Link>
                <Link className="block hover:text-[#9DC209]" href="#">
                  Partners
                </Link>
                <Link className="block hover:text-[#9DC209]" href="#">
                  FAQ
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-serif mb-4">Legal</h3>
              <div className="space-y-2">
                <Link className="block hover:text-[#9DC209]" href="#">
                  Privacy
                </Link>
                <Link className="block hover:text-[#9DC209]" href="#">
                  Terms
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-serif mb-4">Contact</h3>
              <div className="space-y-2">
                <Link className="block hover:text-[#9DC209]" href="#">
                  Support
                </Link>
                <Link className="block hover:text-[#9DC209]" href="#">
                  Sales
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#F5F5F0]/20 text-center">
            <p>&copy; 2024 MotionGround. All rights reserved.</p>
            {/* Add social media links here */}
            <div className="flex justify-center mt-4">
              {/* Example: Facebook */}
              <a href="https://www.facebook.com/your-facebook-page" className="mr-4">
                <svg
                  className="h-6 w-6 text-[#F5F5F0]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  />
                </svg>
              </a>
              {/* Add other social media icons as needed */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}