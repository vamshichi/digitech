import Image from "next/image"
// import Link from "next/link"
import { CalendarDays, MapPin } from "lucide-react"
// import backgroundImage from "@/public/images/bg.jpg"
// import awardImage from "@/public/images/awards/trophy.png"

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 h-full container mx-auto px-6 md:px-12 lg:px-20 flex items-start pt-16">
        <div className="w-full flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left text-white space-y-6">
            <div className="py-8">
              <h1 className="whitespace-nowrap text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Future DigiTech Summit
              </h1>
              <div className="whitespace-nowrap text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-4 mb-4">
                &amp; Tech Visionary
              </div>
              <h1 className="whitespace-nowrap text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-0">
                Awards 2025
              </h1>
              <p className="whitespace-nowrap text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-full mt-4">
              Empowering Innovation &amp; Transforming the Digital Frontier.
            </p>
            </div>
            {/* Tagline moved upward with negative margin */}
            {/* <p className="whitespace-nowrap text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-full -mt-2">
              Empowering Innovation &amp; Transforming the Digital Frontier.
            </p> */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
                <CalendarDays className="text-white mr-3" />
                <span className="text-white font-medium">28–29 May 2025</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
                <MapPin className="text-white mr-3" />
                <span className="text-white font-medium">Malaysia</span>
              </div>
            </div>
          </div>

          {/* Optional Image/Content Section */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-4/5 max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-purple-600 opacity-30 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
