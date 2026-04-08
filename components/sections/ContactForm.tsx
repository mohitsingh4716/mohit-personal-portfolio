"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { LoaderCircle, Send } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { InputField } from "@/components/ui/InputField";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TextArea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY || "";

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey,
      });

      toast.success("Message sent successfully.", {
        style: {
          background: "#0d1022",
          color: "#f4f7ff",
          border: "1px solid rgba(123, 92, 255, 0.35)",
        },
      });

      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.", {
        style: {
          background: "#0d1022",
          color: "#f4f7ff",
          border: "1px solid rgba(251, 113, 133, 0.35)",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="pb-24">
      <Toaster position="bottom-right" />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-6">
          <Heading
            eyebrow="Get In Touch"
            title={
              <>
                Let&apos;s turn an idea into a <span className="text-gradient">polished product</span>
              </>
            }
            description="If you’re building something ambitious, I’d love to hear about it. Share a quick brief, and I’ll get back to you."
          />
          <div className="space-y-4 text-sm text-[var(--muted)] sm:text-base">
            <p>Available for full-stack roles, freelance work, and collaborative product builds.</p>
            <p>Expect clean communication, thoughtful execution, and strong attention to UX details.</p>
          </div>
        </div>

        <Card className="p-6 sm:p-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <InputField label="Your Name" name="from_name" type="text" autoComplete="name" required />
            <InputField label="Your Email" name="from_email" type="email" autoComplete="email" required />
            <TextArea label="Project Details" name="message" required />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <LoaderCircle size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </SectionWrapper>
  );
}
