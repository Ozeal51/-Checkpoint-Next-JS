import Image from "next/image";
import styles from "@/styles/ProjectCard.module.css";

export type Project = {
  id: number;
  title: string;
  summary: string;
  tech: string[];
  image: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Image
        src={project.image}
        alt={`${project.title} preview image`}
        width={640}
        height={360}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className={styles.techList}>
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
