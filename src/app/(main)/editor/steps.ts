import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";


export const steps: {
    title: string;
    component: React.ComponentType<EditorFormProps>;
    key: string;
}[] = [
    {title: "Info CV", component: GeneralInfoForm, key: "informasi-cv"},
    {title: "Data Diri", component: PersonalInfoForm, key: "data-diri"},
    {title: "Pengalaman Kerja", component: WorkExperienceForm, key: "pengalaman-kerja"},
]