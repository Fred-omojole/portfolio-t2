import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedWordsProps {
  title: string;
  style: string;
}

const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title, style }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
    if (!inView) {
      controls.start("initial");
    }
  }, [controls, inView]);

  const wordAnimation = {
    initial: {
      opacity: 0,
      y: 150,
      // y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 6,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1,
      },
    },
  };

  return (
    <h1 aria-label={title} role="heading">
      <motion.span
        ref={ref}
        className="flex w-[1024]"
      >
        {title.split(" ").map((word, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate={controls}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className="flex items-center justify-center overflow-hidden"
          >
            <motion.span className={style} variants={wordAnimation}>
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        ))}
      </motion.span>
    </h1>
  );
};

export default AnimatedWords;
