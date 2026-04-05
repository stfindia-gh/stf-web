import type { Transition } from "framer-motion";

export const springSnappy: Transition = { type: "spring", stiffness: 380, damping: 28, mass: 0.8 };
export const springSoft: Transition = { type: "spring", stiffness: 120, damping: 22, mass: 1 };
export const springBouncy: Transition = { type: "spring", stiffness: 260, damping: 18, mass: 0.9 };
export const easeOut: Transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };
export const easeInOutLong: Transition = { duration: 1.1, ease: [0.45, 0, 0.55, 1] };
