import React from "react";
import githubIcon from "../../icons/github.svg";

export default function Nav() {
  return (
    <nav>
      <p className="logo">
        ZipLink<sup style={{ fontSize: "1rem" }}>&reg;</sup>
      </p>
      <a href="https://github.com/favorodera/zipLink" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="github" /></a>
    </nav>
  );
}
