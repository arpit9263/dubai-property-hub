import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  video?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, image, video, children }: Props) {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#020b14]">
      {video ? (
        <video src={video} poster={image} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-30" />
      ) : image ? (
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b14]/70 via-background/85 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.78_0.11_75/0.15),transparent_55%)] pointer-events-none" />

      <div className="relative container-edge">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label-eyebrow mb-6"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight max-w-4xl leading-[0.95]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-xl text-foreground/70 leading-relaxed text-base md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}