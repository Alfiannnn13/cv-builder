"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function deleteResume(id: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User Not Auth");
  }

  const resume = await prisma.resume.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!resume) {
    throw new Error("CV Tidak ditemukan");
  }

  // Hapus foto jika ada
  if (resume.photoUrl) {
    await del(resume.photoUrl);
  }

  // Hapus semua pengalaman kerja yang terkait
  await prisma.workExperience.deleteMany({
    where: { resumeId: id },
  });

  // Hapus semua pendidikan yang terkait (jika ada)
  await prisma.education.deleteMany({
    where: { resumeId: id },
  });

  // Terakhir, hapus resume
  await prisma.resume.delete({
    where: { id },
  });

  // Refresh halaman
  revalidatePath("/resumes");
}
