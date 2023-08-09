import React, { useState } from "react";
import ShortenUrlForm from "../components/shortenUrlForm";

const TinyurlForm = () => {
  const [tinyUrl, setTinyUrl] = useState<any>(null);
  const handleUrlSubmit = (responseData: any) => {
    setTinyUrl(responseData);
  };

  return (
    <div>
      <ShortenUrlForm onSubmit={handleUrlSubmit} />
      {tinyUrl ? (
        <div
          style={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <h3 style={{ lineBreak: "normal" }}>Here is your TinyURL</h3>
          <a href={tinyUrl}>{tinyUrl}</a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TinyurlForm;
