import React from "react";
import { useState } from "react";

function ColorBox({ name, hex }) {
  const [showCopy, setShowCopy] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    alert(`${hex} copied!`);
  };

  return (
    <div
      className="color"
      style={{ backgroundColor: hex }}
      onMouseEnter={() => setShowCopy(true)}
      onMouseLeave={() => setShowCopy(false)}
      onClick={copyToClipboard}
    >
      {showCopy && <span className="copy-text">Copy</span>}
      <p>{name}</p>
    </div>
  );
}

export default ColorBox;
