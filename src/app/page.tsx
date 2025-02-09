import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white scroll scroll-smooth">
        <Navbar />
        <Hero />
        <Introduction />
        <Features/>
        <Faqs/>
        <CallToAction/>
        <Footer/>
      </div>
    </>
  );
}
