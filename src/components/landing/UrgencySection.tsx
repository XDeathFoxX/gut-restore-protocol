import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const UrgencySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-primary py-5 px-4"
    >
      <div className="section-container flex items-center justify-center gap-3 text-center">
        <AlertTriangle className="w-5 h-5 text-primary-foreground shrink-0" />
        <p className="text-primary-foreground font-bold text-sm md:text-base tracking-wide">
          Essa condição é válida apenas nesta página.
        </p>
      </div>
    </motion.section>
  );
};

export default UrgencySection;
