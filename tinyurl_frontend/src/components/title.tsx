import React from "react";
import { Typography } from "@mui/material";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Typography
      variant="h4"
      component="h1"
      textAlign="center"
      paddingTop="3%"
      gutterBottom
    >
      {title}
    </Typography>
  );
};

export default Title;
