"use client"
import styles from "./FolderContent.module.css"

export default function PersonalInfoFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Personal Information</h1>

      <div className={styles.infoCard}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Name:</span>
          <span className={styles.infoValue}>Siddharth Choudhary</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Location:</span>
          <span className={styles.infoValue}>Delhi, India</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Availability:</span>
          <span className={styles.infoValue}>Available for opportunities</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Education:</span>
          <span className={styles.infoValue}>B.Tech in Information Technology (2021-2025)</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>University:</span>
          <span className={styles.infoValue}>Dr. Akhilesh Das Gupta Institute of Professional Studies, GGSIPU</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>CGPA:</span>
          <span className={styles.infoValue}>8.1</span>
        </div>
      </div>
    </div>
  )
}
