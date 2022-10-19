import Pixel from "./Pixel";

export default function Pixels() {
  const pixels = [];
  for (let i = 0; i < 800; i++) pixels.push(<Pixel key={i} />);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(40,1fr)",
        gridTemplateRows: "repeat(40,1fr)",
        width: "80vw",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}
