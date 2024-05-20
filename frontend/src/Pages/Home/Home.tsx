import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { usePingQuery } from "@/Pages/Example/QueryExample.tsx";
import { useTheme } from "@/context/contextWrappers/ThemeProviderContext.tsx";

export function Home() {
  const queryClient = useQueryClient();

  const { isPending, error, data } = usePingQuery();

  const theme = useTheme();
  console.log(theme);

  const cachedData = queryClient.getQueryData(["ping"]);

  console.log(cachedData);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "65vh",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "auto",
          justifyContent: "left",
          width: "80%",
          marginTop: "10vh",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        {isPending ? "Loading..." : null}
        {error ? "An error has occurred: " + error.message : null}
        {data ? <p>{data}</p> : null}
        <Button>Click me</Button>
      </div>
    </div>
  );
}
