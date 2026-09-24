import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f4f2ed",
        color: "#171918",
        border: "12px solid #2459e0",
        borderRadius: 36,
        fontFamily: "sans-serif",
        fontSize: 65,
        fontWeight: 800,
        letterSpacing: "-3px",
      }}
    >
      AC
    </div>,
    size,
  );
}
