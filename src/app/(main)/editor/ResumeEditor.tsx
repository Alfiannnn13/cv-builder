"use client";

import PersonalInfoForm from "./forms/PersonalInfoForm";
import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";

export default function ResumeEditor() {
  const searchParams = useSearchParams();

  const currentStep = searchParams.get("step") || steps[0].key;

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    step => step.key === currentStep
  )?.component

  return (
    <div className="flex grow flex-col">
      <header className="spacey1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Desain CV Anda</h1>
        <p className="text-sm text-muted-foreground">
          Ikuti langkah-langkah di bawah ini untuk membuat CV Anda. Kemajuan
          akan disimpan secara otomatis.
        </p>
      </header>
      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div className="w-full overflow-y-auto md:w-1/2 space-y-6">
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep}/>
            {FormComponent && <FormComponent />}
          </div>
          <div className="grow md:border-r" />
          <div className="hidden w-1/2 md:flex">Kanan</div>
        </div>
      </main>
      <Footer currentStep={currentStep} setCurrentStep={setStep}/>
    </div>
  );
}
