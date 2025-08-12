"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw, Home, Star, Menu, X, Search, Globe } from 'lucide-react'
import styles from "./ChromeBrowser.module.css"

export default function ChromeBrowser() {
  const [url, setUrl] = useState("https://siddharth-choudhary.dev")
  const [inputUrl, setInputUrl] = useState("siddharth-choudhary.dev")
  const [isLoading, setIsLoading] = useState(true)
  const [history, setHistory] = useState(["https://siddharth-choudhary.dev"])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const browserContentRef = useRef(null)
  const mockContentRef = useRef(null)
  const browserRef = useRef(null)
  const iframeRef = useRef(null)

  useEffect(() => {
    if (url.startsWith("https://")) {
      setInputUrl(url.replace("https://", ""))
    } else if (url.startsWith("http://")) {
      setInputUrl(url.replace("http://", ""))
    } else {
      setInputUrl(url)
    }
  }, [url])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [url])

  const handleUrlSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    let newUrl = inputUrl

    if (!newUrl.startsWith("http://") && !newUrl.startsWith("https://")) {
      newUrl = "https://" + newUrl
    }

    setUrl(newUrl)

    if (newUrl !== history[historyIndex]) {
      const newHistory = history.slice(0, historyIndex + 1)
      newHistory.push(newUrl)
      setHistory(newHistory)
      setHistoryIndex(newHistory.length - 1)
    }
  }

  const goBack = () => {
    if (historyIndex > 0) {
      setIsLoading(true)
      setHistoryIndex(historyIndex - 1)
      setUrl(history[historyIndex - 1])
    }
  }

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      setIsLoading(true)
      setHistoryIndex(historyIndex + 1)
      setUrl(history[historyIndex + 1])
    }
  }

  const reload = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }

  const goHome = () => {
    setIsLoading(true)
    const homeUrl = "https://siddharth-choudhary.dev"
    setUrl(homeUrl)
    setInputUrl("siddharth-choudhary.dev")

    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(homeUrl)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  const handleEmailClick = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const emailUrl = "mailto:csiddharth380@gmail.com"
    setUrl(emailUrl)
    setInputUrl("mailto:csiddharth380@gmail.com")

    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(emailUrl)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)

    setTimeout(() => setIsLoading(false), 1000)
  }

  const getDomain = (url) => {
    try {
      if (url.startsWith("mailto:")) {
        return "Email"
      }
      const urlObj = new URL(url)
      return urlObj.hostname
    } catch (e) {
      return url
    }
  }

  const currentDomain = getDomain(url)

  const renderEmailInterface = () => {
  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        backgroundColor: "#f5f5f5",
        minHeight: "100%",
        overflow: "auto",
        padding: "2rem",
        height: "100%",
      }}
    >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📧</div>
            <h1 style={{ fontSize: "2rem", margin: "0 0 0.5rem 0" }}>Contact Siddharth</h1>
            <p style={{ margin: "0", opacity: "0.9" }}>Get in touch for opportunities and collaborations</p>
          </div>

          <div style={{ padding: "2rem" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", color: "#333" }}>
                To:
              </label>
              <input
                type="email"
                value="csiddharth380@gmail.com"
                readOnly
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #e9ecef",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  backgroundColor: "#f8f9fa",
                  color: "#666",
                }}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", color: "#333" }}>
                Subject:
              </label>
              <input
                type="text"
                placeholder="Let's discuss an opportunity..."
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #e9ecef",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                onBlur={(e) => (e.target.style.borderColor = "#e9ecef")}
              />
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", color: "#333" }}>
                Message:
              </label>
              <textarea
                placeholder="Hi Siddharth,&#10;&#10;I came across your portfolio and I'm impressed with your work in full-stack development and blockchain technologies. I'd love to discuss...&#10;&#10;Best regards,"
                rows="8"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #e9ecef",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                onBlur={(e) => (e.target.style.borderColor = "#e9ecef")}
              />
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => {
                  window.open("mailto:csiddharth380@gmail.com?subject=Let's discuss an opportunity&body=Hi Siddharth,%0D%0A%0D%0AI came across your portfolio and I'm impressed with your work in full-stack development and blockchain technologies. I'd love to discuss...%0D%0A%0D%0ABest regards;", "_blank")
                }}
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 2rem",
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)"
                  e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)"
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.3)"
                }}
              >
                📧 Send Email
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("csiddharth380@gmail.com")
                  alert("Email address copied to clipboard!")
                }}
                style={{
                  background: "white",
                  color: "#667eea",
                  border: "2px solid #667eea",
                  padding: "0.75rem 2rem",
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#667eea"
                  e.target.style.color = "white"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "white"
                  e.target.style.color = "#667eea"
                }}
              >
                📋 Copy Email
              </button>
            </div>

            <div
              style={{
                marginTop: "2rem",
                padding: "1.5rem",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#667eea", marginBottom: "1rem" }}>Other Ways to Connect</h3>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="https://www.linkedin.com/in/siddharth-choudhary-a5a0a8229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#0A66C2",
                    textDecoration: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "25px",
                    backgroundColor: "white",
                    border: "1px solid #e9ecef",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#0A66C2"
                    e.target.style.color = "white"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "white"
                    e.target.style.color = "#0A66C2"
                  }}
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://github.com/IamSiddharthChoudhary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#333",
                    textDecoration: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "25px",
                    backgroundColor: "white",
                    border: "1px solid #e9ecef",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#333"
                    e.target.style.color = "white"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "white"
                    e.target.style.color = "#333"
                  }}
                >
                  🔗 GitHub
                </a>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#28a745",
                    padding: "0.5rem 1rem",
                    borderRadius: "25px",
                    backgroundColor: "white",
                    border: "1px solid #e9ecef",
                  }}
                >
                  📱 +91 8920938135
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderMockWebsite = () => {
  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        backgroundColor: "#fff",
        minHeight: "100%",
        overflow: "auto",
        height: "100%",
      }}
    >
        <header
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "2rem 0",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <h1 style={{ fontSize: "3rem", margin: "0 0 1rem 0", fontWeight: "700" }}>Siddharth Choudhary</h1>
            <p style={{ fontSize: "1.2rem", margin: "0", opacity: "0.9" }}>
              Full Stack Developer | Blockchain Enthusiast | Web3 Builder
            </p>
            <div style={{ marginTop: "2rem" }}>
              <button
                onClick={handleEmailClick}
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.2)",
                  color: "white",
                  padding: "0.75rem 2rem",
                  textDecoration: "none",
                  borderRadius: "50px",
                  margin: "0 0.5rem",
                  border: "2px solid rgba(255,255,255,0.3)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.3)"
                  e.target.style.transform = "translateY(-2px)"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.2)"
                  e.target.style.transform = "translateY(0)"
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </header>

        <section style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem", color: "#2c3e50" }}>
              About Me
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
              <div>
                <h3 style={{ color: "#667eea", fontSize: "1.5rem", marginBottom: "1rem" }}>🚀 Full Stack Developer</h3>
                <p>
                  Passionate about building scalable web applications using modern technologies like React, Next.js,
                  Node.js, and Express.js. I love creating seamless user experiences and robust backend systems.
                </p>
              </div>
              <div>
                <h3 style={{ color: "#667eea", fontSize: "1.5rem", marginBottom: "1rem" }}>⛓️ Blockchain Expert</h3>
                <p>
                  Specialized in Web3 development with expertise in Solidity, Rust, Ethereum, and Solana. I build DeFi
                  applications, NFT marketplaces, and zero-knowledge proof systems.
                </p>
              </div>
              <div>
                <h3 style={{ color: "#667eea", fontSize: "1.5rem", marginBottom: "1rem" }}>🏆 Hackathon Winner</h3>
                <p>
                  Winner of Solana Hack-Day 2022 at IIIT Delhi. Former Web3 Head at E-Cell ADGITM, where I mentored
                  developers and led blockchain workshops.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "4rem 0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem", color: "#2c3e50" }}>
              Featured Projects
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "2rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "1px solid #e9ecef",
                }}
              >
                <h3 style={{ color: "#667eea", fontSize: "1.5rem", marginBottom: "1rem" }}>📈 Stock-Gen</h3>
                <p style={{ marginBottom: "1rem", color: "#666" }}>
                  A comprehensive stock market insights platform with real-time data processing, user authentication,
                  and optimized PostgreSQL queries.
                </p>
                <div style={{ marginBottom: "1rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#e3f2fd",
                      color: "#1976d2",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      margin: "0.25rem",
                    }}
                  >
                    Next.js
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#e8f5e8",
                      color: "#2e7d32",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      margin: "0.25rem",
                    }}
                  >
                    Node.js
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#fff3e0",
                      color: "#f57c00",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      margin: "0.25rem",
                    }}
                  >
                    Supabase
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "2rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "1px solid #e9ecef",
                }}
              >
                <h3 style={{ color: "#667eea", fontSize: "1.5rem", marginBottom: "1rem" }}>🔐 Taciturn</h3>
                <p style={{ marginBottom: "1rem", color: "#666" }}>
                  Privacy-first NFT marketplace using zero-knowledge proofs for anonymous trading. Built with Circom
                  circuits and zk-SNARKs.
                </p>
                <div style={{ marginBottom: "1rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#f3e5f5",
                      color: "#7b1fa2",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      margin: "0.25rem",
                    }}
                  >
                    Circom
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#e1f5fe",
                      color: "#0277bd",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      margin: "0.25rem",
                    }}
                  >
                    Solidity
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#fce4ec",
                      color: "#c2185b",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      margin: "0.25rem",
                    }}
                  >
                    IPFS
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "2rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "1px solid #e9ecef",
                }}
              >
                <h3 style={{ color: "#667eea", fontSize: "1.5rem", marginBottom: "1rem" }}>🏆 Organiser</h3>
                <p style={{ marginBottom: "1rem", color: "#666" }}>
                  Hackathon-winning decentralized organ donation platform on Solana. Connects donors with recipients
                  through blockchain technology.
                </p>
                <div style={{ marginBottom: "1rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#e8f5e8",
                      color: "#2e7d32",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      margin: "0.25rem",
                    }}
                  >
                    Rust
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#f3e5f5",
                      color: "#7b1fa2",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      margin: "0.25rem",
                    }}
                  >
                    Anchor
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#e3f2fd",
                      color: "#1976d2",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      margin: "0.25rem",
                    }}
                  >
                    Solana
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem", color: "#2c3e50" }}>
              Technical Skills
            </h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid #e9ecef",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)"
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.12)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    🎨
                  </div>
                  <h3 style={{ color: "#2c3e50", fontSize: "1.4rem", margin: "0", fontWeight: "600" }}>Frontend</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "TensorFlow.js"].map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #667eea20, #764ba220)",
                        color: "#667eea",
                        padding: "0.5rem 1rem",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        border: "1px solid #667eea30",
                        transition: "all 0.2s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #667eea, #764ba2)"
                        e.target.style.color = "white"
                        e.target.style.transform = "scale(1.05)"
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #667eea20, #764ba220)"
                        e.target.style.color = "#667eea"
                        e.target.style.transform = "scale(1)"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid #e9ecef",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)"
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.12)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    ⚙️
                  </div>
                  <h3 style={{ color: "#2c3e50", fontSize: "1.4rem", margin: "0", fontWeight: "600" }}>Backend</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["Node.js", "Express.js", "GraphQL", "REST APIs", "JWT Auth"].map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #28a74520, #20c99720)",
                        color: "#28a745",
                        padding: "0.5rem 1rem",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        border: "1px solid #28a74530",
                        transition: "all 0.2s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #28a745, #20c997)"
                        e.target.style.color = "white"
                        e.target.style.transform = "scale(1.05)"
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #28a74520, #20c99720)"
                        e.target.style.color = "#28a745"
                        e.target.style.transform = "scale(1)"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid #e9ecef",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)"
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.12)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    ⛓️
                  </div>
                  <h3 style={{ color: "#2c3e50", fontSize: "1.4rem", margin: "0", fontWeight: "600" }}>Blockchain</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["Solidity", "Rust", "Ethers.js", "Hardhat", "Anchor", "Circom"].map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #f39c1220, #e67e2220)",
                        color: "#f39c12",
                        padding: "0.5rem 1rem",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        border: "1px solid #f39c1230",
                        transition: "all 0.2s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #f39c12, #e67e22)"
                        e.target.style.color = "white"
                        e.target.style.transform = "scale(1.05)"
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #f39c1220, #e67e2220)"
                        e.target.style.color = "#f39c12"
                        e.target.style.transform = "scale(1)"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid #e9ecef",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)"
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.12)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    🗄️
                  </div>
                  <h3 style={{ color: "#2c3e50", fontSize: "1.4rem", margin: "0", fontWeight: "600" }}>Database</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["PostgreSQL", "MongoDB", "Supabase", "Redis"].map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #e74c3c20, #c0392b20)",
                        color: "#e74c3c",
                        padding: "0.5rem 1rem",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        border: "1px solid #e74c3c30",
                        transition: "all 0.2s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #e74c3c, #c0392b)"
                        e.target.style.color = "white"
                        e.target.style.transform = "scale(1.05)"
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #e74c3c20, #c0392b20)"
                        e.target.style.color = "#e74c3c"
                        e.target.style.transform = "scale(1)"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid #e9ecef",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)"
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.12)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    🛠️
                  </div>
                  <h3 style={{ color: "#2c3e50", fontSize: "1.4rem", margin: "0", fontWeight: "600" }}>DevOps & Tools</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["Git", "Docker", "Vercel", "Railway", "Postman", "Alchemy"].map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #9b59b620, #8e44ad20)",
                        color: "#9b59b6",
                        padding: "0.5rem 1rem",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        border: "1px solid #9b59b630",
                        transition: "all 0.2s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #9b59b6, #8e44ad)"
                        e.target.style.color = "white"
                        e.target.style.transform = "scale(1.05)"
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #9b59b620, #8e44ad20)"
                        e.target.style.color = "#9b59b6"
                        e.target.style.transform = "scale(1)"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid #e9ecef",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)"
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.12)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    💻
                  </div>
                  <h3 style={{ color: "#2c3e50", fontSize: "1.4rem", margin: "0", fontWeight: "600" }}>Languages</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["JavaScript", "TypeScript", "Solidity", "Rust", "SQL", "C++", "HTML", "CSS"].map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #3498db20, #2980b920)",
                        color: "#3498db",
                        padding: "0.5rem 1rem",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        border: "1px solid #3498db30",
                        transition: "all 0.2s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #3498db, #2980b9)"
                        e.target.style.color = "white"
                        e.target.style.transform = "scale(1.05)"
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #3498db20, #2980b920)"
                        e.target.style.color = "#3498db"
                        e.target.style.transform = "scale(1)"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{ padding: "4rem 0", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Let's Work Together</h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: "0.9" }}>
              I'm always interested in new opportunities and exciting projects.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <button
                onClick={handleEmailClick}
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.2)",
                  color: "white",
                  padding: "0.75rem 2rem",
                  textDecoration: "none",
                  borderRadius: "50px",
                  border: "2px solid rgba(255,255,255,0.3)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.3)"
                  e.target.style.transform = "translateY(-2px)"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.2)"
                  e.target.style.transform = "translateY(0)"
                }}
              >
                📧 Email Me
              </button>
              <a
                href="https://www.linkedin.com/in/siddharth-choudhary-a5a0a8229/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.2)",
                  color: "white",
                  padding: "0.75rem 2rem",
                  textDecoration: "none",
                  borderRadius: "50px",
                  border: "2px solid rgba(255,255,255,0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                💼 LinkedIn
              </a>
              <a
                href="https://github.com/IamSiddharthChoudhary"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.2)",
                  color: "white",
                  padding: "0.75rem 2rem",
                  textDecoration: "none",
                  borderRadius: "50px",
                  border: "2px solid rgba(255,255,255,0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                🔗 GitHub
              </a>
            </div>
          </div>
        </section>

        <footer style={{ padding: "2rem 0", backgroundColor: "#2c3e50", color: "white", textAlign: "center" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <p style={{ margin: "0", opacity: "0.8" }}>
              © 2025 Siddharth Choudhary. Built with passion for technology and innovation.
            </p>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className={styles.browser}>
      <div className={styles.toolbar}>
        <div className={styles.tabBar}>
          <div className={styles.tab}>
            <div className={styles.favicon}>
              {currentDomain.includes("google") ? (
                <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" fill="#4285F4"/>
                  <circle cx="24" cy="24" r="7" fill="white"/>
                  <path d="M24 4C35.05 4 44 12.95 44 24C44 35.05 35.05 44 24 44C12.95 44 4 35.05 4 24C4 12.95 12.95 4 24 4ZM24 17C27.31 17 30 19.69 30 23C30 26.31 27.31 29 24 29C20.69 29 18 26.31 18 23C18 19.69 20.69 17 24 17Z" fill="#4285F4"/>
                  <path d="M24 4C30.63 4 36.55 7.36 40.24 12.76L31.5 23C29.57 19.42 26.04 17 24 17C20.69 17 18 19.69 18 23L7.76 12.76C11.45 7.36 17.37 4 24 4Z" fill="#EA4335"/>
                  <path d="M7.76 35.24C4.64 31.45 4.64 16.55 7.76 12.76L18 23C18 26.31 20.69 29 24 29L31.5 23L40.24 35.24C36.55 40.64 30.63 44 24 44C17.37 44 11.45 40.64 7.76 35.24Z" fill="#FBBC05"/>
                  <path d="M40.24 12.76C43.36 16.55 43.36 31.45 40.24 35.24L30 23C30 19.69 27.31 17 24 17L31.5 23L40.24 12.76Z" fill="#34A853"/>
                </svg>
              ) : currentDomain === "Email" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#667eea" strokeWidth="2" fill="#667eea"/>
                  <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              ) : currentDomain.includes("siddharth") ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#667eea" />
                  <path d="M7 7H17V9H7V7Z" fill="white" />
                  <path d="M7 11H17V13H7V11Z" fill="white" />
                  <path d="M7 15H17V17H7V15Z" fill="white" />
                </svg>
              ) : (
                <Globe size={16} color="#5f6368" />
              )}
            </div>
            <span className={styles.tabTitle}>{currentDomain}</span>
            <X size={14} className={styles.closeTab} />
          </div>
          <div className={styles.newTab}>+</div>
        </div>
      </div>

      <div className={styles.addressBar}>
        <div className={styles.navigationButtons}>
          <button className={styles.navButton} onClick={goBack} disabled={historyIndex <= 0}>
            <ArrowLeft size={16} />
          </button>
          <button className={styles.navButton} onClick={goForward} disabled={historyIndex >= history.length - 1}>
            <ArrowRight size={16} />
          </button>
          <button className={styles.navButton} onClick={reload}>
            <RotateCcw size={16} />
          </button>
        </div>

        <form onSubmit={handleUrlSubmit} className={styles.urlForm}>
          <div className={styles.urlBar}>
            <Search size={14} className={styles.searchIcon} />
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className={styles.urlInput}
            />
          </div>
        </form>

        <div className={styles.browserActions}>
          <button className={styles.actionButton}>
            <Star size={16} />
          </button>
          <button className={styles.actionButton} onClick={goHome}>
            <Home size={16} />
          </button>
          <button className={styles.actionButton}>
            <Menu size={16} />
          </button>
        </div>
      </div>

      <div ref={browserContentRef} className={styles.browserContent}>
        {isLoading && (
          <div className={styles.loadingIndicator}>
            <motion.div
              className={styles.loadingBar}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            />
          </div>
        )}
        <div className={styles.iframeWrapper}>
          {url.startsWith("mailto:") ? renderEmailInterface() : renderMockWebsite()}
        </div>
      </div>
    </div>
  )
}
