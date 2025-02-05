import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

interface pageProps {
    searchParams: Promise<{resumeId?:string}>
}

export const metadata: Metadata = {
title: "Buat CV Anda"
}

export default async function Page({searchParams}:pageProps) {
    const {resumeId} = await searchParams

    const {userId} = await auth();

    if(!userId) {
        return null;
    }

    const resumeToEdit = resumeId
    ? await prisma.resume.findUnique({
        where:{id: resumeId, userId},
    })
    :null;

    return <ResumeEditor/>
}