import { Box, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import API from "@/Api.ts";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// React query function must return a promise
const pingBackend = async () => {
  try {
    const res = await API.get("/test");
    console.log(res);
    return res.data.message;
  } catch (err) {
    console.log(err);
    return "Error";
  }
};

export function usePingQuery() {
  return useQuery({
    queryKey: ["ping"],
    queryFn: pingBackend,
    staleTime: 5 * 60 * 1000, // 5 minutes in milliseconds
  });
}

export function Home() {
  const queryClient = useQueryClient();

  // const { isPending, error, data } = useQuery({
  //   queryKey: ["ping"],
  //   queryFn: pingBackend,
  //   staleTime: 0,
  // });

  const { isPending, error, data } = usePingQuery();

  const cachedData = queryClient.getQueryData(["ping"]);

  console.log(cachedData);

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
        {isPending ? "Loading..." : null}
        {error ? "An error has occurred: " + error.message : null}
        {data ? <Typography>{data}</Typography> : null}
        <Button>Click me</Button>
      </Box>
    </Box>
  );
}
