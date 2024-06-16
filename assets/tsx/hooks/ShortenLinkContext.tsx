import React, { useState } from "react";
import { createContext } from "react";
import axios from "axios";

const ShortenLinkContext = createContext({
  shortenedLink: "",
  requestStatus: "Awaiting",
  shortenLink: async (url: any) => {},
});

function ShortenLinkProvider(props: any) {
  const [shortenedLink, setShortenedLink] = useState("");
  const [requestStatus, setRequestStatus] = useState("Awaiting");

  const shortenLink = async (url: any) => {
    setRequestStatus("Processing");
    try {
      const response = await axios.get(`https://api.github.com/users/${url}`);
      setShortenedLink(response.data);
      setRequestStatus("Success");
    } catch (error) {
      console.error(error);
      setRequestStatus("Error");
    }
  };

  return (
    <ShortenLinkContext.Provider
      value={{ shortenedLink, requestStatus, shortenLink }}
    >
      {props.children}
    </ShortenLinkContext.Provider>
  );
}

export { ShortenLinkProvider, ShortenLinkContext };
