import { motion } from "framer-motion";
import { Wind, Flame, Clock, CloudRain, Activity, Battery } from "lucide-react";

const pains = [
  { icon: Wind, title: "Estufamento após refeições" },
  { icon: Flame, title: "Azia e refluxo frequentes" },
  { icon: Clock, title: "Sensação de digestão lenta" },
  { icon: CloudRain, title: "Gases e prisão de ventre" },
  { icon: Activity, title: "Dor abdominal constante" },
  { icon: Battery, title: "Cansaço após comer" },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
        >
          Se você sente isso, <span className="text-primary">precisa ver esse vídeo</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <pain.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-body font-semibold text-foreground">{pain.title}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground max-w-xl mx-auto font-body text-lg">
          Esses sinais indicam que seu sistema digestivo pode estar <strong className="text-foreground">inflamado</strong>.
        </p>
      </div>
    </section>
  );
};

export default PainPointsSection;
