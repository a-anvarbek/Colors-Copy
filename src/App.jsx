import "./App.css";

import ColorBox from "./componets/ColorBox";
import FormatSelector from "./componets/FormatSelector";
// import CopyToast from "./componets/CopyyToast";

function App() {
  const colors = [
    {
      hex: "#1ABC9C",
      name: "TURQUOISE",
    },
    {
      hex: "#2ECC71",
      name: "EMERALD",
    },
    {
      hex: "#3498DB",
      name: "PETER RIVER",
    },
    {
      hex: "#9B59B6",
      name: "AMETHYST",
    },
    {
      hex: "#34495E",
      name: "WET ASPHALT",
    },
    {
      hex: "#16A085",
      name: "GREEN SEA",
    },
    {
      hex: "#27AE60",
      name: "NEPHRITIS",
    },
    {
      hex: "#2980B9",
      name: "BELIZE HOLE",
    },
    {
      hex: "#8E44AD",
      name: "WISTERIA",
    },
    {
      hex: "#2C3E50",
      name: "MIDNIGHT BLUE",
    },
    {
      hex: "#F1C40F",
      name: "SUN FLOWER",
    },
    {
      hex: "#E67E22",
      name: "CARROT",
    },
    {
      hex: "#E74C3C",
      name: "ALIZARIN",
    },
    {
      hex: "#ECF0F1",
      name: "CLOUDS",
    },
    {
      hex: "#95A5A6",
      name: "CONCRETE",
    },
    {
      hex: "#F39C12",
      name: "ORANGE",
    },
    {
      hex: "#D35400",
      name: "PUMPKIN",
    },
    {
      hex: "#C0392B",
      name: "POMEGRANATE",
    },
    {
      hex: "#BDC3C7",
      name: "SILVER",
    },
    {
      hex: "#7F8C8D",
      name: "ASBESTOS",
    },
  ];

  return (
    <>
      <FormatSelector />
      <div className="containerColors">
        {colors.map((color, index) => (
          <ColorBox key={index} hex={color.hex} name={color.name} />
        ))}
      </div>
    </>
  );
}

export default App;
