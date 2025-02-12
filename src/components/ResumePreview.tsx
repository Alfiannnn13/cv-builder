// import useDimensions from "@/hooks/useDimensions";
// import { cn } from "@/lib/utils";
// import { ResumeValues } from "@/lib/validation";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { formatDate } from "date-fns";
// import { Badge } from "./ui/badge";
// import { BorderStyles } from "@/app/(main)/editor/BorderStyleButton";

// interface ResumePreviewProps {
//   resumeData: ResumeValues;
//   contentRef?: React.Ref<HTMLDivElement>;
//   className?: string;
// }

// export default function ResumePreview({
//   resumeData,
//   contentRef,
//   className,
// }: ResumePreviewProps) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Explicitly cast containerRef to RefObject<HTMLElement>
//   const { width } = useDimensions(containerRef as React.RefObject<HTMLElement>);

//   return (
//     <div
//       className={cn(
//         "aspect-[210/297] h-fit w-full bg-white text-black",
//         className,
//       )}
//       ref={containerRef}
//     >
//       <div
//         className={cn("space-y-6 p-6", !width && "invisible")}
//         style={{
//           zoom: (1 / 794) * width,
//         }}
//         ref={contentRef}
//         id="resumePreviewContent"
//       >
//         <PersonalInfoHeader resumeData={resumeData} />
//         <SummarySection resumeData={resumeData} />
//         <EducationSection resumeData={resumeData} />
//         <WorkExperienceSection resumeData={resumeData} />
//         <SkillSection resumeData={resumeData} />
//         <SertifikasiSection resumeData={resumeData} />
//       </div>
//     </div>
//   );
// }

// interface ResumeSectionProps {
//   resumeData: ResumeValues;
// }

// function PersonalInfoHeader({ resumeData }: ResumeSectionProps) {
//   const {
//     photo,
//     firstName,
//     lastName,
//     jobTitle,
//     city,
//     country,
//     phone,
//     email,
//     colorHex,
//     borderStyle,
//   } = resumeData;

//   const [photoSrc, setPhotoSrc] = useState(photo instanceof File ? "" : photo);

//   useEffect(() => {
//     const objectUrl = photo instanceof File ? URL.createObjectURL(photo) : "";
//     if (objectUrl) setPhotoSrc(objectUrl);
//     if (photo === null) setPhotoSrc("");
//     return () => URL.revokeObjectURL(objectUrl);
//   }, [photo]);

//   return (
//     <div className="flex items-center gap-6">
//       {photoSrc && (
//         <Image
//           src={photoSrc}
//           width={100}
//           height={100}
//           alt="Author Photo"
//           className="aspect-auto object-cover"
//           style={{
//             borderRadius:
//               borderStyle === BorderStyles.SQUARE
//                 ? "0px"
//                 : borderStyle === BorderStyles.CIRCLE
//                   ? "9999px"
//                   : "10%",
//           }}
//         />
//       )}

//       <div className="space-y-2.5">
//         <div className="space-y-1">
//           <p
//             className="text-2xl font-bold"
//             style={{
//               color: colorHex,
//             }}
//           >
//             {firstName} {lastName}
//           </p>
//           <p
//             className="font-medium"
//             style={{
//               color: colorHex,
//             }}
//           >
//             {jobTitle}
//           </p>
//         </div>
//         <p className="font-medium">
//           {city}
//           {city && country ? ", " : ""}
//           {country}
//           {(city || country) && (phone || email) ? " | " : ""}
//           {[phone, email].filter(Boolean).join(" | ")}
//         </p>
//       </div>
//     </div>
//   );
// }

// function SummarySection({ resumeData }: ResumeSectionProps) {
//   const { summary, colorHex } = resumeData;

//   if (!summary) return null;

//   return (
//     <>
//       <hr
//         className="border-2"
//         style={{
//           borderColor: colorHex,
//         }}
//       />
//       <div className="break-inside-avoid space-y-3">
//         <p
//           className="text-lg font-semibold"
//           style={{
//             color: colorHex,
//           }}
//         >
//           Tentang Saya
//         </p>
//         <div className="whitespace-pre-line text-sm">{summary}</div>
//       </div>
//     </>
//   );
// }

// function WorkExperienceSection({ resumeData }: ResumeSectionProps) {
//   const { workExperiences, colorHex } = resumeData;

//   const workExperiencesNotEmpty = workExperiences?.filter(
//     (exp) => Object.values(exp).filter(Boolean).length > 0,
//   );

//   if (!workExperiencesNotEmpty?.length) return null;

