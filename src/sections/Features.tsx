import FeaturedCard from "@/components/FeaturedCard";
import Tag from "@/components/tag";
import avatar1 from "@/assets/images/avatar1.png";
import screening from "@/assets/images/screening.png";
import Image from "next/image";

const features = [
  "Pembuatan Instan",
  "Format ATS-Friendly",
  "Pratinjau Langsung",
  "Ekspor PDF",
  "Riwayat Revisi",
  "Pengisian Otomatis",
  "Keamanan Data",
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="mt-6 text-center text-6xl font-medium max-w-2xl mx-auto">
          Buat CV ATS lebih mudah dengan{" "}
          <span className="text-lime-400">CVExpress</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
          <FeaturedCard
            title="Buat CV ATS-Friendly dengan hitungan menit"
            description="Tidak perlu berjam-jam menyusun CV! Gunakan CVExpress untuk membuat CV profesional dengan cepat, mudah, dan tanpa hambatan."
            className="md:col-span-2  lg:col-span-1"
          >
            <div className="flex w-full items-center justify-center">
              <div className="w-full max-w-lg">
                <Image
                  src={avatar1}
                  alt="1"
                  className="h-auto w-full max-w-full"
                />
              </div>
            </div>
          </FeaturedCard>

          <FeaturedCard
            title="Di CVExpress, semua fitur
                bisa kamu gunakan gratis selamanya."
            description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur ea suscipit animi"
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="flex aspect-video items-center justify-center">
              <p className="text-center text-4xl font-extrabold text-white/20">
                Lupakan penyedia pembuatan CV{" "}
                <span className="text-lime-400">berbayar</span>{" "}
              </p>
            </div>
          </FeaturedCard>
          <FeaturedCard
            title="CV Teruji ATS, Kesempatan Karier Lebih Luas"
            description="CVExpress memastikan CV-mu terstruktur sesuai standar, lebih mudah terbaca oleh rekruter, dan meningkatkan peluang diterima kerja."
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
          >
            <div className="flex w-full items-center justify-center">
              <div className="w-full max-w-lg">
                <Image
                  src={screening}
                  alt="screening"
                  className="h-auto w-full max-w-full"
                />
              </div>
            </div>
          </FeaturedCard>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="inline-flex items-center gap-3 rounded-2xl border-white/10 bg-neutral-900 px-3 md:px-5 md:py-2 py-1.5"
            >
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-lime-400 text-xl text-neutral-950">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
