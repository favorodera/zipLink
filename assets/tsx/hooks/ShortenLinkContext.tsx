import React, { useState } from "react";
import { createContext } from "react";
import axios from "axios";

const ShortenLinkContext = createContext({
  shortenedLink: "",
  requestStatus: "Awaiting",
  shortenLink: async (longUrl: string) => {},
});

function ShortenLinkProvider(props: any) {
  const [shortenedLink, setShortenedLink] = useState("");
  const [requestStatus, setRequestStatus] = useState("Awaiting");

  const headers = {
    Authorization:
      "Bearer o0yycoTXsHMxi8ehUoM8YgzY9L1dlV5IJ7QmhRaXdrfA91LqYXsyNGcHLrCU",
    "Content-Type": "application/json",
    accept: "application/json",
  };

  const data = {
    url: "",
  };

  const shortenLink = async (longUrl: string) => {
    data.url = longUrl;
    setRequestStatus("Processing");

    try {
      const response = await axios.post(
        "https://api.tinyurl.com/create",
        data,
        { headers }
      );
      setShortenedLink(response.data);
      setRequestStatus("Success");
    } catch (error) {
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
