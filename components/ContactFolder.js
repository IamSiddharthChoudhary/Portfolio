"use client"
import styles from "./FolderContent.module.css"
import { Mail, Phone, Globe } from 'lucide-react'

export default function ContactFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Contact Information</h1>

      <div className={styles.contactCard}>
        <div className={styles.contactItem}>
          <Mail size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Email</span>
            <a href="mailto:csiddharth380@gmail.com" className={styles.contactValue}>
              csiddharth380@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Phone size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Phone</span>
            <a href="tel:+918920938135" className={styles.contactValue}>
              +91 8920938135
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Globe size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/siddharth-choudhary-a5a0a8229/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Globe size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>GitHub</span>
            <a
              href="https://github.com/IamSiddharthChoudhary"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
