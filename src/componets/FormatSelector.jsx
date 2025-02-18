import { useState } from "react";

function FormatSelector() {
  return (
    <div className="title">
      <div className="back">
        ⬅️ Back
      </div>
      <div className="format">
        <span> </span>
        <select id="format">
          <option value="hex">Copy Format: HEX ( #AA1923 ) </option>
          <option value="rgb">Copy Format: RGB - (1, 2, 3 ) </option>
          <option value="rgba">Copy Format: RGBA - (1, 2, 3 ) </option>
        </select>
      </div>
      <div className="song">
        <button>Sound on 🔊</button>
      </div>
    </div>
  );
}

export default FormatSelector;
