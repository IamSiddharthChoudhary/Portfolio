export default function generateMetadata() {
  const title = "Windows 10 UI Clone - Interactive Portfolio by thefstack";
  const description =
    "An interactive portfolio website designed as a Windows 10 desktop clone. Explore projects, skills, and professional information through a familiar Windows 10 interface.";

  return {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      siteName: "Siddharth Portfolio",
      images: [
        {
          // url: ogImage,
          width: 1200,
          height: 630,
          alt: "Windows 10 UI Clone Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@thefstack",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // alternates: {
    //   canonical: url,
    // },
    authors: [
      {
        name: "Siddharth Choudhary",
        url: "https://github.com/IamSiddharthChoudhary",
      },
    ],
    creator: "Siddharth Choudhary",
    publisher: "Siddharth Choudhary",
    keywords: [
      "portfolio",
      "windows 10",
      "ui clone",
      "web developer",
      "react",
      "next.js",
      "interactive portfolio",
      "Siddharth Choudhary",
      "frontend developer",
      "full stack developer",
    ],
  };
}
