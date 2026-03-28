import Layout from "@/components/Layout";
import styles from "@/styles/Page.module.css";

export default function AboutPage() {
  return (
    <Layout
      title="About | Software Developer Portfolio"
      description="About page describing experience and software development focus."
    >
      <section className={styles.section}>
        <h1 className={styles.heading}>About Me</h1>
        <p className={styles.lead}>
          My Name is Hosea, I'm a software developer focused on building reliable, scalable, and
          user-friendly applications. I enjoy turning product ideas into
          maintainable systems and polished digital experiences.
        </p>
        <div className={styles.grid}>
          <article className={styles.item}>
            <h3>Experience</h3>
            <p>Web application architecture, API integration, and performance optimization.</p>
          </article>
          <article className={styles.item}>
            <h3>Tech Stack</h3>
            <p>Next.js, Javascript, React, TypeScript, Node.js, NoSQL databases.</p>
          </article>
          <article className={styles.item}>
            <h3>Workflow</h3>
            <p>Clean coding standards,Git and Github, code reviews, testing, and iterative delivery.</p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
