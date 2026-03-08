import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import heroThumbnail from "@/assets/hero-thumbnail.jpg";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

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

        {/* VSL Player - Custom controls (play/pause only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden cursor-pointer group"
          style={{ boxShadow: "0 20px 60px -12px hsla(150, 25%, 15%, 0.2)" }}
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            playsInline
            preload="metadata"
            poster={heroThumbnail}
            className="w-full aspect-video object-cover"
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/videos/vsl_digestao169.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          {/* Overlay play/pause button */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            } ${!hasStarted ? "bg-foreground/30" : ""}`}
          >
            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110 ${!hasStarted ? "animate-pulse-glow" : ""}`}>
              {isPlaying ? (
                <Pause className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
              ) : (
                <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" />
              )}
            </div>
          </div>

          {!hasStarted && (
            <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              Assista antes que saia do ar
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col items-center gap-3"
        >
          <a href="https://pay.kirvano.com/368b993d-b387-4dc7-af77-a20558053be9" target="_blank" rel="noopener noreferrer" className="btn-cta text-xl animate-pulse-glow rounded-2xl inline-block">
            QUERO ACESSAR O PROTOCOLO AGORA
          </a>
          <p className="text-sm text-muted-foreground">Assista até o final para entender.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
