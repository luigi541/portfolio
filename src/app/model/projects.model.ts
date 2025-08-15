export interface ProjectsMeta {
  tech: string[];
  github: string;
  live?: string;
}

export interface project extends ProjectsMeta {
  title: string;
  description: string;
}