//   return (
//     <>
//       <hr
//         className="border-2"
//         style={{
//           borderColor: colorHex,
//         }}
//       />
//       <div className="space-y-3">
//         <p
//           className="text-lg font-semibold"
//           style={{
//             color: colorHex,
//           }}
//         >
//           Pengalaman Kerja
//         </p>
//         {workExperiencesNotEmpty.map((exp, index) => (
//           <div className="break-inside-avoid space-y-1" key={index}>
//             <div className="text-m flex items-center justify-between">
//               <span
//                 className="font-semibold"
//                 style={{
//                   color: colorHex,
//                 }}
//               >
//                 {exp.position}
//               </span>
//               {exp.startDate && (
//                 <span
//                   style={{
//                     color: colorHex,
//                   }}
//                 >
//                   {formatDate(exp.startDate, "MMM yyyy")} -{" "}
//                   {exp.endDate
//                     ? formatDate(exp.endDate, "MMM yyyy")
//                     : "saat ini"}
//                 </span>
//               )}
//             </div>
//             <p className="text-m font-semibold">{exp.company}</p>
//             <div className="whitespace-pre-line text-sm">{exp.description}</div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// function EducationSection({ resumeData }: ResumeSectionProps) {
//   const { educations, colorHex } = resumeData;

//   const educationsNotEmpty = educations?.filter(
//     (edu) => Object.values(edu).filter(Boolean).length > 0,
//   );

//   if (!educationsNotEmpty?.length) return null;

//   return (
//     <>
//       <hr
//         className="border-2"
//         style={{
//           borderColor: colorHex,
//         }}
//       />
//       <div className="space-y-3">
//         <p
//           className="text-lg font-semibold"
//           style={{
//             color: colorHex,
//           }}
//         >
//           Pendidikan
//         </p>
//         {educationsNotEmpty.map((edu, index) => (
//           <div className="break-inside-avoid space-y-1" key={index}>
//             <div className="text-m flex items-center justify-between">
//               <p
//                 className="text-m font-semibold"
//                 style={{
//                   color: colorHex,
//                 }}
//               >
//                 {edu.school}
//               </p>
//               {edu.startDate && (
//                 <span
//                   style={{
//                     color: colorHex,
//                   }}
//                 >
//                   {edu.startDate &&
//                     `${formatDate(edu.startDate, "MMM yyyy")} ${edu.endDate ? `- ${formatDate(edu.endDate, "MMM yyyy")}` : ""}`}
//                 </span>
//               )}
//             </div>
//             <span>{edu.degree}</span>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// function SkillSection({ resumeData }: ResumeSectionProps) {
//   const { skills, colorHex, borderStyle } = resumeData;

//   if (!skills?.length) return null;
//   return (
//     <>
//       <hr
//         className="border-2"
//         style={{
//           borderColor: colorHex,
//           borderRadius:
//             borderStyle === BorderStyles.SQUARE
//               ? "0px"
//               : borderStyle === BorderStyles.CIRCLE
//                 ? "9999px"
//                 : "8px",
//         }}
//       />
//       <div className="break-inside-avoid space-y-3">
//         <p
//           className="text-lg font-semibold"
//           style={{
//             color: colorHex,
//           }}
//         >
//           Keahlian
//         </p>
//         <div className="flex break-inside-avoid flex-wrap gap-2">
//           {skills.map((skill, index) => (
//             <Badge
//               key={index}
//               className="rounded-md bg-black text-white hover:bg-black"
//               style={{
//                 backgroundColor: colorHex,
//               }}
//             >
//               {skill}
//             </Badge>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
// function SertifikasiSection({ resumeData }: ResumeSectionProps) {
//   const { sertifikasi, colorHex } = resumeData;

//   if (!sertifikasi?.length) return null;

//   return (
//     <>
//       <hr
//         className="border-2"
//         style={{
//           borderColor: colorHex,
//         }}
//       />
//       <div className="break-inside-avoid space-y-3">
//         <p
//           className="text-lg font-semibold"
//           style={{
//             color: colorHex,
//           }}
//         >
//           Sertifikasi
//         </p>
//         <ul className="list-disc space-y-1 pl-5">
//           {sertifikasi.map((sertifikat, index) => (
//             <li key={index} className="text-sm leading-relaxed">
//               {sertifikat}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// update
import { forwardRef, useEffect, useState } from "react";
import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import Image from "next/image";
import { formatDate } from "date-fns";
import { Badge } from "./ui/badge";
import { BorderStyles } from "@/app/(main)/editor/BorderStyleButton";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  contentRef?: React.Ref<HTMLDivElement>; // Pastikan ini ada
  className?: string;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ resumeData, className }, ref) => {
    const containerRef = ref as React.RefObject<HTMLDivElement>;
    const { width } = useDimensions(containerRef);

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
          <EducationSection resumeData={resumeData} />
          <WorkExperienceSection resumeData={resumeData} />
          <SkillSection resumeData={resumeData} />
          <SertifikasiSection resumeData={resumeData} />
        </div>
      </div>
    );
  },
);

ResumePreview.displayName = "ResumePreview";
export default ResumePreview;

interface ResumeSectionProps {
  resumeData: ResumeValues;
}

