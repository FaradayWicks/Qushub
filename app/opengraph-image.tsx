/* eslint-disable @next/next/no-img-element -- ImageResponse requires a native image element. */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Quishub";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await fetch(
    new URL("./_assets/quishub-logo.png", import.meta.url),
  ).then((response) => response.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#160e20",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)",
            borderRadius: 999,
            filter: "blur(100px)",
            height: 330,
            left: 300,
            opacity: 0.2,
            position: "absolute",
            top: 150,
            width: 600,
          }}
        />

        <div
          style={{
            alignItems: "center",
            background: "#e5e5e4",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: 38,
            boxShadow: "0 28px 80px rgba(0, 0, 0, 0.28)",
            display: "flex",
            height: 390,
            justifyContent: "center",
            padding: "54px 64px",
            position: "relative",
            width: 1080,
          }}
        >
          <img
            alt="Quishub"
            height={304}
            src={logo as unknown as string}
            style={{
              objectFit: "contain",
            }}
            width={950}
          />
        </div>
      </div>
    ),
    size,
  );
}
