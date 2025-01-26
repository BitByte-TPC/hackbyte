import * as motion from "motion/react-client";

interface AnimatedTitleProps {
  children: React.ReactNode;
  delay?: number;
  viewport?: boolean;
}

function AnimatedTitle({
  children,
  delay = 0,
  viewport = false,
}: AnimatedTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay }}
      exit={{ opacity: 0, y: 40 }}
      viewport={{ once: viewport }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedTitle;
