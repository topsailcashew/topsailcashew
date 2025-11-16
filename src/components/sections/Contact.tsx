"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/app/actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WindowFrame } from "../shared/WindowFrame";
import { ArrowRight } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      variant="outline"
      className="w-full border-2 border-primary text-lg px-8 py-6 shadow-brutalist transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:opacity-50 disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0"
    >
      {pending ? "Sending..." : "Send Message"}
       <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
}

export function Contact() {
  const { toast } = useToast();
  const initialState: ContactFormState = { success: false, message: "" };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Let's Talk
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project, an idea, or just want to say hi? Drop me a line.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <WindowFrame title="contact-form.jsx">
            <Form {...form}>
              <form action={formAction} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          {...field}
                          className="border-2 text-base p-6"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          {...field}
                          className="border-2 text-base p-6"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me what's on your mind..."
                          {...field}
                          className="border-2 text-base p-6 min-h-[150px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SubmitButton />
              </form>
            </Form>
          </WindowFrame>
        </div>
      </div>
    </section>
  );
}
