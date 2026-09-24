import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#171918",
        color: "#f4f2ed",
        border: "4px solid #2459e0",
        fontFamily: "sans-serif",
        fontSize: 25,
        fontWeight: 800,
        letterSpacing: "-1px",
      }}
    >
      AC
    </div>,
    size,
  );
}
