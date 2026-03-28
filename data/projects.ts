import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Project",
    summary:
      "Built akpu4all platform for online food odering with KPI tracking and order monitoring.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "public/images/projects/Akpu.jpeg",
  },
  {
    id: 2,
    title: "ZipLaps App",
    summary:
      "Developed a productivity app with drag-and-drop kanban boards and team collaboration features.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "public/images/projects/ZipLaps.png",
  },
  {
    id: 3,
    title: "Real-Time Super Market",
    summary:
      "Implemented a secure supper market site with presence indicators and instant synchronization.",
    tech: ["Next.js", "Socket.IO", "Redis"],
    image: "public/images/projects/deliz.jpeg",
  },
  {
    id: 4,
    title: "ZipLabs Incubator",
    summary:
      "Created a Ziplab incubation for ziptech manager for publishing projects and blog entries.",
    tech: ["Next.js", "GraphQL", "Styled Components"],
    image: "public/images/projects/ziptube.png",
  },
];
