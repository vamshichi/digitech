import React from "react";
import Image from "next/image";

// Make sure the file name here matches the actual image name in your folder
import Iasa from "@/public/images/partners/IASA Logo White BG.jpg";

const associationPartners = [
  {
    name: "IASA – The Business Technology Architect Association",
    logo: Iasa,
    link: "https://iasaglobal.org/",
  },
];

const AssociationPartners = () => {
  return (
    <div className="py-10 text-black">
      <h2 className="text-3xl font-bold text-center mb-16">Our Association Partners</h2>
      <div className="grid grid-cols-1 place-items-center gap-6 max-w-4xl mx-auto">
        {associationPartners.map((partner) => (
          <a
            key={partner.name}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg bg-white hover:shadow-lg transition"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={400}    // Increased width
              height={400}   // Increased height
              className="object-contain"
            />
            {/* Uncomment if you want a caption:
            <p className="mt-2 font-semibold text-center">{partner.name}</p>
            */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AssociationPartners;
