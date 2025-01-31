import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
    title: "Desain CV Anda"
}

export default function Page() {
    return <ResumeEditor/>
}