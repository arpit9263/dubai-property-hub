import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, image, children }: Props) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </>
      )}
      <div className="relative container-edge">
        <p className="label-eyebrow mb-6">{eyebrow}</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight max-w-4xl leading-[0.95]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-xl text-foreground/70 leading-relaxed text-base md:text-lg">{subtitle}</p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}