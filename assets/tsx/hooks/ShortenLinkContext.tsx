import React, { useState } from "react";
import { createContext } from "react";
import axios from 'axios';

const ShortenLinkContext = createContext({
  shortenedLink: "",
  isLoading: false,
  error: null,
  shortenLink: async (url:any) => {},
});

function ShortenLinkProvider(props:any) {
  const [shortenedLink, setShortenedLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const shortenLink = async (url:any) => {
    setIsLoading(true);
    setError(null); 

    try {
      const response = await axios.get(`https://api.github.com/users/${url}`);
      setShortenedLink(response.data);
      console.log(shortenedLink);
    } catch (error) {
      console.error(error);
      setError(error); 
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <ShortenLinkContext.Provider
      value={{ shortenedLink, isLoading, error, shortenLink }}
    >
      {props.children}
    </ShortenLinkContext.Provider>
  );
}

export { ShortenLinkProvider, ShortenLinkContext };
