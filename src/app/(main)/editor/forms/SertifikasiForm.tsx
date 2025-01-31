import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { EditorFormProps } from "@/lib/types";
import { sertifikasiSchema, SertifikasiValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SertifikasiForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<SertifikasiValues>({
    resolver: zodResolver(sertifikasiSchema),
    defaultValues: {
      sertifikasi: resumeData.sertifikasi || [],
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();
      if (!isValid) return;
      setResumeData({
        ...resumeData,
        sertifikasi:
          values.sertifikasi
            ?.filter((sertifikat) => sertifikat !== undefined)
            .map((sertifikat) => sertifikat.trim())
            .filter((sertifikat) => sertifikat !== "") || [],
      });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Sertifikasi</h2>
        <p className="text-sm text-muted-foreground">
          Tulis Sertifikasi yang telah anda dapatkan
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-3">
          <FormField
            control={form.control}
            name="sertifikasi"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">
                  Sertifikasi
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="cth. Next JS Pengembangan Web Modern Lisensi Talenthub 2024, IT Support - Lisensi Google 2024"
                    onChange={(e) => {
                      const sertifikasi = e.target.value.split(",");
                      field.onChange(sertifikasi);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Tulis Sertifikasi Pelatihan anda, pisahkan
                  dengan tanda koma ( , )
                </FormDescription>
                <FormDescription>
                  Jika tidak mempunyai sertifikasi silahkan lewati tahap ini
                </FormDescription>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
