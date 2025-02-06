"use client"

import ResumePreview from "@/components/ResumePreview";
import { ResumeServerData } from "@/lib/types"
import { mapToResumeValues } from "@/lib/utils";
import { formatDate } from "date-fns";
import Link from "next/link";

interface ResumeItemProps {
    resume: ResumeServerData
}

export default function ResumeItem({resume}: ResumeItemProps) {
    const wasUpdated = resume.updateAt !== resume.createdAt;

    return <div className="group border rounded-lg border-transparent hover:border-border transition-colors bg-secondary">
        <div className="space-y-3">
            <Link 
            href={`/editor?resumeId=${resume.id}`}
            className="inline-block w-full text-center">
                <p className="font-semibold line-clamp-1">
                    {resume.title || "No Title"}
                </p>
                {resume.description && (
                    <p className="line-clamp-2 text-sm">{resume.description}</p>
                )}
                <p className="text-xs text-muted-foreground">
                    {wasUpdated ? "diperbarui" : "dibuat"} tanggal {" "}
                    {formatDate(resume.updateAt, "MMM d yyyy h:mm a")}
                </p>
            </Link>
            <Link
            href={`/editor?resumeId=${resume.id}`}
            className="inline-block w-full"
            >
                <ResumePreview
                resumeData={mapToResumeValues(resume)}
                className="shadow-md group-hover:shadow-lg transition-shadow"/>
            </Link>
        </div>
    </div>
}