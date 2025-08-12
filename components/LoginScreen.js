"use client"

import { useState } from "react"
import { User, Wifi, Monitor, Power, ArrowRight } from 'lucide-react'
import styles from "./LoginScreen.module.css"

export default function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setFadeOut(true)

      localStorage.setItem("signin", "true")

      setTimeout(() => {
        onLogin()
      }, 500)
    }, 3000)
  }

  return (
    <div className={`${styles.loginScreen} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.centerContent}>
        <div className={styles.centerAvatar}>
          <User size={60} color="white" />
        </div>
        <div className={styles.centerName}>siddharth</div>

        <form onSubmit={handleSubmit} className={styles.passwordForm}>
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? <div className={styles.loader}></div> : <ArrowRight size={18} />}
          </button>
        </form>
      </div>

      <div className={styles.userList}>
        <div className={`${styles.userItem} ${styles.active}`}>
          <div className={styles.userAvatar}>
            <User size={20} color="white" />
          </div>
          <div className={styles.userName}>siddharth</div>
        </div>
      </div>

      <div className={styles.systemIcons}>
        <div className={styles.systemIcon}>
          <Monitor size={18} color="white" />
        </div>
        <div className={styles.systemIcon}>
          <Wifi size={18} color="white" />
        </div>
        <div className={styles.systemIcon}>
          <Power size={18} color="white" />
        </div>
      </div>
    </div>
  )
}
