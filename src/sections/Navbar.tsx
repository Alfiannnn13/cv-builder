import Image from "next/image";
import logoImage from "@/assets/icon.png";
import Button from "@/components/Button";
import Link from "next/link";

const navLinks = [
  { label: "Beranda", href: "#" },
  { label: "Fitur", href: "#features" },
  { label: "FAQ", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4 lg:py-8">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center rounded-full border border-white/15 p-2 px-4 md:pr-2">
          <div>
            <Image
              src={logoImage}
              alt="logo"
              width={35}
              height={35}
              className="h-9 w-auto md:h-auto rounded-sm"
            />
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium ">
                {navLinks.map(link => (
                    <a href={link.href} key={link.label}>{link.label}</a>
                ))}
            </nav>
          </div>
          <div className="flex justify-end">
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
              className="feather feather-menu md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <Link href="/resumes">
              <Button variant="primary" className="hidden md:inline-flex items-center font-medium">Masuk</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
