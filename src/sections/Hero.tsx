import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";

import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-x-clip py-24">
      <div className="container relative">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={designExample1Image} alt="1" />
        </div>
        <div className="absolute -right-64 top-16 hidden lg:block">
          <Image src={designExample2Image} alt="2" />
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
            <Pointer name="Data Diri" />
        </div>
        <div className="absolute right-10 -top-4 hidden lg:block">
            <Pointer name="Pengalaman" color="red" />
        </div>
        <h1 className="mt-6 text-center text-6xl font-medium md:text-7xl lg:text-8xl">
          Buat <span className="text-lime-400">CV ATS-Friendly</span> dalam
          Hitungan Menit
        </h1>
        <p className="mt-8 text-center text-xl text-white/50 mx-auto">
          Buat CV ATS-Friendly dalam hitungan menit. Tanpa perlu ribet dengan
          desain atau membayar jasa pembuatan CV! Cukup isi informasi, dan CV
          profesionalmu siap digunakan. Lebih cepat, lebih praktis.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/resumes">
            <Button variant="primary" className="font-medium">
              Coba Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
