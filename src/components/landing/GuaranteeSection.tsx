import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-elevated p-8 md:p-12 border-2 border-secondary/20"
        >
          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            7 dias de garantia incondicional
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Teste sem risco. Se não gostar, devolvemos <strong className="text-foreground">100% do seu investimento</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
