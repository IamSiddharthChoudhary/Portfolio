"use client"
import styles from "./Experience.module.css"

export default function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.resumeHeader}>
        <h1>Siddharth Choudhary</h1>
        <div className={styles.contactInfo}>
          <p>Email: csiddharth380@gmail.com</p>
          <p>Phone: +91 8920938135</p>
          <p>
            <a href="https://www.linkedin.com/in/siddharth-choudhary-a5a0a8229/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p>
            <a href="https://github.com/IamSiddharthChoudhary" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>

      <section className={styles.resumeSection}>
        <h2>Professional Experience</h2>

        <div className={styles.experienceItem}>
          <div className={styles.jobHeader}>
            <h3>Full Stack Developer - Stock-Gen: Stock Presentation Generator (Fiverr Client Project)</h3>
            <span className={styles.date}>Jan 2025 – Feb 2025</span>
          </div>
          <p>Remote</p>
          <ul>
            <li>
              Developed an AI stock presentation generator delivering the most accurate and comprehensive market data,
              unmatched by any other platform.
            </li>
            <li>
              Implemented seamless user authentication and dashboards using Supabase for backend services and Next.js for an
              interactive UI.
            </li>
            <li>
              Architected a scalable server-side structure using Node.js and Express.js to manage user sessions, data
              retrieval, and API endpoints, incorporating JWT-based session control.
            </li>
            <li>Utilized PostgreSQL with Supabase to perform optimized queries, cutting latency by 35%.</li>
            <li>Enabled live database synchronization via Supabase for secure and real-time user data management.</li>
            <li>
              Enhanced backend efficiency by minimizing redundant API hits and improving throughput; implemented 70% of
              endpoints using Node.js and Next.js serverless capabilities.
            </li>
            <li>Employed lightweight Python scripts and Pandas for sourcing and refining financial data from Yahoo Finance.</li>
            <li>
              Launched the full-stack deployment: frontend and APIs on Vercel, backend tools hosted on Railway for lightweight
              compute tasks.
            </li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.jobHeader}>
            <h3>Backend Developer (Freelance) - Oracle Connector – npm Automation Tool</h3>
            <span className={styles.date}>Nov 2023 – May 2024</span>
          </div>
          <p>Remote (Fiverr)</p>
          <ul>
            <li>
              Crafted and released a CLI-driven npm utility using Node.js to streamline oracle smart contract integration,
              offering ready-to-use boilerplate templates.
            </li>
            <li>
              Structured a plug-and-play backend system supporting diverse oracle services (e.g., Chainlink, RedStone),
              facilitating seamless provider replacement.
            </li>
            <li>Integrated interactive CLI prompts for network, oracle, and feed configuration via JSON definitions.</li>
            <li>Streamlined developer workflows by removing repetitive tasks and slashing integration overhead by 60%.</li>
            <li>Published the tool on GitHub to make oracle integration more accessible for Web3 developers.</li>
          </ul>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Projects</h2>

        <div className={styles.projectItem}>
          <h3>MemeVault – Meme Marketplace</h3>
          <p>
            <strong>Tech Stack:</strong> Next.js, Tailwind, Node.js, JWT, MongoDB
            <span className={styles.date} style={{ marginLeft: '10px' }}>Apr 2025 – May 2025</span>
          </p>
          <ul>
            <li>Built a full-stack marketplace enabling users to mint, showcase, and purchase memes as NFTs.</li>
            <li>Secured login sessions via JWT-based auth and HTTP-only cookies for enhanced protection.</li>
            <li>Developed clean and modular backend endpoints through Next.js API routes, connecting seamlessly to MongoDB Atlas.</li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <h3>Yoga Delight – Pose Checker and Recommendation System</h3>
          <p>
            <strong>Tech Stack:</strong> Next.js, AI, Node.js
            <span className={styles.date} style={{ marginLeft: '10px' }}>Jul 2024 – Sept 2024</span>
          </p>
          <ul>
            <li>Constructed an AI-powered platform to analyze and correct yoga poses using computer vision.</li>
            <li>Delivered adaptive yoga routines tailored to individual user preferences.</li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <h3>Taciturn – Zero-Knowledge Marketplace</h3>
          <p>
            <strong>Tech Stack:</strong> Circom, snarkjs, Solidity, Next.js, Express.js
            <span className={styles.date} style={{ marginLeft: '10px' }}>Jan 2025 – Present</span>
          </p>
          <ul>
            <li>Built a privacy-first NFT marketplace using zero-knowledge proofs to enable anonymous NFT creation and trading, unmatched by any existing NFT platform.</li>
            <li>Developed zkSNARK circuits in Circom and integrated them with Solidity smart contracts and a Next.js frontend for seamless proof verification and user experience.</li>
          </ul>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Technical Skills</h2>
        <ul className={styles.skillsList}>
          <li>
            <strong>Languages:</strong> JavaScript, TypeScript, SQL, C++, Solidity
          </li>
          <li>
            <strong>Backend/Frameworks:</strong> Node.js, Express.js, JWT, Next.js, Hardhat
          </li>
          <li>
            <strong>DevOps/Tools:</strong> Git, Docker(Basic), Vercel, Postman
          </li>
          <li>
            <strong>Databases:</strong> SQL, Supabase (PostgreSQL layer), MongoDB (basic)
          </li>
          <li>
            <strong>Other:</strong> Redis, Kafka, WebSockets, IPFS, The Graph
          </li>
        </ul>
      </section>

      <section className={styles.resumeSection}>
        <h2>Education</h2>
        <div className={styles.educationItem}>
          <h3>B.Tech. in Information Technology</h3>
          <p>Dr. Akhilesh Das Gupta Institute of Professional Studies, GGSIPU</p>
          <span className={styles.date}>Aug 2021 – May 2025</span>
          <p>Delhi, India</p>
        </div>
      </section>
    </div>
  )
}
