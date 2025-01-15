import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";


export const steps: {
    title: string;
    component: React.ComponentType;
    key: string;
}[] = [
    {title: "Info CV", component: GeneralInfoForm, key: "informasi-cv"},
    {title: "Data Diri", component: PersonalInfoForm, key: "data-diri"},
]