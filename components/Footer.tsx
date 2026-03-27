import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {currentYear} Software Developer Portfolio. Built with Next.js.</p>
    </footer>
  );
}
