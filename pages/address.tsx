import Layout from "@/components/Layout";
import styles from "@/styles/Page.module.css";

export default function AddressPage() {
  return (
    <Layout
      title="Address | Software Developer Portfolio"
      description="Address information for the software developer portfolio."
    >
      <section className={styles.section}>
        <h1 className={styles.heading}>Address</h1>
        <p className={styles.lead}>Primary work location and mailing details.</p>
        <div className={styles.grid}>
          <article className={styles.item}>
            <h3>City</h3>
            <p>Lagos</p>
          </article>
          <article className={styles.item}>
            <h3>Country</h3>
            <p>Nigeria</p>
          </article>
          <article className={styles.item}>
            <h3>Timezone</h3>
            <p>West Africa Time (WAT)</p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
