import React from "react";
import copyIcon from "../../icons/copy.svg";

export default function LinkDisplay() {
  const copyLink = () => {
    window.navigator.clipboard.writeText(
      String(document.querySelector(".link-display")!.textContent)
    );
  };

  return (
    <div className="link-display-container">
      <p className="link-display">https://ziplink.com/Bn41aCOlnxj</p>
      <button className="copy-button">
        <img src={copyIcon} alt="copy" onClick={copyLink} />
      </button>
    </div>
  );
}
