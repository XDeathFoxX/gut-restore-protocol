import { motion } from "framer-motion";
import { Play } from "lucide-react";
import heroThumbnail from "@/assets/hero-thumbnail.jpg";

const HeroSection = () => {
  return (
    <section className="gradient-hero section-padding pt-12 md:pt-20">
      <div className="section-container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground max-w-4xl mx-auto mb-6"
        >
          Livre-se da barriga estufada, má digestão e prisão de ventre com um{" "}
          <span className="text-primary">protocolo natural</span> que está transformando a saúde intestinal de milhares de pessoas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
        >
          Assista ao vídeo abaixo e descubra o método simples para restaurar seu intestino sem remédios caros ou dietas extremas.
        </motion.p>

        {/* VSL Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 20px 60px -12px hsla(150, 25%, 15%, 0.2)" }}
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster={heroThumbnail}
            className="w-full aspect-video object-cover"
          >
            <source src="/videos/vsl_digestao169.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col items-center gap-3"
        >
          <button className="btn-cta text-xl animate-pulse-glow rounded-2xl">
            QUERO ACESSAR O MÉTODO AGORA
          </button>
          <p className="text-sm text-muted-foreground">Assista até o final para entender.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
