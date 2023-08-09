import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";

interface ShortenUrlFormProps {
  onSubmit: (responseData: string) => void;
}

const ShortenUrlForm: React.FC<ShortenUrlFormProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState("");
  // const [responseData, setResponseData] = useState<any>(null);

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
      // setResponseData(response.data["shortened_url"]);

      onSubmit(response.data["shortened_url"]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <Box
      // display={"flex"}
      justifyContent={"center"}
      textAlign={"center"}
      paddingTop={"3%"}
      height={"20vh"}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="Enter URL"
          variant="outlined"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Generate TinyURL
        </Button>
      </form>
    </Box>
  );
};

export default ShortenUrlForm;
