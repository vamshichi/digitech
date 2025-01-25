import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin } from "lucide-react"
import backgroundImage from "@/public/images/bg.jpg"

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt="Future DigiTech Summit Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-purple-800/80 to-indigo-900/80"></div>

      <div className="relative z-10 h-full container mx-auto px-6 md:px-12 lg:px-20 flex items-center">
        <div className="w-full flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left text-white space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Future DigiTech Summit 2025
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-lg mx-auto md:mx-0">
              Empowering Innovation & Transforming the Digital Frontier.
            </p>
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
            <Link
              href="/register"
              className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-lg font-semibold py-3 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Register Now
            </Link>
          </div>

          {/* Image Section */}
         {/* <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-4/5 max-w-lg">
              <Image
                src={backgroundImage || "/placeholder.svg"}
                alt="Future DigiTech Summit"
                width={800}
                height={600}
                 className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-purple-600 opacity-30 rounded-lg"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

