import React, { useState } from "react";

function FormatSelector() {
  const [color, setColor] = useState("hex");

  const handleFormatChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="format-selector">
      <select id="format" value={color} onChange={handleFormatChange}>
        <option value="hex">Copy Format: HEX (#AA1923)</option>
        <option value="rgb">Copy Format: RGB (170, 25, 35)</option>
        <option value="rgba">Copy Format: RGBA (170, 25, 35, 0.5)</option>
      </select>
      <p>Selected format: {color.toUpperCase()}</p>
    </div>
  );
}

export default FormatSelector;
