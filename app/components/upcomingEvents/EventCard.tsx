"use client";

import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import { Users } from "lucide-react";

export interface Event {
  id: string;
  name: string;
  location: string;
  date: string;
  eventDate: Date;
  image: string | StaticImageData;
  link: string;
  logo: string;
  floorPlanUrl?: string;
  brochureUrl?: string;
  description?: string;
  attendees: string; // e.g., "500+"
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const CountdownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => (
    <div className="flex justify-between text-center mb-6">
      <div className="bg-blue-100 rounded p-2 md:p-3">
        <div className="text-2xl md:text-3xl font-bold text-blue-600">{days}</div>
        <div className="text-sm md:text-base text-blue-600">Days</div>
      </div>
      <div className="bg-blue-100 rounded p-2 md:p-3">
        <div className="text-2xl md:text-3xl font-bold text-blue-600">{hours}</div>
        <div className="text-sm md:text-base text-blue-600">Hours</div>
      </div>
      <div className="bg-blue-100 rounded p-2 md:p-3">
        <div className="text-2xl md:text-3xl font-bold text-blue-600">{minutes}</div>
        <div className="text-sm md:text-base text-blue-600">Minutes</div>
      </div>
      <div className="bg-blue-100 rounded p-2 md:p-3">
        <div className="text-2xl md:text-3xl font-bold text-blue-600">{seconds}</div>
        <div className="text-sm md:text-base text-blue-600">Seconds</div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-64 w-full mb-4 sm:mb-6 md:mb-8">
        <Link href={event.link}>
          <Image
            src={event.image}
            alt={event.name}
            layout="fill"
            objectFit="cover"
          />
        </Link>
      </div>
      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-3">
          {event.name}
        </h3>
        {event.description && (
          <p className="text-gray-600 mb-4">{event.description}</p>
        )}
        <p className="text-sm md:text-lg text-gray-600 mb-2 md:mb-2 flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          {event.location}
        </p>
        <p className="text-sm md:text-lg text-gray-600 mb-2 md:mb-2 flex items-center">
          <FaCalendarAlt className="mr-2" />
          {event.date}
        </p>
        {/* Expected Attendees with icon */}
        <p className="text-sm md:text-lg text-gray-600 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2" />
          {event.attendees} expected attendees
        </p>
        {isClient ? (
          <Countdown date={event.eventDate} renderer={CountdownRenderer} />
        ) : (
          <CountdownRenderer days={0} hours={0} minutes={0} seconds={0} />
        )}
        <div className="flex justify-between items-center mt-4">
          <Link
            href="/contact"
            className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
          >
            Register Now
          </Link>
          <div className="space-x-4 text-sm md:text-lg">
            {event.floorPlanUrl && (
              <a
                href={event.floorPlanUrl}
                className="text-blue-600 hover:underline"
              >
                Floor Plan
              </a>
            )}
            {event.floorPlanUrl && event.brochureUrl && (
              <span className="text-gray-400">||</span>
            )}
            {event.brochureUrl && (
              <a
                href={event.brochureUrl}
                className="text-blue-600 hover:underline"
              >
                Brochure
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
