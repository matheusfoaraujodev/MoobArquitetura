export default function AboutSection() {
    return (
      <section id="sobre" className="px-6 py-16 sm:px-8 md:px-20 lg:px-32 bg-background text-foreground">
        <div className="max-w-3xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-8">
          <img
            src="/arquiteta.jpg"
            alt="Foto da arquiteta"
            className="w-40 h-40 rounded-full object-cover shadow-lg md:w-56 md:h-56"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Sobre a Arquiteta</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Com uma paixão por transformar espaços e mais de 10 anos de experiência, nossa arquiteta é especializada em
              interiores residenciais que refletem identidade, conforto e funcionalidade. Cada projeto é único, com
              acompanhamento próximo e foco em soluções inteligentes, acolhedoras e esteticamente marcantes.
            </p>
          </div>
        </div>
      </section>
    );
  }
  