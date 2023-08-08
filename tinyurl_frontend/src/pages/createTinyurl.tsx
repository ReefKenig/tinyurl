import React from "react";
import ShortenUrlForm from "../components/shortenUrlForm";

const TinyurlForm = () => {
  const handleUrlSubmit = (url: string) => {
    console.log("Submitted URL: ", url);
  };
  return (
    <div>
      <ShortenUrlForm onSubmit={handleUrlSubmit} />
    </div>
  );
};

export default TinyurlForm;
