import React, { useContext, useState } from "react";
import arrowIcon from "../../icons/arrow.svg";
import checkmarkIcon from "../../icons/checkmark.svg";
import errorIcon from "../../icons/error.svg";
import { ShortenLinkContext } from "../hooks/ShortenLinkContext";

export default function Hero() {
  const { shortenLink, requestStatus } = useContext(ShortenLinkContext);
  let [longLink, setLongLink] = useState("");

  const submitLink = async (event: any) => {
    event.preventDefault();
    await shortenLink(longLink);
  };

  return (
    <section className="hero-container">
      <div className="hero-intro">
        <h1>Shorten Your Loooong Links :)</h1>
        <p>
          ZipLink is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
      </div>
      <form method="get" onSubmit={submitLink}>
        <input
          type="url"
          name="link-input"
          id="link-input"
          placeholder="Enter The Link Here"
          value={longLink}
          onChange={(event) => setLongLink((longLink = event.target.value))}
        />
        <button type="submit" id="button" onClick={submitLink}>
          <p id="button-text">Shorten Now!</p>
          <img src={arrowIcon} alt="arrow" id="button-image" />
        </button>
      </form>

      <div className="request-status">
        {requestStatus === "Awaiting" && <p></p>}
        {requestStatus === "Processing" && (
          <p style={{ color: "yellowgreen" }}>Shortening Link...</p>
        )}
        {requestStatus === "Success" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "#5ab159" }}>Link Shortened </p>
            <div style={{ width: "2rem", height: "1rem" }}>
              <img src={checkmarkIcon} alt="" />
            </div>
          </div>
        )}
        {requestStatus === "Error" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <div style={{ width: "1rem", height: "1rem" }}>
                <img src={errorIcon} alt="" />
              </div>{" "}
              <p style={{ color: "#FF3838" }}>Error Shortening Link</p>
            </div>
            <button className="retry-button" onClick={submitLink}>
              Retry
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
