import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  /** Enables 3D tilt on children when using mode="tilt" */
  perspective?: boolean;
};

export function Stagger({
  children,
  className = "",
  stagger = 0.1,
  delayChildren = 0.06,
  once = true,
  perspective = false,
}: StaggerProps) {
  return (
    <motion.div
      className={`${className} ${perspective ? "[perspective:1200px]" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-12% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  /** pop = scale+y, slide = x, rise = y only */
  mode?: "pop" | "slide" | "rise" | "tilt";
};

export function StaggerItem({ children, className = "", mode = "pop" }: StaggerItemProps) {
  const variants = {
    pop: {
      hidden: { opacity: 0, y: 48, scale: 0.94 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 220, damping: 24 },
      },
    },
    slide: {
      hidden: { opacity: 0, x: -36 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring" as const, stiffness: 200, damping: 26 },
      },
    },
    rise: {
      hidden: { opacity: 0, y: 56 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 180, damping: 28 },
      },
    },
    tilt: {
      hidden: { opacity: 0, y: 40, rotateX: -12 },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { type: "spring" as const, stiffness: 160, damping: 22 },
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants[mode]}
      style={mode === "tilt" ? { transformStyle: "preserve-3d" } : undefined}
    >
      {children}
    </motion.div>
  );
}
