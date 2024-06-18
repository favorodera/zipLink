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
    Authorization: `Bearer ${import.meta.env.VITE_TINY_URL_API_TOKEN}`,
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
      setShortenedLink(response.data.data.tiny_url);
      console.log(response);

      setRequestStatus("Success");
    } catch (error) {
      setRequestStatus((): string => {
        if (error.code === "ERR_BAD_REQUEST") {
          return "Invalid Url";
        } else if (error.code === "ERR_NETWORK") {
          return "Network Error";
        } else {
          return "Error Shortening Url";
        }
      });
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
