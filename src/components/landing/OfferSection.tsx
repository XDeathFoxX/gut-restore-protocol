import { motion } from "framer-motion";
import { CreditCard, Landmark, QrCode, ShieldCheck } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10"
        >
          Comece <span className="text-primary">hoje</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto card-elevated border-2 border-primary/30 p-8 md:p-10"
        >
          <p className="text-muted-foreground line-through text-xl mb-1">De R$ 297,00</p>
          <p className="font-display text-5xl md:text-6xl font-black text-primary mb-2">R$ 47,90</p>
          <p className="text-muted-foreground text-lg mb-8">
            ou <strong className="text-foreground">4x de R$ 11,98</strong>
          </p>

          <a href="https://pay.kirvano.com/368b993d-b387-4dc7-af77-a20558053be9" target="_blank" rel="noopener noreferrer" className="btn-cta w-full text-xl animate-pulse-glow rounded-2xl mb-6 inline-block text-center">
            QUERO COMEÇAR AGORA
          </a>

          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <CreditCard className="w-6 h-6" />
            <Landmark className="w-6 h-6" />
            <QrCode className="w-6 h-6" />
            <ShieldCheck className="w-6 h-6" />
          </div>
          <p className="text-xs text-muted-foreground mt-3">Pagamento 100% seguro</p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