function PersonalInfoHeader({ resumeData }: ResumeSectionProps) {
  const {
    photo,
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phone,
    email,
    colorHex,
    borderStyle,
  } = resumeData;

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
          style={{
            borderRadius:
              borderStyle === BorderStyles.SQUARE
                ? "0px"
                : borderStyle === BorderStyles.CIRCLE
                  ? "9999px"
                  : "10%",
          }}
        />
      )}

      <div className="space-y-2.5">
        <div className="space-y-1">
          <p
            className="text-2xl font-bold"
            style={{
              color: colorHex,
            }}
          >
            {firstName} {lastName}
          </p>
          <p
            className="font-medium"
            style={{
              color: colorHex,
            }}
          >
            {jobTitle}
          </p>
        </div>
        <p className="font-medium">
          {city}
          {city && country ? ", " : ""}
          {country}
          {(city || country) && (phone || email) ? " | " : ""}
          {[phone, email].filter(Boolean).join(" | ")}
        </p>
      </div>
    </div>
  );
}

function SummarySection({ resumeData }: ResumeSectionProps) {
  const { summary, colorHex } = resumeData;

  if (!summary) return null;

  return (
    <>
      <hr className="border-2" style={{ borderColor: colorHex }} />
      <div className="break-inside-avoid space-y-3">
        <p className="text-lg font-semibold" style={{ color: colorHex }}>
          Tentang Saya
        </p>
        <div className="whitespace-pre-line text-sm">{summary}</div>
      </div>
    </>
  );
}

function WorkExperienceSection({ resumeData }: ResumeSectionProps) {
  const { workExperiences, colorHex } = resumeData;

  const workExperiencesNotEmpty = workExperiences?.filter(
    (exp) => Object.values(exp).filter(Boolean).length > 0,
  );

  if (!workExperiencesNotEmpty?.length) return null;

  return (
    <>
      <hr className="border-2" style={{ borderColor: colorHex }} />
      <div className="space-y-3">
        <p className="text-lg font-semibold" style={{ color: colorHex }}>
          Pengalaman Kerja
        </p>
        {workExperiencesNotEmpty.map((exp, index) => (
          <div className="break-inside-avoid space-y-1" key={index}>
            <div className="text-m flex items-center justify-between">
              <span className="font-semibold" style={{ color: colorHex }}>
                {exp.position}
              </span>
              {exp.startDate && (
                <span style={{ color: colorHex }}>
                  {formatDate(exp.startDate, "MMM yyyy")} -{" "}
                  {exp.endDate
                    ? formatDate(exp.endDate, "MMM yyyy")
                    : "saat ini"}
                </span>
              )}
            </div>
            <p className="text-m font-semibold">{exp.company}</p>
            <div className="whitespace-pre-line text-sm">{exp.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function EducationSection({ resumeData }: ResumeSectionProps) {
  const { educations, colorHex } = resumeData;

  const educationsNotEmpty = educations?.filter(
    (edu) => Object.values(edu).filter(Boolean).length > 0,
  );

  if (!educationsNotEmpty?.length) return null;

  return (
    <>
      <hr className="border-2" style={{ borderColor: colorHex }} />
      <div className="space-y-3">
        <p className="text-lg font-semibold" style={{ color: colorHex }}>
          Pendidikan
        </p>
        {educationsNotEmpty.map((edu, index) => (
          <div className="break-inside-avoid space-y-1" key={index}>
            <div className="text-m flex items-center justify-between">
              <p className="text-m font-semibold" style={{ color: colorHex }}>
                {edu.school}
              </p>
              {edu.startDate && (
                <span style={{ color: colorHex }}>
                  {edu.startDate &&
                    `${formatDate(edu.startDate, "MMM yyyy")} ${
                      edu.endDate
                        ? `- ${formatDate(edu.endDate, "MMM yyyy")}`
                        : ""
                    }`}
                </span>
              )}
            </div>
            <span>{edu.degree}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function SkillSection({ resumeData }: ResumeSectionProps) {
  const { skills, colorHex, borderStyle } = resumeData;

  if (!skills?.length) return null;
  return (
    <>
      <hr className="border-2" style={{ borderColor: colorHex }} />
      <div className="break-inside-avoid space-y-3">
        <p className="text-lg font-semibold" style={{ color: colorHex }}>
          Keahlian
        </p>
        <div className="flex break-inside-avoid flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} className="rounded-md bg-black text-white">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}

function SertifikasiSection({ resumeData }: ResumeSectionProps) {
  const { sertifikasi, colorHex } = resumeData;

  if (!sertifikasi?.length) return null;

  return (
    <>
      <hr
        className="border-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="break-inside-avoid space-y-3">
        <p
          className="text-lg font-semibold"
          style={{
            color: colorHex,
          }}
        >
          Sertifikasi
        </p>
        <ul className="list-disc space-y-1 pl-5">
          {sertifikasi.map((sertifikat, index) => (
            <li key={index} className="text-sm leading-relaxed">
              {sertifikat}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
