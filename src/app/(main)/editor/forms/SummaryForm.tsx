import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { EditorFormProps } from "@/lib/types";
import { summarySchema, SummaryValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SummaryForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
    const form = useForm<SummaryValues>({
        resolver: zodResolver(summarySchema),
        defaultValues: {
          summary: resumeData.summary || "",
        },
    });

     useEffect(() => {
        const { unsubscribe } = form.watch(async (values) => {
          const isValid = await form.trigger();
          if (!isValid) return;
          setResumeData({
            ...resumeData, ...values
          });
        });
        return unsubscribe;
      }, [form, resumeData, setResumeData]);

      return (
        <div className="max-w-xl mx-auto space-y-6">
            <div className="space-y-1.5 text-center">
                <h2 className="font-semibold text-2xl">Tentang Saya</h2>
                <p className="text-sm text-muted-foreground">
                    Tulis pengenalan singkat tentang diri Anda untuk CV.
                </p>
            </div>
            <Form {...form}>
                <form className="space-y-3">
                <FormField
                    control={form.control}
                    name="summary"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="sr-only">Tentang Saya</FormLabel>
                            <FormControl>
                                <Textarea
                                {...field}
                                placeholder="cth. Seorang Manajer Pemasaran berpengalaman dengan lebih dari 5 tahun bekerja di industri teknologi. Memiliki keahlian dalam strategi pemasaran digital, analisis pasar, dan pengembangan merek. Berhasil meningkatkan penjualan perusahaan sebesar 30% dalam 6 bulan terakhir."
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                </form>
            </Form>
        </div>
      )
}
