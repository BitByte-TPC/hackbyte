export const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const pageVariants = {
  initial: { y: "50%", opacity: 0, transition },
  in: {
    y: "0%",
    opacity: 1,
    transition,
  },
  out: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

export const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};
