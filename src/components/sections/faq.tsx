import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are foreigners allowed to buy freehold property in Dubai?",
    a: "Yes. Since 2002, non-UAE nationals can own freehold property in designated zones — including Downtown, Marina, Palm Jumeirah, Emirates Hills and Business Bay. Archigram only lists inside verified freehold areas.",
  },
  {
    q: "What is a typical ROI for Dubai investment property?",
    a: "Gross yields typically range from 6% to 11% depending on district, unit type and lease structure. Our high-ROI calculator lets you model your own downside and upside cases in seconds.",
  },
  {
    q: "How does Archigram verify a listing?",
    a: "Every property passes a three-stage check: title deed & Oqood contract review by our legal team, on-ground inspection with dated imagery, and RERA-registered counterparty confirmation before it goes live.",
  },
  {
    q: "Can I visit a property remotely?",
    a: "Absolutely. Listings with a 360° panorama can be walked through in-browser, and our advisors offer live walk-through video calls at your convenience.",
  },
  {
    q: "Do you handle mortgages and Golden Visa applications?",
    a: "Yes. We coordinate with UAE banks for financing (up to 80% LTV for residents) and process Golden Visa applications tied to eligible AED 2M+ investments.",
  },
];

export function Faq() {
  return (
    <section className="container-edge py-24 md:py-32 border-t border-border/30">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="label-eyebrow mb-4">07 / FAQ</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight leading-[1.05]">
            Answers before the questions.
          </h2>
          <p className="mt-6 text-foreground/60 leading-relaxed">
            The details that most brokers keep to themselves — we prefer to publish them.
          </p>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border/40">
                <AccordionTrigger className="text-left text-base md:text-lg font-display font-semibold hover:text-primary hover:no-underline py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-6 text-[15px]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}