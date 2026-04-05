import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut } from "../motion/presets";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  variant?: RevealVariant;
};

const motionMap: Record<
  RevealVariant,
  { hidden: Record<string, number>; visible: Record<string, number> }
> = {
  up: { hidden: { opacity: 0, y: 48 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 48 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
  variant = "up",
}: RevealProps) {
  const m = motionMap[variant];
  return (
    <motion.div
      className={className}
      initial={m.hidden}
      whileInView={m.visible}
      viewport={{ once, margin: "-10% 0px" }}
      transition={{
        ...easeOut,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
