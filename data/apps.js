import { Folder, Mail, Briefcase, Code, User, Phone, GraduationCap, Award, Info, Github, Linkedin, Instagram, Search } from 'lucide-react'

export const desktopApps = [
{
id: "projects",
name: "Projects",
icon: <Code size={32} color="#0078d7" />,
},
{
id: "github",
name: "GitHub",
icon: <Github size={32} color="#333" />,
},
{
id: "linkedin",
name: "LinkedIn",
icon: <Linkedin size={32} color="#0A66C2" />,
},
{
id: "chrome",
name: "Chrome",
icon: (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#4285F4"/>
    <circle cx="24" cy="24" r="7" fill="white"/>
    <path d="M24 4C35.05 4 44 12.95 44 24C44 35.05 35.05 44 24 44C12.95 44 4 35.05 4 24C4 12.95 12.95 4 24 4ZM24 17C27.31 17 30 19.69 30 23C30 26.31 27.31 29 24 29C20.69 29 18 26.31 18 23C18 19.69 20.69 17 24 17Z" fill="#4285F4"/>
    <path d="M24 4C30.63 4 36.55 7.36 40.24 12.76L31.5 23C29.57 19.42 26.04 17 24 17C20.69 17 18 19.69 18 23L7.76 12.76C11.45 7.36 17.37 4 24 4Z" fill="#EA4335"/>
    <path d="M7.76 35.24C4.64 31.45 4.64 16.55 7.76 12.76L18 23C18 26.31 20.69 29 24 29L31.5 23L40.24 35.24C36.55 40.64 30.63 44 24 44C17.37 44 11.45 40.64 7.76 35.24Z" fill="#FBBC05"/>
    <path d="M40.24 12.76C43.36 16.55 43.36 31.45 40.24 35.24L30 23C30 19.69 27.31 17 24 17L31.5 23L40.24 12.76Z" fill="#34A853"/>
  </svg>
),
},
]

const portfolioApps = [
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
id: "additional-info",
name: "Additional Info",
icon: <Info size={24} color="#0078d7" />,
},
{
id: "instagram",
name: "Instagram",
icon: <Instagram size={24} color="#E4405F" />,
url: "https://www.instagram.com/it_is_siddharth/",
},
]

const essentialWindowsApps = [
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

export const allApps = [...desktopApps, ...portfolioApps, ...essentialWindowsApps]
