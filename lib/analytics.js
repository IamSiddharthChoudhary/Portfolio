export function initAnalytics() {
  if (typeof window === "undefined") return

  if (!localStorage.getItem("session_id")) {
    localStorage.setItem("session_id", generateSessionId())
  }

  trackPageView()

  window.addEventListener("beforeunload", () => {
    trackEvent("session", "end")
  })
}

export function trackPageView() {
  if (typeof window === "undefined") return

  const data = {
    type: "pageview",
    url: window.location.pathname,
    referrer: document.referrer || "direct",
    sessionId: localStorage.getItem("session_id"),
    timestamp: new Date().toISOString(),
    screenSize: `${window.innerWidth}x${window.innerHeight}`,
    userAgent: navigator.userAgent,
  }

  console.log("Page view tracked:", data)

  const analytics = JSON.parse(localStorage.getItem("analytics") || "[]")
  analytics.push(data)
  localStorage.setItem("analytics", JSON.stringify(analytics))
}

export function trackEvent(category, action, label = null, value = null) {
  if (typeof window === "undefined") return

  const data = {
    type: "event",
    category,
    action,
    label,
    value,
    url: window.location.pathname,
    sessionId: localStorage.getItem("session_id"),
    timestamp: new Date().toISOString(),
  }

  console.log("Event tracked:", data)

  const analytics = JSON.parse(localStorage.getItem("analytics") || "[]")
  analytics.push(data)
  localStorage.setItem("analytics", JSON.stringify(analytics))
}

function generateSessionId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function trackWindowInteraction(windowId, action) {
  trackEvent("window", action, windowId)
}

export function trackAppLaunch(appId) {
  trackEvent("app", "launch", appId)
}

export function trackLogin() {
  trackEvent("user", "login")
}

export function trackLogout() {
  trackEvent("user", "logout")
}
