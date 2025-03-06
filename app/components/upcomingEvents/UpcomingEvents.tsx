"use client";

import React from "react";
import { motion } from "framer-motion";
import EventCard, { Event } from "./EventCard";

// Import images from your public folder
import img2 from "@/public/images/upcomingEvents/digitech 2.jpg";
import img1 from "@/public/images/upcomingEvents/Artboard 2.jpg";
import img3 from "@/public/images/upcomingEvents/Future DigiTech Summit & Tech Visionary Awards 2025.jpg";

const upcomingEvents: Event[] = [
  {
    id: "1",
    name: "Future DigiTech Summit & Tech Visionary Awards 2025",
    date: "May 28-29, 2025",
    location: "Pullman, KL, Malaysia",
    description:
      "Explore the latest in digital transformation, AI, and emerging technologies.",
    eventDate: new Date("2025-05-28T00:00:00"),
    image: img1,
    link: "https://www.futuredigitechsummit.com/",
    logo: "/placeholder.svg?height=100&width=200",
    attendees: "500+",
  },
  {
    id: "2",
    name: "Future DigiTech Summit & Tech Visionary Awards 2025",
    date: "October 2025",
    location: "Singapore",
    description:
      "Transforming businesses through innovative technologies and digital strategies.",
    eventDate: new Date("2025-10-01T00:00:00"),
    image: img2,
    link: "https://www.futuredigitechsummit.com/",
    logo: "/placeholder.svg?height=100&width=200",
    attendees: "500+",
  },
  {
    id: "3",
    name: "Future DigiTech Summit & Tech Visionary Awards 2025",
    date: "November 2025",
    location: "Turkey",
    description:
      "Showcasing digital innovation and recognizing tech visionaries across industries.",
    eventDate: new Date("2025-11-01T00:00:00"),
    image: img3,
    link: "https://www.futuredigitechsummit.com/",
    logo: "/placeholder.svg?height=100&width=200",
    attendees: "500+",
  },
];

export default function UpcomingEvents() {
  // Filter events to only include those with the specific name ......
  const filteredEvents = upcomingEvents.filter(
    (event) =>
      event.name === "Future DigiTech Summit & Tech Visionary Awards 2025"
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-5xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upcoming Events
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No events found.</p>
        )}
      </div>
    </div>
  );
}
