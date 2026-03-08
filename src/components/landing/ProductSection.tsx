import { motion } from "framer-motion";
import { Flame, RefreshCw, Wind, Sparkles, Zap } from "lucide-react";

const benefits = [
  { icon: Flame, text: "Reduz azia e refluxo" },
  { icon: RefreshCw, text: "Regula o intestino naturalmente" },
  { icon: Wind, text: "Diminui gases e estufamento" },
  { icon: Sparkles, text: "Melhora absorção de nutrientes" },
  { icon: Zap, text: "Mais leveza e energia diária" },
];

const ProductSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-secondary rounded-3xl p-8 md:p-14 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-3">
            O que é o Protocolo Digestivo?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-10 font-body">
            O método definitivo para restaurar sua saúde intestinal de forma natural
          </p>

          <div className="space-y-4 text-left max-w-md mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-secondary-foreground font-body font-medium text-lg">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
