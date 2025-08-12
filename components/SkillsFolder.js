"use client"
import styles from "./FolderContent.module.css"

export default function SkillsFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Skills</h1>

      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <h2>Languages</h2>
          <ul className={styles.skillList}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Solidity</li>
            <li>Rust</li>
            <li>SQL</li>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Frontend</h2>
          <ul className={styles.skillList}>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>TensorFlow.js</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Backend/Frameworks</h2>
          <ul className={styles.skillList}>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>GraphQL</li>
            <li>REST APIs</li>
            <li>JWT Auth</li>
            <li>Hardhat</li>
            <li>Anchor</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Blockchain</h2>
          <ul className={styles.skillList}>
            <li>Ethers.js</li>
            <li>Solana Web3.js</li>
            <li>Circom</li>
            <li>snarkjs</li>
            <li>IPFS</li>
            <li>The Graph</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Databases</h2>
          <ul className={styles.skillList}>
            <li>PostgreSQL</li>
            <li>Supabase</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>DevOps/Tools</h2>
          <ul className={styles.skillList}>
            <li>Git</li>
            <li>Docker</li>
            <li>Vercel</li>
            <li>Railway</li>
            <li>Postman</li>
            <li>Alchemy</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Other Technologies</h2>
          <ul className={styles.skillList}>
            <li>Redis</li>
            <li>Kafka</li>
            <li>WebSockets</li>
            <li>WebRTC</li>
            <li>Redux</li>
            <li>CLI Tools</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
