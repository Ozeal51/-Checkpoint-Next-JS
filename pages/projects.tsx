import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import styles from "@/styles/Page.module.css";

type ProjectsPageProps = {
  generatedAt: string;
};

export const getServerSideProps: GetServerSideProps<ProjectsPageProps> = async () => {
  // Server-side rendering requirement: generate a server timestamp per request.
  const generatedAt = new Date().toISOString();

  return {
    props: {
      generatedAt,
    },
  };
};

export default function ProjectsPage({
  generatedAt,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout
      title="Projects | Software Developer Portfolio"
      description="Portfolio projects built with modern software technologies."
    >
      <section className={styles.section}>
        <h1 className={styles.heading}>Projects</h1>
        <p className={styles.lead}>
          Showing 4 selected projects. Rendered on the server at: {generatedAt}
        </p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
