"use client";

import Image from "next/image";
import Link from "next/link";
import icon from "@/assets/icon.png";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/ThemeToggle";
import {dark} from "@clerk/themes"
import { useTheme } from "next-themes";

export default function Navbar() {
  const {theme} = useTheme();
  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <Link href="/resumes" className="flex items-center gap-2">
          <Image
            src={icon}
            alt="logo"
            width={35}
            height={35}
            className="rounded-sm"
          />
          <span className="text-xl font-bold tracking-tight">My Resume</span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          ></UserButton>
        </div>
      </div>
    </header>
  );
}
