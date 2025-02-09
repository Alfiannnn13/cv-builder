import Tag from "@/components/tag";

const text = ` Banyak layanan pembuatan CV berbayar di luar sana, tapi di sini kamu bisa membuat CV ATS-friendly secara gratis. Cepat, mudah, dan langsung siap digunakan untuk melamar kerja.`;

export default function Introduction() {
  return (
    <section className="py-28">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing CvExpress</Tag>
        </div>
        <div className="text-4xl md:text-6xl text-center font-medium mt-10">
          <span>Buat CV profesional tanpa ribet dan tanpa biaya!</span>
          <span className="text-white/15">{text}</span>
          <span className="text-lime-500 block">Itulah sebabnya kami menghadirkan CVExpress.</span>
        </div>
      </div>
    </section>
  );
}
