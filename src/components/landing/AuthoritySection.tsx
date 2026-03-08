import { motion } from "framer-motion";
import specialist1 from "@/assets/specialist-1.png";
import specialist2 from "@/assets/specialist-2.png";

const specialists = [
  {
    name: "Dra. Carolina Mendes",
    role: "Nutricionista Clínica — CRN 45892",
    bio: "Especialista em nutrição funcional e saúde intestinal com mais de 12 anos de experiência clínica.",
    img: specialist1,
  },
  {
    name: "Dr. Rafael Torres",
    role: "Gastroenterologista — CRM 38210",
    bio: "Especialista em gastroenterologia e metabolismo, focado em protocolos naturais para inflamação intestinal.",
    img: specialist2,
  },
];

const AuthoritySection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Desenvolvido por <span className="text-primary">profissionais da saúde</span>
        </motion.h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto font-body text-lg">
          Programa desenvolvido por profissionais especializados em nutrição e metabolismo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {specialists.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-elevated p-8 text-center"
            >
              <img
                src={s.img}
                alt={s.name}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-4 border-primary/20"
              />
              <h3 className="font-display text-xl font-bold text-foreground">{s.name}</h3>
              <p className="text-primary font-body font-semibold text-sm mb-3">{s.role}</p>
              <p className="text-muted-foreground font-body text-sm">{s.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
