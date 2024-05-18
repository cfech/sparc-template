import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
export function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/test")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "65vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          height: "auto",
          width: "80%",
          marginTop: "10vh",
          marginBottom: { xs: "5vh", sm: "3vh", md: "0vh" },
          textAlign: "left",
        }}
      >
        <Typography>{message}</Typography>
        <Button>Click me</Button>
        <Button>Button 2</Button>
      </Box>
    </Box>
  );
}
