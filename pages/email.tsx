import Layout from "@/components/Layout";
import styles from "@/styles/Page.module.css";

export default function EmailPage() {
  return (
    <Layout
      title="Email | Software Developer Portfolio"
      description="Email contact details for the software developer portfolio."
    >
      <section className={styles.section}>
        <h1 className={styles.heading}>Email</h1>
        <p className={styles.lead}>
          For project inquiries, partnership requests, or technical discussions,
          send a message to:
        </p>
        <p className={styles.lead}>
          <a href="mailto:dev.portfolio@example.com">dev.portfolio@example.com</a>
        </p>
      </section>
    </Layout>
  );
}
