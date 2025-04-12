// src/app/projects/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getProjects, Project } from "@/lib/projects";

// Define a interface para os parâmetros da rota
interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Busca a lista de projetos usando a função que você definiu em lib/projects.ts
  const projects: Project[] = getProjects();
  // Encontra o projeto cujo slug corresponde ao parâmetro da URL
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className="p-4 text-center">Project not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">{project.title}</h1>
      <div className="grid grid-cols-1 gap-4">
        {/* Aqui você pode exibir a miniatura principal */}
        <Image
          src={project.thumb}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover rounded-lg"
        />
        {/* Caso tenha mais imagens ou uma galeria, expanda aqui */}
      </div>
      <Link href="/projects">
        <a className="mt-4 inline-block text-blue-600 hover:underline">Back to Projects</a>
      </Link>
    </div>
  );
}
