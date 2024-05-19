import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";

interface ExampleSearchBarProps {
  listItems: string[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  updateExampleList: Function;
}

export const ExampleSearchBar = ({
  listItems,
  updateExampleList,
}: ExampleSearchBarProps) => {
  const [currentValue, setCurrentValue] = useState<string>("");

  const addItemToList = () => {
    const newList = [...listItems];

    // Add the element to the beginning of the array
    newList.unshift(currentValue);
    console.log(newList);

    // passes new list to the parent component
    updateExampleList(newList);
    // Reset the search bar value
    setCurrentValue("");

    // Add it to the local storage
    localStorage.setItem("example-list", JSON.stringify(newList));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center md:items-end justify-evenly">
      <input
        id="standard-basic"
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Add to list"
        value={currentValue}
        onChange={(e) => {
          setCurrentValue(e.target.value);
        }}
        onKeyDown={(ev) => {
          console.log(`Pressed keyCode ${ev.key}`);
          if (ev.key === "Enter" && currentValue.length > 0) {
            addItemToList();
          }
        }}
      />
      <Button
        onClick={() => {
          if (currentValue.length > 0) {
            addItemToList();
          }
        }}
      >
        Submit
      </Button>
    </div>
  );
};
