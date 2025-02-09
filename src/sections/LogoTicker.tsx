"use client"
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section className="overflow-x-clip py-24">
      <div className="container">
        <h3 className="text-center text-xl text-white">
          Already choosen by these market leaders
        </h3>
        <div className="flex mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,balck_10%,transparent)]">
          <motion.div
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity
          }}
           className="flex flex-none gap-24 pr-24">
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <Image src={logo.image} key={logo.name} alt={logo.name} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
