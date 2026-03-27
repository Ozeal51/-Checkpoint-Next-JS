import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import styles from "@/styles/Home.module.css";

const PrimaryAction = styled(Link)`
  display: inline-block;
  padding: 0.7rem 1.1rem;
  border-radius: 10px;
  background: #1d4ed8;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #1e40af;
  }
`;

export default function ProfileHeader() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/profile.svg"
        alt="Profile picture of a software developer"
        width={180}
        height={180}
        className={styles.avatar}
        priority
      />
      <div>
        <h1 className={styles.title}>Hi, I&apos;m a Software Developer</h1>
        <p className={styles.subtitle}>
          I build modern web applications with excellent user experiences,
          scalable architecture, and clean code.
        </p>
        <div className={styles.actions}>
          <PrimaryAction href="/projects">View Projects</PrimaryAction>
          <Link href="/contact" className={styles.secondaryAction}>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
