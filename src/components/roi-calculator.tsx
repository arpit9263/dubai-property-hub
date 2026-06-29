import { useMemo, useState } from "react";
import { TrendingUp, Calculator, Wallet, PiggyBank } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatAed } from "@/data/properties";

type Props = {
  initialPrice?: number;
  initialYield?: number;
  initialAppreciation?: number;
};

export function RoiCalculator({
  initialPrice = 5000000,
  initialYield = 7,
  initialAppreciation = 6,
}: Props) {
  const [price, setPrice] = useState(initialPrice);
  const [downPct, setDownPct] = useState(25);
  const [yieldPct, setYieldPct] = useState(initialYield);
  const [appreciationPct, setAppreciationPct] = useState(initialAppreciation);
  const [years, setYears] = useState(5);

  const calc = useMemo(() => {
    const downPayment = price * (downPct / 100);
    const annualRent = price * (yieldPct / 100);
    const totalRent = annualRent * years;
    const futureValue = price * Math.pow(1 + appreciationPct / 100, years);
    const appreciationGain = futureValue - price;
    const totalReturn = totalRent + appreciationGain;
    const totalRoi = (totalReturn / downPayment) * 100;
    const annualRoi = totalRoi / years;
    const cashOnCash = (annualRent / downPayment) * 100;
    return {
      downPayment,
      annualRent,
      totalRent,
      futureValue,
      appreciationGain,
      totalReturn,
      totalRoi,
      annualRoi,
      cashOnCash,
    };
  }, [price, downPct, yieldPct, appreciationPct, years]);

  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-3 space-y-8">
        <div className="flex items-center gap-3">
          <Calculator className="h-5 w-5 text-primary" />
          <h3 className="label-eyebrow">High-ROI Calculator</h3>
        </div>

        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-[0.2em] text-foreground/60">Property price (AED)</Label>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value) || 0)}
            className="bg-card border-border/50 h-12 text-lg font-display"
          />
        </div>

        <Field label={`Down payment · ${downPct}%`} value={downPct} onChange={setDownPct} min={10} max={100} step={5} hint={formatAed(calc.downPayment)} />
        <Field label={`Annual rental yield · ${yieldPct}%`} value={yieldPct} onChange={setYieldPct} min={0} max={15} step={0.1} hint={`${formatAed(calc.annualRent)} / yr`} />
        <Field label={`Annual appreciation · ${appreciationPct}%`} value={appreciationPct} onChange={setAppreciationPct} min={0} max={20} step={0.5} />
        <Field label={`Holding period · ${years} ${years === 1 ? "year" : "years"}`} value={years} onChange={setYears} min={1} max={20} step={1} />
      </div>

      <div className="lg:col-span-2 space-y-4">
        <Stat icon={<TrendingUp className="h-4 w-4" />} label="Projected total ROI" value={`${calc.totalRoi.toFixed(1)}%`} accent />
        <Stat icon={<PiggyBank className="h-4 w-4" />} label="Average annual ROI" value={`${calc.annualRoi.toFixed(1)}%`} />
        <Stat icon={<Wallet className="h-4 w-4" />} label="Cash-on-cash" value={`${calc.cashOnCash.toFixed(1)}%`} />
        <div className="bg-card border border-border/40 p-6 space-y-3">
          <Row label="Total rental income" value={formatAed(calc.totalRent)} />
          <Row label="Appreciation gain" value={formatAed(calc.appreciationGain)} />
          <Row label="Future property value" value={formatAed(calc.futureValue)} />
          <div className="pt-3 border-t border-border/30 flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Total return</span>
            <span className="text-xl font-display font-semibold text-primary">{formatAed(calc.totalReturn)}</span>
          </div>
        </div>
        <p className="text-[11px] text-foreground/40 leading-relaxed">
          Indicative projection only. Actual returns depend on market conditions, financing costs and management fees.
        </p>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, min, max, step, hint }: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number; max: number; step: number;
  hint?: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <Label className="text-xs uppercase tracking-[0.2em] text-foreground/60">{label}</Label>
        {hint && <span className="text-xs text-primary">{hint}</span>}
      </div>
      <Slider value={[value]} onValueChange={(v) => onChange(v[0])} min={min} max={max} step={step} />
    </div>
  );
}

function Stat({ icon, label, value, accent }: { icon: React.ReactNode; label: string; value: string; accent?: boolean }) {
  return (
    <div className={`p-6 border ${accent ? "bg-primary/10 border-primary/40" : "bg-card border-border/40"}`}>
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/60 mb-3">
        {icon}
        <span>{label}</span>
      </div>
      <p className={`text-3xl font-display font-semibold ${accent ? "text-primary" : "text-foreground"}`}>{value}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between text-sm">
      <span className="text-foreground/60">{label}</span>
      <span className="font-display text-foreground">{value}</span>
    </div>
  );
}