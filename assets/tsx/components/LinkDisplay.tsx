import React, { useContext } from "react";
import copyIcon from "../../icons/copy.svg";
import { ShortenLinkContext } from "../hooks/ShortenLinkContext";

export default function LinkDisplay() {
  const { shortenedLink, isLoading, error } = useContext(ShortenLinkContext);

  const copyLink = () => {
    window.navigator.clipboard.writeText(
      String(document.querySelector(".link-display")!.textContent)
    );
  };

  return (
    (shortenedLink ? <div className="link-display-container">
      <p className="link-display">{shortenedLink && shortenedLink.name}</p>
      <button className="copy-button">
        <img src={copyIcon} alt="copy" onClick={copyLink} />
      </button>
    </div> : <div className="skeleton"></div> ) 
      
    
  );
}
