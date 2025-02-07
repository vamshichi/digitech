import Image from "next/image";

import volt from '@/public/images/partners/WhatsApp Image 2025-02-07 at 1.29.17 PM (2).jpeg'
import cio from '@/public/images/partners/WhatsApp Image 2025-02-07 at 1.29.17 PM (3).jpeg'
import Zex from '@/public/images/partners/WhatsApp Image 2025-02-07 at 1.29.17 PM.jpeg'
import Digital from '@/public/images/partners/WhatsApp Image 2025-02-07 at 1.29.17 PM (1).jpeg'

const mediaPartners = [
  { name: "THE VOLT POST", logo: volt, link: "https://thevoltpost.com/" },
  { name: "The CIO World", logo: cio, link: "https://thecioworldmedia.com/" },
  { name: "Zex PR Wire", logo: Zex, link: "https://zexprwire.com/" },
  { name: "Digital Now Asia", logo: Digital, link: "https://digitalnow.asia/" },
];

const OurMediaPartners = () => {
  return (
    <div className="py-10 text-black ">
      <h2 className="text-3xl font-bold mb-16">Our Media Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {mediaPartners.map((partner) => (
          <a
            key={partner.name}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg  hover:shadow-lg transition"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={100}
              className="object-contain"
            />
            {/* <p className="mt-2 font-semibold">{partner.name}</p> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurMediaPartners;
