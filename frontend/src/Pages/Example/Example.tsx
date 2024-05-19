import { useEffect, useState } from "react";
import { UserData } from "../../Interfaces.ts";
import axios from "axios";
import { ExampleList } from "./exampleList/ExampleList.tsx";
import { ExampleSearchBar } from "./exampleSearchBar/ExampleSearchBar.tsx";
import UserTable from "@/Pages/Example/userTable/UserTable.tsx";

export function Example() {
  const [randomUsers, setRandomUsers] = useState<UserData[]>([]);

  // List item state is maintained in the parent component
  const [listItems, setListItems] = useState<string[]>([]);

  // Get theme object from MUI
  const theme = "get from tailwind";

  // Check the console to view the theme object
  useEffect(() => {
    console.log(theme);
  });

  // Example of how to import an environment variable
  useEffect(() => {
    const envTest = import.meta.env.VITE_TEST;
    console.log(envTest);

    const url = `https://google.com?apikey=${import.meta.env.VITE_API_KEY}`;
    console.log({ url });
    console.log(
      `${envTest} you can use backticks to inject the variable into a string`
    );
  }, []);

  // On mount call the get from localStorage method to set the state of listItems
  useEffect(() => {
    getFromLocalStorage();
  }, []);

  /**
   * Get the example list from local storage on component mount
   */
  const getFromLocalStorage = () => {
    const list = JSON.parse(localStorage.getItem("example-list") || "[]");
    setListItems(list);
  };

  /**
   * Helper method that is passed down to a child of this component
   * This allows us to update the state of listItems from a child component and then share it with another component
   * @param exampleList
   */
  const updateExampleList = (exampleList: string[]) => {
    console.log("called");
    console.log(exampleList);
    setListItems(exampleList);
  };

  // Example of how to make an api call
  const getUsers = async () => {
    axios
      .get("https://randomuser.me/api/?results=5")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setRandomUsers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex">
      <div className="sm:w-8/12 border-red-500 overflow-x-scroll">
        <h4 className="text-primary">
          Click the button to get some random user data
        </h4>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          id="get-users-button"
          onClick={getUsers}
        >
          Get Users
        </button>
        <h1>Users:</h1>
        <UserTable userData={randomUsers} />
      </div>

      <div className="sm:w-1/12 border-yellow-500 sm:block hidden">
        {/* Divider goes here */}
      </div>

      <div className="sm:w-3/12 w-full border-green-500">
        <ExampleSearchBar
          listItems={listItems}
          updateExampleList={updateExampleList}
        />

        <ExampleList
          listItems={listItems}
          updateExampleList={updateExampleList}
        />
      </div>
    </div>
  );
}
