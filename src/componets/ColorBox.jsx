import React, { useState } from "react";
import CopyToast from "./CopyToast";

function ColorBox({ name, hex }) {
  const [showCopy, setShowCopy] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    setToastMessage(`${hex} copied!`);
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
      {toastMessage && <CopyToast message={toastMessage} onClose={() => setToastMessage("")} />}
    </div>
  );
}

export default ColorBox;
