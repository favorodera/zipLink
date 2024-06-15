import React, { useContext, useState } from "react";
import arrowIcon from "../../icons/arrow.svg";
import { ShortenLinkContext } from "../hooks/ShortenLinkContext";

export default function Hero() {
  const { shortenedLink, isLoading, error, shortenLink } =
    useContext(ShortenLinkContext);
  let [longLink, setLongLink] = useState("");

  const submitLink = async (event:any) => {
    event.preventDefault();
    const url = longLink;
    await shortenLink(url);
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
    </section>
  );
}
