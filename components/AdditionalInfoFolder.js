"use client"
import styles from "./FolderContent.module.css"

export default function AdditionalInfoFolder() {
return (
  <div className={styles.folderContainer}>
    <h1 className={styles.folderTitle}>Professional Experience & Achievements</h1>

    <div className={styles.additionalInfo}>
      <div className={styles.infoSection}>
        <h2>Work Experience</h2>

        <div className={styles.workExperience}>
          <h3>Full Stack Developer - Stock-Gen (Fiverr Client Project)</h3>
          <p className={styles.workDuration}>January 2025 - February 2025 | Remote</p>
          <p className={styles.workDescription}>
            Developed a comprehensive stock market insights platform with user authentication and real-time data
            processing.
          </p>
          <ul className={styles.workResponsibilities}>
            <li>Engineered Stock Gen platform leveraging Supabase for data handling and Next.js for UI</li>
            <li>Architected scalable server-side structure using Node.js and Express.js for session management</li>
            <li>Utilized PostgreSQL with Supabase to perform optimized queries, cutting latency by 35%</li>
            <li>Enhanced backend efficiency by minimizing redundant API hits and improving throughput</li>
            <li>Deployed frontend/APIs on Vercel and backend tools on Railway</li>
          </ul>
        </div>

        <div className={styles.workExperience}>
          <h3>Backend Developer (Freelance) - Oracle Connector</h3>
          <p className={styles.workDuration}>November 2023 - May 2024 | Remote (Fiverr)</p>
          <p className={styles.workDescription}>
            Built and published a CLI npm utility to streamline oracle integration into Solidity smart contracts.
          </p>
          <ul className={styles.workResponsibilities}>
            <li>Crafted CLI-driven npm utility for oracle smart contract integration</li>
            <li>Structured plug-and-play backend system supporting diverse oracle services (Chainlink, RedStone)</li>
            <li>Integrated interactive CLI prompts for network, oracle, and feed configuration</li>
            <li>Reduced integration overhead by 60% for developers using the tool</li>
            <li>Open-sourced and maintained codebase for easy Web3 onboarding</li>
          </ul>
        </div>
      </div>

      <div className={styles.infoSection}>
        <h2>Achievements & Leadership</h2>
        <ul className={styles.languageList}>
          <li>
            <strong>Winner, Solana Hack-Day 2022 – IIIT Delhi:</strong> Developed a decentralized organ donation
            platform
          </li>
          <li>
            <strong>Web3 Head, E-Cell ADGITM (2022–2024):</strong> Led workshops and mentored developers on blockchain
            tools and dApps
          </li>
          <li>
            <strong>Vice President, Bhangra Society (Virsa) (2023–2024):</strong> Won many inter-college competitions
          </li>
        </ul>
      </div>

      <div className={styles.infoSection}>
        <h2>Specializations</h2>
        <ul className={styles.interestsList}>
          <li>Full Stack Web Development</li>
          <li>Blockchain & Web3 Development</li>
          <li>Zero-Knowledge Proofs & Privacy</li>
          <li>DeFi & NFT Marketplaces</li>
          <li>Smart Contract Development</li>
          <li>CLI Tool Development</li>
          <li>AI/ML Integration</li>
          <li>DevOps & Cloud Deployment</li>
        </ul>
      </div>

      <div className={styles.infoSection}>
        <h2>Technical Expertise</h2>
        <ul className={styles.interestsList}>
          <li>
            <strong>Blockchain Platforms:</strong> Ethereum, Solana
          </li>
          <li>
            <strong>Smart Contract Languages:</strong> Solidity, Rust (Anchor)
          </li>
          <li>
            <strong>Zero-Knowledge:</strong> Circom, snarkjs, zk-SNARKs
          </li>
          <li>
            <strong>Web3 Libraries:</strong> Ethers.js, Solana Web3.js
          </li>
          <li>
            <strong>Decentralized Storage:</strong> IPFS, The Graph
          </li>
          <li>
            <strong>Development Tools:</strong> Hardhat, Anchor, Alchemy
          </li>
        </ul>
      </div>
    </div>
  </div>
)
}
