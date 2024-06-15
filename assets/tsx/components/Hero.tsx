import React from "react";
import arrowIcon from "../../icons/arrow.svg";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-intro">
        <h1>Shorten Your Loooong Links :)</h1>
        <p>
          ZipLink is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
      </div>
      <form method="get">
        <input
          type="url"
          name="link-input"
          id="link-input"
          placeholder="Enter The Link Here"
        />
        <button type="submit" id="button">
          <p id="button-text">Shorten Now!</p>
          <img src={arrowIcon} alt="arrow" id="button-image" />
        </button>
      </form>
    </section>
  );
}
