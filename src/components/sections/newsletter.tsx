import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setTimeout(() => {
      toast.success("You're on the list. Our weekly Dubai brief is on its way.");
      setEmail("");
      setSubmitting(false);
    }, 500);
  };

  return (
    <section className="container-edge py-24 md:py-28 border-t border-border/30">
      <div className="relative overflow-hidden bg-card border border-primary/20 p-10 md:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.11_75/0.15),transparent_60%)] pointer-events-none" />
        <div className="relative grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="label-eyebrow mb-4">Insider Brief</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight leading-[1.05]">
              Off-market listings, before anyone else.
            </h2>
            <p className="mt-5 text-foreground/60 leading-relaxed max-w-lg">
              One curated email per week — new Dubai inventory, market moves and Archigram's take. No noise.
            </p>
          </div>
          <form onSubmit={submit} className="flex gap-2 items-stretch">
            <input
              type="email"
              required
              placeholder="you@address.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-0 bg-background border border-border/50 px-5 py-4 text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:opacity-90 disabled:opacity-60 whitespace-nowrap"
            >
              <Send className="h-4 w-4" />
              {submitting ? "…" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}