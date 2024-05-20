import { useState } from "react";
import { Button } from "@/components/ui/button";
import API from "@/Api.ts";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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
    staleTime: 5000, // 5 minutes in milliseconds
  });
}

// Define your two components
const Component1 = () => {
  const { isPending, error, data } = usePingQuery();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>Component 1</div>
      <p>{data}</p>
    </>
  );
};
const Component2 = () => {
  const { isPending, error, data } = usePingQuery();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>Component 2</div>
      <p>{data}</p>
    </>
  );
};

export const QueryExample = () => {
  // Define a state variable to keep track of which component is currently shown
  const [isComponent1Shown, setIsComponent1Shown] = useState(true);

  const queryClient = useQueryClient();

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
      <Button
        onClick={() => {
          queryClient.removeQueries({ queryKey: ["ping"] });
        }}
      >
        Evict
      </Button>
    </div>
  );
};
