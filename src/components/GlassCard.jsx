import { motion } from 'framer-motion';

/**
 * Glassmorphism surface: translucent fill, blur, hairline border, soft shadow, hover lift.
 * Accepts any motion prop (variants, initial, animate, ...) and a className for layout.
 */
export default function GlassCard({ className = '', children, ...props }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`rounded-2xl border border-line bg-white/70 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_10px_30px_-14px_rgb(15_18_34/0.22)] backdrop-blur-xl dark:bg-white/[0.05] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_14px_36px_-16px_rgb(0_0_0/0.6)] ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
