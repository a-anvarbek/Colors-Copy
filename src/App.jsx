import "./App.css";
import ColorBox from "./componets/ColorBox";
import FormatSelector from "./componets/FormatSelector";

function App() {
  const colors = [
    { name: "Turquoise", hex: "#1ABC9C" },
    { name: "Emerald", hex: "#2ECC71" },
    { name: "Peter River", hex: "#3498DB" },
    { name: "Amethyst", hex: "#9B59B6" },
    { name: "Wet Asphalt", hex: "#34495E" },
    { name: "Green Sea", hex: "#16A085" },
    { name: "Nephritis", hex: "#27AE60" },
    { name: "Belize Hole", hex: "#2980B9" },
    { name: "Wisteria", hex: "#8E44AD" },
    { name: "Midnight Blue", hex: "#2C3E50" },
    { name: "Sun Flower", hex: "#F1C40F" },
    { name: "Carrot", hex: "#E67E22" },
    { name: "Alizarin", hex: "#E74C3C" },
    { name: "Clouds", hex: "#ECF0F1" },
    { name: "Concrete", hex: "#95A5A6" },
    { name: "Orange", hex: "#F39C12" },
    { name: "Pumpkin", hex: "#D35400" },
    { name: "Pomegranate", hex: "#C0392B" },
    { name: "Silver", hex: "#BDC3C7" },
    { name: "Asbestos", hex: "#7F8C8D" },
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
