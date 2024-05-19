interface exampleListProps {
  listItems: string[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  updateExampleList: Function;
}

export const ExampleList = ({
  listItems,
  updateExampleList,
}: exampleListProps) => {
  /**
   * Utilty method for removing items
   * @param strIndex
   */
  const removeListItem = (strIndex: string) => {
    // Get the index of the element to remove from the passed in string
    const index = parseInt(strIndex);

    // Make a copy of the state as not to mutate it in this component
    const newLst = [...listItems];

    // remove the element from the list
    newLst.splice(index, 1);
    console.log(newLst);

    // passes new list to the parent component to update the state
    updateExampleList(newLst);

    // Update the local storage with the new list value
    localStorage.setItem("example-list", JSON.stringify(newLst));
  };

  return (
    <div className="flex-grow max-w-3xl">
      <div className="mt-16 mb-8 text-lg">Test List</div>
      <ul className="w-4/5 mx-auto max-h-96 overflow-y-scroll">
        {listItems.map((item, index) => {
          console.log(item, index);
          return (
            <li
              className="py-2 border-b border-gray-200"
              key={index}
            >
              <button
                // Assign a data-idx to the list item button so we know which index is clicked on
                data-idx={index}
                onClick={(e) => {
                  removeListItem(e.currentTarget.dataset.idx!);
                }}
                className="w-full text-left"
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
