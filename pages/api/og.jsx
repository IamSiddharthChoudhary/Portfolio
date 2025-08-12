import { ImageResponse } from "next/server"

export const config = {
  runtime: "edge",
}

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url)

    const title = searchParams.get("title") || "Windows 10 UI Clone - Interactive Portfolio"

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0078d7",
          backgroundImage: "linear-gradient(135deg, #0078d7, #0099f7)",
          color: "white",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,4.8L13,3.5v12.2H0V4.8z M13,17.8v12.2L0,28.8V17.8H13z M14.5,3.2L32,1.2v16H14.5V3.2z M32,18.2v16l-17.5-2V18.2H32z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 30,
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Interactive portfolio by Raj Sharma (thefstack)
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.log(`Error generating OG image: ${e.message}`)
    return new Response(`Error generating image`, {
      status: 500,
    })
  }
}
