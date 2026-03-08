const FooterSection = () => {
  return (
    <footer className="bg-secondary py-8 px-4">
      <div className="section-container text-center">
        <div className="flex items-center justify-center gap-6 mb-4 text-sm text-secondary-foreground/70">
          <a href="#" className="hover:text-secondary-foreground transition-colors">Termos de uso</a>
          <a href="#" className="hover:text-secondary-foreground transition-colors">Privacidade</a>
        </div>
        <p className="text-secondary-foreground/50 text-xs">
          © {new Date().getFullYear()} Protocolo Digestivo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
