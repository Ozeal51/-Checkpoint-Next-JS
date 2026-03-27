import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    summary:
      "Built an analytics dashboard for online stores with KPI tracking and order monitoring.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/images/projects/project-1.svg",
  },
  {
    id: 2,
    title: "Task Management App",
    summary:
      "Developed a productivity app with drag-and-drop kanban boards and team collaboration features.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/images/projects/project-2.svg",
  },
  {
    id: 3,
    title: "Real-Time Chat Platform",
    summary:
      "Implemented a secure chat system with presence indicators and instant message synchronization.",
    tech: ["Next.js", "Socket.IO", "Redis"],
    image: "/images/projects/project-3.svg",
  },
  {
    id: 4,
    title: "Portfolio CMS",
    summary:
      "Created a headless CMS-backed portfolio manager for publishing projects and blog entries.",
    tech: ["Next.js", "GraphQL", "Styled Components"],
    image: "/images/projects/project-4.svg",
  },
];
