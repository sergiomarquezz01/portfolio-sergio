"use client";
import styles from "./FooterMetrics.module.css";

export default function FooterMetrics() {
  return (
    <footer className={styles.footer}>
      <div className={styles.statusGroup}>
        <span className={styles.greenDot} />
        <span>System Operational (Vercel Edge Network)</span>
      </div>

      <div className={styles.metrics}>
        <span className={styles.metricBadge}>⚡ Next.js 16 (App Router)</span>
        <span className={styles.metricBadge}>🎯 Lighthouse: 100/100</span>
        <span className={styles.metricBadge}>⏱️ Latencia: ~12ms</span>
      </div>
    </footer>
  );
}