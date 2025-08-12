"use client"
import { ExternalLink } from 'lucide-react'
import styles from "./FolderContent.module.css"

export default function ProjectsFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Projects</h1>

      <div className={styles.projectItem}>
        <h2>Stock-Gen: Stock Presentation Generator</h2>
        <div className={styles.projectLinks}>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <ExternalLink size={14} /> Live Demo
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <ExternalLink size={14} /> GitHub
          </a>
        </div>
        <p>
          <strong>Tech Stack:</strong> Next.js, Node.js, Express.js, Supabase, PostgreSQL, Python, Pandas
        </p>
        <ul>
          <li>
            Engineered a comprehensive stock market insights platform with smooth user login, leveraging Supabase for
            robust data handling
          </li>
          <li>
            Architected a scalable server-side structure using Node.js and Express.js to manage user sessions, data
            retrieval, and API endpoints
          </li>
          <li>Utilized PostgreSQL with Supabase to perform optimized queries, cutting latency by 35%</li>
          <li>Enhanced backend efficiency by minimizing redundant API hits and improving throughput</li>
          <li>
            Employed lightweight Python scripts and Pandas for sourcing and refining financial data from Yahoo Finance
          </li>
          <li>Launched full-stack deployment: frontend and APIs on Vercel, backend tools hosted on Railway</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Taciturn – Zero-Knowledge NFT Marketplace</h2>
        <div className={styles.projectLinks}>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <ExternalLink size={14} /> GitHub
          </a>
        </div>
        <p>
          <strong>Tech Stack:</strong> Circom, snarkjs, Solidity, Next.js, Express.js, IPFS
        </p>
        <ul>
          <li>Designed a privacy-centric NFT platform where creators and buyers remain anonymous using ZK proofs</li>
          <li>Implemented Circom-based circuits to validate ownership and bind commitments to tokenized assets</li>
          <li>Built zk-SNARK-based logic for ownership proofs and token commitments</li>
          <li>Integrated IPFS for asset storage and The Graph for commitment-based queries</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>MemeVault – Meme NFT Marketplace</h2>
        <div className={styles.projectLinks}>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <ExternalLink size={14} /> Live Demo
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <ExternalLink size={14} /> GitHub
          </a>
        </div>
        <p>
          <strong>Tech Stack:</strong> Next.js, Tailwind CSS, Node.js, MongoDB, JWT
        </p>
        <ul>
          <li>Built a full-stack marketplace enabling users to mint, showcase, and purchase memes as NFTs</li>
          <li>Secured login sessions via JWT-based auth and HTTP-only cookies for enhanced protection</li>
          <li>Designed an intuitive, mobile-friendly UI for meme discovery and uploading</li>
          <li>Integrated MongoDB Atlas for scalable storage with dynamic rendering and access control</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Yoga Delight – Pose Checker and Recommendation System</h2>
        <div className={styles.projectLinks}>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <ExternalLink size={14} /> Live Demo
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <ExternalLink size={14} /> GitHub
          </a>
        </div>
        <p>
          <strong>Tech Stack:</strong> Next.js, TensorFlow.js, Tailwind CSS, Node.js
        </p>
        <ul>
          <li>Constructed an AI-powered platform to analyze and correct yoga poses using computer vision</li>
          <li>Built a yoga recommendation system using computer vision to assess and correct poses</li>
          <li>Delivered adaptive yoga routines tailored to individual user preferences and history</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Oracle Connector – npm Automation Tool</h2>
        <div className={styles.projectLinks}>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <ExternalLink size={14} /> GitHub
          </a>
        </div>
        <p>
          <strong>Tech Stack:</strong> Node.js, CLI, JSON, Chainlink, RedStone
        </p>
        <ul>
          <li>Crafted and released a CLI-driven npm utility to streamline oracle smart contract integration</li>
          <li>Structured a plug-and-play backend system supporting diverse oracle services</li>
          <li>Integrated interactive CLI prompts for network, oracle, and feed configuration via JSON definitions</li>
          <li>Streamlined developer workflows by removing repetitive tasks and slashing integration overhead by 60%</li>
          <li>Published the tool on GitHub to make oracle integration more accessible for Web3 developers</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Organiser – Organ Donation dApp (Hackathon Winner)</h2>
        <div className={styles.projectLinks}>
          <span className={styles.projectLink}>🏆 Solana Hack-Day 2022 Winner</span>
        </div>
        <p>
          <strong>Tech Stack:</strong> Rust, Anchor, Solana Web3.js, React
        </p>
        <ul>
          <li>Developed a decentralized organ donation platform that won Solana Hack-Day 2022 at IIIT Delhi</li>
          <li>Helped users find and connect with organ donors and donation centers</li>
          <li>Built using Rust and Anchor framework for Solana blockchain integration</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Additional Projects</h2>
        <ul>
          <li>
            <strong>3Pay – Web3 Payment Generator:</strong> CLI-based npm tool to scaffold Metamask-based payment code
            for Web2 projects using TypeScript, Solidity, React, and Hardhat
          </li>
          <li>
            <strong>Pathar – Space Debris NFT Marketplace:</strong> Designed smart contracts for tokenizing meteorites
            with auction logic, deployed with ERC-721 standards and IPFS metadata support
          </li>
          <li>
            <strong>Solana DEX & Pump.io Clone:</strong> Created bonding curve-based token economics in Solana using
            Rust and Anchor with backend logic for token launchpad and swap mechanics
          </li>
        </ul>
      </div>
    </div>
  )
}
