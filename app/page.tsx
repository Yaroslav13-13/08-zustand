import css from "./page.module.css";
import Link from "next/link";
import { FaBolt, FaLock, FaFolderOpen } from "react-icons/fa";

export default function Home() {
  return (
    <div className={css.app}>
      <main className={css.main}>
        {/* Hero Section */}
        <section className={css.hero}>
          <h1 className={css.title}>Boost Your Productivity with NoteHub</h1>
          <p className={css.subtitle}>
            The smartest way to create, organize and manage your notes — simple,
            fast and modern.
          </p>
          <div className={css.heroActions}>
            <Link href="/notes/filter/All" className={css.ctaButton}>
              Get Started
            </Link>
            <Link href="/about" className={css.secondaryButton}>
              Learn More
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className={css.features}>
          <div className={css.featureCard}>
            <FaBolt className={css.icon} />
            <h3>Lightning Fast</h3>
            <p>Experience instant note creation and browsing.</p>
          </div>
          <div className={css.featureCard}>
            <FaLock className={css.icon} />
            <h3>Secure</h3>
            <p>Your notes are encrypted and private by default.</p>
          </div>
          <div className={css.featureCard}>
            <FaFolderOpen className={css.icon} />
            <h3>Organized</h3>
            <p>Keep everything structured with smart categories.</p>
          </div>
        </section>

        {/* Why Us */}
        <section className={css.whyUs}>
          <h2>Why Choose NoteHub?</h2>
          <p>
            Unlike traditional note apps, NoteHub combines speed, design and
            security into one seamless experience.
          </p>
        </section>
      </main>
    </div>
  );
}
