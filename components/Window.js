"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useDragControls } from "framer-motion"
import { X, Minus, Square, Maximize2 } from 'lucide-react'
import styles from "./Window.module.css"
import ChromeBrowser from "./ChromeBrowser"
import ProjectsFolder from "./ProjectsFolder"
import PersonalInfoFolder from "./PersonalInfoFolder"
import ContactFolder from "./ContactFolder"
import SkillsFolder from "./SkillsFolder"
import EducationFolder from "./EducationFolder"
import AdditionalInfoFolder from "./AdditionalInfoFolder"
import GithubBrowser from "./GithubBrowser"
import LinkedinBrowser from "./LinkedinBrowser"
import InstagramBrowser from "./InstagramBrowser"
import MailBrowser from "./MailBrowser"
import FileExplorer from "./FileExplorer"
import ResumePdfViewer from "./ResumePdfViewer"

function getInitialWindowPosition(appId) {
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1000
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 768 : false

  let width = 800
  let height = 500
  let left = 100
  let top = 50

  if (isMobile) {
    width = windowWidth * 0.95
    height = windowHeight * 0.7
    left = windowWidth * 0.025
    top = windowHeight * 0.1

    const maxHeight = typeof window !== "undefined" ? window.innerHeight - 50 : 800
    height = Math.min(height, maxHeight)
  } else {
    if (appId === "chrome" || appId === "github" || appId === "linkedin" || appId === "instagram") {
      width = Math.min(1000, windowWidth * 0.8)
      height = Math.min(600, windowHeight * 0.7)

      left = Math.max(0, (windowWidth - width) / 2)
      top = Math.max(0, (windowHeight - height - 40) / 3)
    }

    if (
      ["projects", "personal-info", "contact", "skills", "education", "additional-info"].includes(
        appId,
      )
    ) {
      width = Math.min(900, windowWidth * 0.75)
      height = Math.min(700, windowHeight * 0.8)

      left = Math.max(0, (windowWidth - width) / 2)
      top = Math.max(0, (windowHeight - height - 40) / 3)
    }

    if (appId === "file-explorer") {
      width = Math.min(900, windowWidth * 0.75)
      height = Math.min(700, windowHeight * 0.8)

      left = Math.max(0, (windowWidth - width) / 2)
      top = Math.max(0, (windowHeight - height - 40) / 3)
    }

    if (appId === "mail") {
      width = Math.min(800, windowWidth * 0.7)
      height = Math.min(500, windowHeight * 0.6)

      left = Math.max(0, (windowWidth - width) / 2)
      top = Math.max(0, (windowHeight - height - 40) / 3)
    }

    if (appId === "resume-pdf") {
      width = Math.min(900, windowWidth * 0.8)
      height = Math.min(800, windowHeight * 0.85)

      left = Math.max(0, (windowWidth - width) / 2)
      top = Math.max(0, (windowHeight - height - 40) / 3)
    }
  }

  left = Math.min(left, windowWidth - width)
  top = Math.min(top, windowHeight - height - 40)

  return { width, height, left, top }
}

