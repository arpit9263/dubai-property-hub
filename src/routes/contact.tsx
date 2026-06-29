import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapView } from "@/components/map-view";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Archigram — Dubai" },
      { name: "description", content: "Speak to an Archigram advisor. Offices on Sheikh Zayed Road, Downtown Dubai." },
      { property: "og:title", content: "Contact Archigram — Dubai" },
      { property: "og:description", content: "Speak to an Archigram advisor in Dubai." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you. An advisor will be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak to an advisor."
        subtitle="Whether you're buying, selling or investing — our Dubai team responds within 24 hours."
      />

      <section className="container-edge pb-24 grid gap-16 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Phone" name="phone" type="tel" />
          <Field label="Interest" name="interest" placeholder="e.g. 3BR Marina, off-plan investment, etc." />
          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-[0.2em] text-foreground/60">Message</Label>
            <Textarea name="message" rows={6} className="bg-card border-border/50" required />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:opacity-90 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {submitting ? "Sending..." : "Send enquiry"}
          </button>
        </form>

        <div className="space-y-10">
          <ContactBlock icon={<MapPin className="h-5 w-5" />} label="Visit" value="Level 28, Sheikh Zayed Road, Downtown Dubai, UAE" />
          <ContactBlock icon={<Phone className="h-5 w-5" />} label="Call" value="+971 4 800 ARCH" />
          <ContactBlock icon={<Mail className="h-5 w-5" />} label="Write" value="hello@archigram.ae" />

          <MapView
            markers={[{ id: "office", position: [25.1972, 55.2744], title: "Archigram HQ", subtitle: "Downtown Dubai" }]}
            center={[25.1972, 55.2744]}
            zoom={13}
            height="360px"
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs uppercase tracking-[0.2em] text-foreground/60">{label}{required && " *"}</Label>
      <Input name={name} type={type} required={required} placeholder={placeholder} className="bg-card border-border/50 h-12" />
    </div>
  );
}

function ContactBlock({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-primary mt-1">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">{label}</p>
        <p className="text-foreground/90">{value}</p>
      </div>
    </div>
  );
}