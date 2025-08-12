"use client"
import styles from "./FolderContent.module.css"

export default function EducationFolder() {
return (
  <div className={styles.folderContainer}>
    <h1 className={styles.folderTitle}>Education</h1>

    <div className={styles.educationItem}>
      <div className={styles.educationHeader}>
        <h2>B.Tech in Information Technology</h2>
        <span className={styles.educationYear}>Aug 2021 – May 2025</span>
      </div>
      <p className={styles.educationInstitution}>Dr. Akhilesh Das Gupta Institute of Professional Studies, GGSIPU</p>
      <p className={styles.educationLocation}>Delhi, India</p>
      <p className={styles.educationGrade}>CGPA: 8.1</p>
    </div>

    <div className={styles.educationItem}>
      <h2>12th Grade</h2>
      <p className={styles.educationInstitution}>Sarvodaya Vidyalaya</p>
      <span className={styles.educationYear}>2021</span>
      <p className={styles.educationGrade}>Percentage: 81.6%</p>
    </div>

    <div className={styles.educationItem}>
      <h2>10th Grade</h2>
      <p className={styles.educationInstitution}>Sant Nirankari Public School</p>
      <span className={styles.educationYear}>2019</span>
      <p className={styles.educationGrade}>Percentage: 83.2%</p>
    </div>
  </div>
)
}
