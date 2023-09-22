import styles from './Logo.module.scss';
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      className={styles.logo}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
      layout
    >
      <span className={styles.logoName}>WEATHER.CUBE</span>
    </motion.div>
  );
};
