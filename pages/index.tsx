import Layout from "@/components/Layout";
import ProfileHeader from "@/components/ProfileHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import homeStyles from "@/styles/Home.module.css";
import pageStyles from "@/styles/Page.module.css";

export default function HomePage() {
  return (
    <Layout
      title="Home | Software Developer Portfolio"
      description="Portfolio homepage showcasing software development skills and projects."
    >
      <ProfileHeader />

      <section className={homeStyles.section}>
        <h2>Core Skills</h2>
        <ul className={homeStyles.skillList}>
          <li>Frontend development with Next.js, React, and TypeScript.</li>
          <li>Backend API design, authentication, and database integration.</li>
          <li>Responsive UI architecture with CSS Modules and design systems.</li>
          <li>Deployment workflows with Vercel and CI/CD best practices.</li>
        </ul>
      </section>

      <section className={homeStyles.section}>
        <h2>Featured Projects</h2>
        <div className={pageStyles.grid}>
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
