"use client";

import Tag from "@/components/tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Apa perbedaan antara CV dan resume?",
    answer:
      "CV (Curriculum Vitae) adalah dokumen yang lebih komprehensif, berisi riwayat akademik, pengalaman profesional, keterampilan, serta pencapaian secara mendetail. Sementara itu, resume lebih ringkas dan menyoroti pengalaman kerja serta keterampilan yang relevan dengan posisi yang dilamar.",
  },
  {
    question: "Apa yang dimaksud dengan CV ATS-friendly?",
    answer:
      "CV ATS-friendly adalah CV yang disusun menggunakan format yang dapat dipindai dengan baik oleh Applicant Tracking System (ATS), yaitu sistem yang digunakan perusahaan untuk menyaring kandidat secara otomatis. CV ini menghindari elemen desain kompleks, menggunakan struktur yang jelas, serta menyertakan kata kunci yang relevan dengan posisi yang dilamar.",
  },
  {
    question: "Apa perbedaan antara CV ATS dan CV kreatif?",
    answer:
      "CV ATS dirancang agar dapat dibaca dengan optimal oleh sistem ATS, menggunakan format sederhana dengan fokus pada teks. Sementara itu, CV kreatif mengutamakan estetika dengan penggunaan elemen visual seperti warna, ikon, atau tata letak yang lebih dinamis. Meskipun CV kreatif dapat menarik perhatian rekruter, namun kurang cocok untuk sistem ATS.",
  },
  {
    question: "Bagaimana cara memastikan CV saya dapat lolos seleksi ATS?",
    answer:
      "Untuk meningkatkan peluang lolos seleksi ATS, pastikan CV Anda menggunakan format yang sederhana, hindari penggunaan tabel atau elemen grafis berlebihan, serta optimalkan dengan kata kunci yang sesuai dengan deskripsi pekerjaan yang dilamar.",
  },
  {
    question:
      "Haruskah saya membuat CV berbeda untuk setiap lamaran pekerjaan?",
    answer:
      "Sebaiknya, ya. Menyesuaikan CV dengan posisi yang dilamar dapat meningkatkan peluang Anda untuk diterima. Anda tidak perlu membuat CV yang sepenuhnya baru setiap kali melamar, tetapi pastikan untuk menyesuaikan bagian keterampilan, pengalaman, dan ringkasan profil agar lebih relevan dengan deskripsi pekerjaan yang dituju.",
  },
];

export default function Faqs() {
  const [selectedIndex, setselectedIndex] = useState(0);

  return (
    <section id="faqs" className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="mx-auto mt-6 max-w-xl text-center text-6xl font-medium">
          Punya pertanyaan? kami punya{" "}
          <span className="text-lime-400">jawabannya</span>
        </h2>
        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-6"
            >
              <div
                className="flex items-center justify-between"
                onClick={() => setselectedIndex(faqIndex)}
              >
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus flex-shrink-0 text-lime-400 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45",
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height:0,
                      marginTop:0,
                    }}
                    animate={{
                      height:'auto',
                      marginTop:24,
                    }}
                    exit={{
                      height:0,
                      marginTop:0,
                    }}
                    className={twMerge("mt-6 overflow-hidden")}
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
