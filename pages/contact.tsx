import Layout from "@/components/Layout";
import styles from "@/styles/Page.module.css";

export default function ContactPage() {
  return (
    <Layout
      title="Contact | Software Developer Portfolio"
      description="Contact page for portfolio communication and collaboration opportunities."
    >
      <section className={styles.section}>
        <h1 className={styles.heading}>Contact</h1>
        <p className={styles.lead}>
          I&apos;m available for freelance, full-time, and collaboration opportunities.
        </p>
        <ul className={styles.list}>
          <li>Email: dev.portfolio@example.com</li>
          <li>Phone: +1 (555) 010-2435</li>
          <li>Location: Lagos, Nigeria</li>
        </ul>
      </section>
    </Layout>
  );
}
