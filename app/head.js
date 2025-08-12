export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0078d7" />
      <meta name="msapplication-TileColor" content="#0078d7" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Siddharth Choudhary",
            url: "",
            sameAs: [
              "https://github.com/IamSiddharthChoudhary",
              "https://www.linkedin.com/in/siddharth-choudhary-a5a0a8229/",
            ],
            jobTitle: "Full Stack Developer",

            description:
              "Full Stack Developer specializing in React, Next.js, and Node.js",
          }),
        }}
      />
    </>
  );
}
