import Image from "next/image";

import volt from '@/public/images/partners/THE VOLT POST LOGO HIGH RES.jpg'
import cio from '@/public/images/partners/The CIO World.png'

const mediaPartners = [
  { name: "THE VOLT POST", logo: volt, link: "https://www.bbc.com" },
  { name: "The CIO World", logo: cio, link: "https://www.cnn.com" },
//   { name: "Forbes", logo: "/logos/forbes.png", link: "https://www.forbes.com" },
//   { name: "TechCrunch", logo: "/logos/techcrunch.png", link: "https://techcrunch.com" },
];

const OurMediaPartners = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Our Media Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {mediaPartners.map((partner) => (
          <a
            key={partner.name}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="object-contain"
            />
            <p className="mt-2 font-semibold">{partner.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurMediaPartners;
