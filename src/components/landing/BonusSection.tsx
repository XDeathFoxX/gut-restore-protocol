import { motion } from "framer-motion";
import { UtensilsCrossed, Coffee, Pill, CheckSquare, Calendar } from "lucide-react";

const bonuses = [
  { icon: UtensilsCrossed, title: "Receitas terapêuticas" },
  { icon: Coffee, title: "Chás funcionais" },
  { icon: Pill, title: "Guia de suplementação natural" },
  { icon: CheckSquare, title: "Checklist de hábitos saudáveis" },
  { icon: Calendar, title: "Plano prático semanal" },
];

const BonusSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-primary/10 text-primary font-bold text-sm px-4 py-2 rounded-full mb-4 uppercase tracking-wider"
        >
          🎁 Bônus exclusivos liberados hoje
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mt-8">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={bonus.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated border-2 border-primary/20 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <bonus.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-body font-semibold text-foreground">{bonus.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
