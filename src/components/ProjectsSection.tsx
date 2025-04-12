import { getProjects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";

const projetos = getProjects();

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="px-6 py-16 sm:px-8 md:px-20 lg:px-32 bg-card text-card-foreground"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4">Projetos</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Confira alguns ambientes que traduzem personalidade, funcionalidade e
          estética em cada detalhe.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p) => (
            <Link
              href={`/projetos/${p.slug}`}
              key={p.slug}
              className="group relative aspect-video h-[210px] overflow-hidden rounded-2xl"
            >
              <Image
                src={p.thumb}
                alt={p.title}
                fill
                className="object-cover object-center transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 p-4 flex items-end">
                <h3 className="text-white text-xl">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
