"use client";

import { useState, useEffect, useRef } from "react";
import Desktop from "@/components/Desktop";
import Taskbar from "@/components/Taskbar";
import StartMenu from "@/components/StartMenu";
import WindowsLogo from "@/components/WindowsLogo";
import LoginScreen from "@/components/LoginScreen";
import Loader from "@/components/Loader";
import styles from "./page.module.css";
import {
  trackLogin,
  trackLogout,
  trackAppLaunch,
  initAnalytics,
} from "@/lib/analytics";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderFading, setLoaderFading] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    initAnalytics();

    const isSignedIn = localStorage.getItem("signin") === "true";

    setIsLoggedIn(isSignedIn);

    const timer = setTimeout(() => {
      setLoaderFading(true);

      setTimeout(() => {
        setLoaderVisible(false);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    trackLogin();
    localStorage.setItem("signin", "true");
  };

  const handleLogout = () => {
    trackLogout();
    localStorage.removeItem("signin");
    setIsLoggedIn(false);
  };

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  const openWindow = (app) => {
    trackAppLaunch(app.id);

    if (minimizedWindows.includes(app.id)) {
      setMinimizedWindows(minimizedWindows.filter((id) => id !== app.id));
      setActiveWindow(app.id);
      return;
    }

    if (!openWindows.find((window) => window.id === app.id)) {
      setOpenWindows([...openWindows, app]);
      setActiveWindow(app.id);
    } else {
      focusWindow(app.id);
    }
  };

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter((window) => window.id !== id));
    setMinimizedWindows(minimizedWindows.filter((windowId) => windowId !== id));

    if (activeWindow === id) {
      const remainingWindows = openWindows.filter(
        (window) => window.id !== id && !minimizedWindows.includes(window.id)
      );
      setActiveWindow(
        remainingWindows.length > 0
          ? remainingWindows[remainingWindows.length - 1].id
          : null
      );
    }
  };

  const focusWindow = (id) => {
    if (minimizedWindows.includes(id)) {
      setMinimizedWindows(
        minimizedWindows.filter((windowId) => windowId !== id)
      );
    }
    setActiveWindow(id);
  };

  const minimizeWindow = (id) => {
    if (!minimizedWindows.includes(id)) {
      setMinimizedWindows([...minimizedWindows, id]);
    }

    if (activeWindow === id) {
      const remainingWindows = openWindows.filter(
        (window) => window.id !== id && !minimizedWindows.includes(window.id)
      );
      setActiveWindow(
        remainingWindows.length > 0
          ? remainingWindows[remainingWindows.length - 1].id
          : null
      );
    }
  };

  const handleDesktopClick = () => {
    if (startMenuOpen) {
      setStartMenuOpen(false);
    }
  };

  const renderMainContent = () => (
    <main
      ref={contentRef}
      className={styles.main}
      onClick={handleDesktopClick}
      style={{
        filter: loaderVisible ? "blur(5px)" : "none",
        transition: "filter 0.5s ease-out",
      }}
    >
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <>
          {/* <WindowsLogo /> */}
          <Desktop
            openWindow={openWindow}
            openWindows={openWindows}
            closeWindow={closeWindow}
            activeWindow={activeWindow}
            setActiveWindow={setActiveWindow}
            minimizeWindow={minimizeWindow}
            minimizedWindows={minimizedWindows}
          />
          {startMenuOpen && (
            <StartMenu
              openWindow={(app) => {
                openWindow(app);
                setStartMenuOpen(false);
              }}
              onLogout={handleLogout}
            />
          )}
          <Taskbar
            toggleStartMenu={toggleStartMenu}
            startMenuOpen={startMenuOpen}
            openWindows={openWindows}
            openWindow={openWindow}
            focusWindow={focusWindow}
            minimizedWindows={minimizedWindows}
          />
        </>
      )}
    </main>
  );

  return (
    <>
      {renderMainContent()}

      {loaderVisible && (
        <div
          className={`${styles.loaderOverlay} ${
            loaderFading ? styles.fadeOut : ""
          }`}
        >
          <Loader />
        </div>
      )}
    </>
  );
}
