


import { generalInfoSchema, GeneralInfoValues } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function GeneralInfoForm() {
  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="spacey1.5 text-center">
        <h2 className="text-2xl font-semibold">Informasi Umum</h2>
        <p className="text-sm text-muted-foreground">Hal ini tidak akan tercantum di CV Anda.</p>
      </div>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit((data) => console.log(data))}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Label Proyek</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="CV Albert" autoFocus />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
