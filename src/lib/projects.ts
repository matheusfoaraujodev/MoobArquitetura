export type Project = {
    title: string;
    thumb: string;
    slug: string;
  };
  
  export const getProjects = (): Project[] => [
    {
      title: "Apartamento Lumiar",
      thumb: "/projetos/lumiar/thumb.jpg",
      slug: "lumiar",
    },
    {
      title: "Casa do Lago",
      thumb: "/projetos/lago/thumb.jpg",
      slug: "lago",
    },
    // ...adicione os 30 projetos aqui
  ];
  