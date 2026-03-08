import { motion } from "framer-motion";
import { BookOpen, PlayCircle, Microscope, HeartPulse, Flame, Lock, Salad, Leaf, CalendarCheck } from "lucide-react";

const modules = [
  { icon: BookOpen, title: "Guia essencial em PDF" },
  { icon: PlayCircle, title: "Aulas passo a passo" },
  { icon: Microscope, title: "Digestão e inflamação intestinal" },
  { icon: HeartPulse, title: "Intestino e microbiota" },
  { icon: Flame, title: "Gastrite e refluxo" },
  { icon: Lock, title: "Intestino preso" },
  { icon: Salad, title: "Estratégias alimentares práticas" },
  { icon: Leaf, title: "Hábitos anti-inflamatórios" },
  { icon: CalendarCheck, title: "Plano de ação diário" },
];

const ModulesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
        >
          Acesso completo ao <span className="text-primary">programa</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-elevated flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <mod.icon className="w-5 h-5 text-secondary" />
              </div>
              <p className="font-body font-semibold text-foreground">{mod.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
