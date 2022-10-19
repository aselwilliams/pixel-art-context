import { useContext, useState } from "react";
import { ColorContext } from "../ColorContext";

export default function Pixel() {
  const { color } = useContext(ColorContext);
  const [pixelColor, setPixelColor] = useState("lightGrey");
  return (
    <div
      onClick={() => setPixelColor(color)}
      style={{
        height: "1.5rem",
        width: "1.5rem",
        backgroundColor: pixelColor,
        margin: "1px",
      }}
    />
  );
}
