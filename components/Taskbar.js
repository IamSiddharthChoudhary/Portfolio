"use client"
import styles from "./Taskbar.module.css"
import { Search, Monitor, Mail, Code, Github, Linkedin, User, Phone, Briefcase, GraduationCap, Award, Info, Instagram, Folder } from 'lucide-react'
import { useState, useEffect } from "react"

export default function Taskbar({
  toggleStartMenu,
  startMenuOpen,
  openWindows,
  openWindow,
  focusWindow,
  minimizedWindows,
}) {
  const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  const currentDate = new Date().toLocaleDateString()
  const [showTooltip, setShowTooltip] = useState(null)
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }

    checkScreenSize()

    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleOpenApp = (appId) => {
    try {
      const allApps = [
        {
          id: "projects",
          name: "Projects",
          icon: <Code size={24} color="#0078d7" />,
        },
        {
          id: "github",
          name: "GitHub",
          icon: <Github size={24} color="#333" />,
        },
        {
          id: "linkedin",
          name: "LinkedIn",
          icon: <Linkedin size={24} color="#0A66C2" />,
        },
        {
          id: "chrome",
          name: "Chrome",
          icon: (
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="20" fill="#4285F4"/>
              <circle cx="24" cy="24" r="7" fill="white"/>
              <path d="M24 4C35.05 4 44 12.95 44 24C44 35.05 35.05 44 24 44C12.95 44 4 35.05 4 24C4 12.95 12.95 4 24 4ZM24 17C27.31 17 30 19.69 30 23C30 26.31 27.31 29 24 29C20.69 29 18 26.31 18 23C18 19.69 20.69 17 24 17Z" fill="#4285F4"/>
              <path d="M24 4C30.63 4 36.55 7.36 40.24 12.76L31.5 23C29.57 19.42 26.04 17 24 17C20.69 17 18 19.69 18 23L7.76 12.76C11.45 7.36 17.37 4 24 4Z" fill="#EA4335"/>
              <path d="M7.76 35.24C4.64 31.45 4.64 16.55 7.76 12.76L18 23C18 26.31 20.69 29 24 29L31.5 23L40.24 35.24C36.55 40.64 30.63 44 24 44C17.37 44 11.45 40.64 7.76 35.24Z" fill="#FBBC05"/>
              <path d="M40.24 12.76C43.36 16.55 43.36 31.45 40.24 35.24L30 23C30 19.69 27.31 17 24 17L31.5 23L40.24 12.76Z" fill="#34A853"/>
            </svg>
          ),
        },
        {
          id: "personal-info",
          name: "Personal Info",
          icon: <User size={24} color="#0078d7" />,
        },
        {
          id: "contact",
          name: "Contact",
          icon: <Phone size={24} color="#0078d7" />,
        },
        {
          id: "skills",
          name: "Skills",
          icon: <Briefcase size={24} color="#0078d7" />,
        },
        {
          id: "education",
          name: "Education",
          icon: <GraduationCap size={24} color="#0078d7" />,
        },
        {
          id: "certifications",
          name: "Certifications",
          icon: <Award size={24} color="#0078d7" />,
        },
        {
          id: "additional-info",
          name: "Additional Info",
          icon: <Info size={24} color="#0078d7" />,
        },
        {
          id: "instagram",
          name: "Instagram",
          icon: <Instagram size={24} color="#E4405F" />,
        },
        {
          id: "file-explorer",
          name: "File Explorer",
          icon: <Folder size={24} color="#0078d7" />,
        },
        {
          id: "mail",
          name: "Mail",
          icon: <Mail size={24} color="#0078d7" />,
        },
        {
          id: "search",
          name: "Search",
          icon: <Search size={24} color="#0078d7" />,
        },
      ]

      const app = allApps.find((app) => app.id === appId)
      if (app) {
        const existingWindow = openWindows.find((w) => w.id === app.id)
        if (existingWindow) {
          focusWindow(app.id)
        } else {
          openWindow(app)
        }
      } else {
        console.warn(`App with id "${appId}" not found`)
      }
    } catch (error) {
      console.error(`Error opening app "${appId}":`, error)
    }
  }

  const isAppMinimized = (appId) => {
    return minimizedWindows.includes(appId)
  }

  return (
    <div className={styles.taskbar} onClick={(e) => e.stopPropagation()}>
      <div className={styles.left}>
        <div
          className={`${styles.startButton} ${startMenuOpen ? styles.active : ""}`}
          onClick={toggleStartMenu}
          onMouseEnter={() => {
            setShowTooltip("Start")
            setHoveredIcon("start")
          }}
          onMouseLeave={() => {
            setShowTooltip(null)
            setHoveredIcon(null)
          }}
          style={{
            backgroundColor:
              hoveredIcon === "start" ? "rgba(255, 255, 255, 0.1)" : startMenuOpen ? "#0078d7" : "transparent",
          }}
        >
          <div className={styles.windowsLogo}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                fill="#fff"
                d="M0,0L7.5,1V7.5H0V0z M8.5,1L16,0v7.5H8.5V1z M0,8.5H7.5V15L0,16V8.5z M8.5,8.5H16V16L8.5,15V8.5z"
              />
            </svg>
          </div>
          {showTooltip === "Start" && <div className={styles.tooltip}>Start</div>}
        </div>

        {!isSmallScreen && (
          <div
            className={styles.searchContainer}
            onMouseEnter={() => {
              setShowTooltip("Search")
              setHoveredIcon("search")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            onClick={() => {
              try {
                handleOpenApp("search")
              } catch (error) {
                console.warn("Search functionality not implemented yet")
              }
            }}
          >
            <Search size={14} className={styles.searchIcon} />
            <span className={styles.searchText}>Type here to search</span>
            {showTooltip === "Search" && <div className={styles.tooltip}>Search</div>}
          </div>
        )}

        <div className={styles.taskbarIcons}>
          <div
            className={`${styles.taskbarIcon} ${
              openWindows.some((w) => w.id === "file-explorer") ? styles.activeApp : ""
            } ${isAppMinimized("file-explorer") ? styles.minimizedApp : ""}`}
            onClick={() => handleOpenApp("file-explorer")}
            onMouseEnter={() => {
              setShowTooltip("File Explorer")
              setHoveredIcon("file-explorer")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "file-explorer" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
          >
            <Monitor size={20} color="#fff" />
            {showTooltip === "File Explorer" && <div className={styles.tooltip}>File Explorer</div>}
          </div>

          <div
            className={`${styles.taskbarIcon} ${
              openWindows.some((w) => w.id === "chrome") ? styles.activeApp : ""
            } ${isAppMinimized("chrome") ? styles.minimizedApp : ""}`}
            onClick={() => handleOpenApp("chrome")}
            onMouseEnter={() => {
              setShowTooltip("Chrome")
              setHoveredIcon("chrome")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "chrome" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="20" fill="#4285F4"/>
              <circle cx="24" cy="24" r="7" fill="white"/>
              <path d="M24 4C35.05 4 44 12.95 44 24C44 35.05 35.05 44 24 44C12.95 44 4 35.05 4 24C4 12.95 12.95 4 24 4ZM24 17C27.31 17 30 19.69 30 23C30 26.31 27.31 29 24 29C20.69 29 18 26.31 18 23C18 19.69 20.69 17 24 17Z" fill="#4285F4"/>
              <path d="M24 4C30.63 4 36.55 7.36 40.24 12.76L31.5 23C29.57 19.42 26.04 17 24 17C20.69 17 18 19.69 18 23L7.76 12.76C11.45 7.36 17.37 4 24 4Z" fill="#EA4335"/>
              <path d="M7.76 35.24C4.64 31.45 4.64 16.55 7.76 12.76L18 23C18 26.31 20.69 29 24 29L31.5 23L40.24 35.24C36.55 40.64 30.63 44 24 44C17.37 44 11.45 40.64 7.76 35.24Z" fill="#FBBC05"/>
              <path d="M40.24 12.76C43.36 16.55 43.36 31.45 40.24 35.24L30 23C30 19.69 27.31 17 24 17L31.5 23L40.24 12.76Z" fill="#34A853"/>
            </svg>
            {showTooltip === "Chrome" && <div className={styles.tooltip}>Chrome</div>}
          </div>

          <div
            className={`${styles.taskbarIcon} ${
              openWindows.some((w) => w.id === "mail") ? styles.activeApp : ""
            } ${isAppMinimized("mail") ? styles.minimizedApp : ""}`}
            onClick={() => handleOpenApp("mail")}
            onMouseEnter={() => {
              setShowTooltip("Mail")
              setHoveredIcon("mail")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "mail" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
          >
            <Mail size={20} color="#fff" />
            {showTooltip === "Mail" && <div className={styles.tooltip}>Mail</div>}
          </div>

          {openWindows.map((window) => {
            if (["file-explorer", "edge", "chrome", "mail"].includes(window.id)) return null

            return (
              <div
                key={window.id}
                className={`${styles.taskbarIcon} ${styles.activeApp} ${
                  isAppMinimized(window.id) ? styles.minimizedApp : ""
                }`}
                onClick={() => focusWindow(window.id)}
                onMouseEnter={() => {
                  setShowTooltip(window.name)
                  setHoveredIcon(window.id)
                }}
                onMouseLeave={() => {
                  setShowTooltip(null)
                  setHoveredIcon(null)
                }}
                style={{
                  backgroundColor: hoveredIcon === window.id ? "rgba(255, 255, 255, 0.1)" : "transparent",
                }}
              >
                <div className={styles.appIconSmall}>{window.icon}</div>
                {showTooltip === window.name && <div className={styles.tooltip}>{window.name}</div>}
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.systemTray}>
          <div
            className={styles.trayIcon}
            onMouseEnter={() => {
              setShowTooltip("Network")
              setHoveredIcon("network")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "network" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10V14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 7V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M16 10V14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {showTooltip === "Network" && <div className={styles.tooltip}>Network</div>}
          </div>

          <div
            className={styles.trayIcon}
            onMouseEnter={() => {
              setShowTooltip("Volume")
              setHoveredIcon("volume")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "volume" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10L12 4L18 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 14L12 20L18 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {showTooltip === "Volume" && <div className={styles.tooltip}>Volume</div>}
          </div>
        </div>

        <div
          className={styles.dateTime}
          onMouseEnter={() => {
            setShowTooltip("Date and time")
            setHoveredIcon("datetime")
          }}
          onMouseLeave={() => {
            setShowTooltip(null)
            setHoveredIcon(null)
          }}
          style={{
            backgroundColor: hoveredIcon === "datetime" ? "rgba(255, 255, 255, 0.1)" : "transparent",
          }}
        >
          <div className={styles.time}>{currentTime}</div>
          <div className={styles.date}>{currentDate}</div>
          {showTooltip === "Date and time" && <div className={styles.tooltip}>Date and time</div>}
        </div>

        <div
          className={styles.showDesktop}
          onMouseEnter={() => {
            setShowTooltip("Show desktop")
            setHoveredIcon("showdesktop")
          }}
          onMouseLeave={() => {
            setShowTooltip(null)
            setHoveredIcon(null)
          }}
          style={{
            backgroundColor: hoveredIcon === "showdesktop" ? "rgba(255, 255, 255, 0.1)" : "transparent",
          }}
        >
          {showTooltip === "Show desktop" && <div className={styles.tooltip}>Show desktop</div>}
        </div>
      </div>
    </div>
  )
}
