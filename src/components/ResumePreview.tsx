// import useDimensions from "@/hooks/useDimensions";
// import { cn } from "@/lib/utils";
// import { ResumeValues } from "@/lib/validation";
// import { useRef } from "react";

// interface ResumePreviewProps {
//   resumeData: ResumeValues;
//   className?: string;
// }

// export default function ResumePreview({
//   resumeData,
//   className,
// }: ResumePreviewProps) {
//     const containerRef = useRef<HTMLDivElement>(null);

//   const {width} = useDimensions(containerRef);

//   return (
//     <div
//       className={cn(
//         "aspect-[210/297] h-fit w-full bg-white text-black",
//         className,
//       )}
//       ref={containerRef}
//     >
//       <div
//       style={{
//             zoom: (1/794) * width
//       }}
//       >
//         <h1 className="p-6 text-3xl font-bold">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, numquam.
//         </h1>
//       </div>
//     </div>
//   );
// }

import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}

export default function ResumePreview({
  resumeData,
  className,
}: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Explicitly cast containerRef to RefObject<HTMLElement>
  const { width } = useDimensions(containerRef as React.RefObject<HTMLElement>);

  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full bg-white text-black",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn("space-y-6 p-6", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
      >
        <PersonalInfoHeader resumeData={resumeData} />
        <SummarySection resumeData={resumeData} />
        <WorkExperienceSection resumeData={resumeData} />
      </div>
    </div>
  );
}

interface ResumeSectionProps {
  resumeData: ResumeValues;
}

function PersonalInfoHeader({ resumeData }: ResumeSectionProps) {
  const { photo, firstName, lastName, jobTitle, city, country, phone, email } =
    resumeData;

  const [photoSrc, setPhotoSrc] = useState(photo instanceof File ? "" : photo);

  useEffect(() => {
    const objectUrl = photo instanceof File ? URL.createObjectURL(photo) : "";
    if (objectUrl) setPhotoSrc(objectUrl);
    if (photo === null) setPhotoSrc("");
    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);

  return (
    <div className="flex items-center gap-6">
      {photoSrc && (
        <Image
          src={photoSrc}
          width={100}
          height={100}
          alt="Author Photo"
          className="aspect-auto object-cover"
        />
      )}

      <div className="space-y-2.5">
        <div className="space-y-1">
          <p className="text-2xl font-bold">
            {firstName} {lastName}
          </p>
          <p className="font-medium">{jobTitle}</p>
        </div>
        <p className="text-s text-gray-500">
          {city}
          {city && country ? ", " : ""}
          {country}
          {(city || country) && (phone || email) ? ", " : ""}
          {[phone, email].filter(Boolean).join(", ")}
        </p>
      </div>
    </div>
  );
}

function SummarySection({ resumeData }: ResumeSectionProps) {
  const { summary } = resumeData;

  if (!summary) return null;

  return (
    <>
      <hr className="border-2" />
      <div className="space-y-3 break-inside-avoid">
        <p className="text-lg font-semibold">Tentang Saya</p>
        <div className="whitespace-pre-line text-sm">{summary}</div>
      </div>
    </>
  );
}

function WorkExperienceSection ({resumeData}: ResumeSectionProps) {
    const {workExperiences} = resumeData

    const workExperiencesNotEmpty = workExperiences?.filter(
        (exp) => Object.values(exp).filter(Boolean).length > 0
    )

    if (!workExperiencesNotEmpty?.length) return null;

    return <>
    <hr className="border-2" />
    <div className="space-y-3">
        <p className="text-lg font-semibold">Pengalaman Kerja</p>
        {workExperiencesNotEmpty.map((exp, index) => (
            <div className="break-inside-avoid space-y-1" key={index}>
                <div className="flex items-center justify-between text-sm font-semibold"></div>
            </div>
        ))}
    </div>
    </>
}