export default function Window({ app, onClose, isActive, onFocus, zIndex, onMinimize }) {
  const initialPosition = getInitialWindowPosition(app.id)
  const [windowSize, setWindowSize] = useState({
    width: initialPosition.width,
    height: initialPosition.height,
  })
  const [windowPosition, setWindowPosition] = useState({
    left: initialPosition.left,
    top: initialPosition.top,
  })
  const [preMaximizedState, setPreMaximizedState] = useState(null)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const dragControls = useDragControls()
  const windowRef = useRef(null)

  useEffect(() => {
    if (isActive && windowRef.current) {
      windowRef.current.focus()
    }
  }, [isActive])

  useEffect(() => {
    if (isActive && isMinimized) {
      setIsMinimized(false)
    }
  }, [isActive])

  const toggleMaximize = (e) => {
    e.stopPropagation()

    if (!isMaximized) {
      setPreMaximizedState({
        position: { ...windowPosition },
        size: { ...windowSize },
      })
      setIsMaximized(true)
    } else {
      if (preMaximizedState) {
        setWindowPosition(preMaximizedState.position)
        setWindowSize(preMaximizedState.size)
      }
      setIsMaximized(false)
    }
  }

  const handleMinimize = (e) => {
    e.stopPropagation()
    setIsMinimized(true)
    if (onMinimize) {
      onMinimize(app.id)
    }
  }

  const handleWindowClick = (e) => {
    e.stopPropagation()
    onFocus()
  }

  const renderAppContent = () => {
    switch (app.id) {
      case "chrome":
        return <ChromeBrowser />
      case "projects":
        return <ProjectsFolder />
      case "personal-info":
        return <PersonalInfoFolder />
      case "contact":
        return <ContactFolder />
      case "skills":
        return <SkillsFolder />
      case "education":
        return <EducationFolder />
      case "additional-info":
        return <AdditionalInfoFolder />
      case "github":
        return <GithubBrowser />
      case "linkedin":
        return <LinkedinBrowser />
      case "instagram":
        return <InstagramBrowser />
      case "mail":
        return <MailBrowser />
      case "file-explorer":
        return <FileExplorer openWindow={app.openWindow} />
      case "resume-pdf":
        return <ResumePdfViewer />
      case "search":
        return (
          <div className={styles.emptyContent}>
            <h2>Windows Search</h2>
            <p>Search functionality coming soon...</p>
          </div>
        )
      default:
        return (
          <div className={styles.emptyContent}>
            <h2>Welcome to {app.name}</h2>
            <p>This is a placeholder content for {app.name} application.</p>
          </div>
        )
    }
  }

  if (isMinimized) return null

  const windowStyles = {
    zIndex: isActive ? zIndex + 10 : zIndex,
    ...(isMaximized
      ? {
          top: 0,
          left: 0,
          width: "100%",
          height: "calc(100% - 40px)",
          maxHeight: "calc(100dvh - 40px)",
          borderRadius: 0,
        }
      : {
          width: `${windowSize.width}px`,
          height: `${windowSize.height}px`,
          left: windowPosition.left,
          top: windowPosition.top,
        }),
  }

  return (
    <motion.div
      ref={windowRef}
      className={`${styles.window} ${isMaximized ? styles.maximized : ""} ${isActive ? styles.active : ""} ${
        app.id === "chrome" ||
        app.id === "github" ||
        app.id === "linkedin" ||
        app.id === "instagram" ||
        app.id === "mail"
          ? styles.browserWindow
          : ""
      }`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      drag={!isMaximized}
      dragControls={dragControls}
      dragMomentum={false}
      dragListener={false}
      dragElastic={0}
      style={windowStyles}
      onClick={handleWindowClick}
      tabIndex={0}
      onDragEnd={(event, info) => {
        if (!isMaximized) {
          const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1000
          const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800

          let newLeft = windowPosition.left + info.offset.x
          let newTop = windowPosition.top + info.offset.y

          newLeft = Math.max(0, Math.min(newLeft, windowWidth - windowSize.width))
          newTop = Math.max(0, Math.min(newTop, windowHeight - windowSize.height - 40))

          setWindowPosition({ left: newLeft, top: newTop })
        }
      }}
    >
      <div
        className={styles.titleBar}
        onPointerDown={(e) => {
          e.stopPropagation()
          onFocus()
          if (!isMaximized) {
            dragControls.start(e)
          }
        }}
        onDoubleClick={toggleMaximize}
      >
        <div className={styles.titleBarLeft}>
          <div className={styles.appIcon}>{app.icon}</div>
          <div className={styles.title}>{app.name}</div>
        </div>
        <div className={styles.titleBarControls}>
          <motion.div
            className={styles.control}
            onClick={handleMinimize}
            whileHover={{ backgroundColor: "#e5e5e5" }}
            initial={false}
          >
            <Minus size={16} />
          </motion.div>
          <motion.div
            className={styles.control}
            onClick={toggleMaximize}
            whileHover={{ backgroundColor: "#e5e5e5" }}
            initial={false}
          >
            {isMaximized ? <Square size={14} /> : <Maximize2 size={14} />}
          </motion.div>
          <motion.div
            className={`${styles.control} ${styles.close}`}
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            whileHover={{ backgroundColor: "#e81123" }}
            initial={false}
          >
            <X size={16} />
          </motion.div>
        </div>
      </div>
      <div
        className={styles.windowContent}
        style={{
          height: "calc(100% - 32px)",
          overflow: "hidden",
        }}
      >
        {renderAppContent()}
      </div>
    </motion.div>
  )
}
