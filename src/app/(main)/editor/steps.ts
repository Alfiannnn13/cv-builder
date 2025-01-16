import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "Info CV", component: GeneralInfoForm, key: "informasi-cv" },
  { title: "Data Diri", component: PersonalInfoForm, key: "data-diri" },
  {
    title: "Pendidikan",
    component: EducationForm,
    key: "pendidikan",
  },
  {
    title: "Pengalaman Kerja",
    component: WorkExperienceForm,
    key: "pengalaman-kerja",
  },
  {
    title: "Keahlian",
    component: SkillsForm,
    key: "keahlian",
  },
  {
    title: "Tentang Saya",
    component: SummaryForm,
    key: "Tentang Saya",
  },
  
];
