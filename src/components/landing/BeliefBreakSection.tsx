import { motion } from "framer-motion";

const BeliefBreakSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6"
        >
          A solução <span className="text-primary">não está</span> em mais remédios.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg text-muted-foreground font-body leading-relaxed"
        >
          O problema pode estar na inflamação silenciosa do seu sistema digestivo — e existe um{" "}
          <strong className="text-secondary">caminho natural</strong> para resolver isso.
        </motion.p>
      </div>
    </section>
  );
};

export default BeliefBreakSection;
