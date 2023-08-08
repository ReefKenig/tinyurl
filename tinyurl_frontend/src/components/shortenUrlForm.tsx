import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";

interface ShortenUrlFormProps {
  onSubmit: (url: string) => void;
}

const ShortenUrlForm: React.FC<ShortenUrlFormProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/url",
        {
          target_url: url,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("response from backend: ", response.data);

      onSubmit(url);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter URL"
        variant="outlined"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Create TinyURL
      </Button>
    </form>
  );
};

export default ShortenUrlForm;
