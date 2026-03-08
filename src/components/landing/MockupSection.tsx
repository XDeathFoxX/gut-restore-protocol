import { motion } from "framer-motion";
import productMockup from "@/assets/product-mockup.png";

const MockupSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container text-center">
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={productMockup}
          alt="Área de membros com aulas em vídeo e materiais em PDF"
          className="max-w-3xl w-full mx-auto"
        />
      </div>
    </section>
  );
};

export default MockupSection;
