import { useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import API from "@/Api.ts";
import { useQuery } from "@tanstack/react-query";
import { usePingQuery } from "@/Pages/Home/Home.tsx";

const pingBackend2 = async () => {
  try {
    const res = await API.get("/test");
    console.log(res);
    return res.data.message;
  } catch (err) {
    console.log(err);
    return "Error";
  }
};

// Define your two components
const Component1 = () => {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["ping1"],
  //   queryFn: pingBackend2,
  //   // staleTime: 5 * 60 * 1000, // 5 minutes in milliseconds
  // });

  const { isPending, error, data } = usePingQuery();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>Component 1</div>
      <Typography>{data}</Typography>
    </>
  );
};
const Component2 = () => {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["ping2"],
  //   queryFn: pingBackend2,
  //   // staleTime: 5 * 60 * 1000, // 5 minutes in milliseconds
  // });

  const { isPending, error, data } = usePingQuery();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>Component 2</div>
      <Typography>{data}</Typography>
    </>
  );
};

export const QueryExample = () => {
  // Define a state variable to keep track of which component is currently shown
  const [isComponent1Shown, setIsComponent1Shown] = useState(true);

  // Define a function to toggle the state variable
  const toggleComponent = () => {
    setIsComponent1Shown(!isComponent1Shown);
  };

  return (
    <div>
      {/* Render the component based on the state variable */}
      {isComponent1Shown ? <Component1 /> : <Component2 />}

      {/* Render a button to toggle the state variable */}
      <Button onClick={toggleComponent}>Toggle Component</Button>
    </div>
  );
};
