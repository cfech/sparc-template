import { useEffect, useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ThemeToggle } from "@/components/themeToggle/ThemeToggle.tsx";
import { NavigationMenu } from "@/components/ui/navigation-menu.tsx";

export function Navbar() {
  const CustomListItemButton = ({ to, primary, fullWidth }: any) => {
    const location = useLocation();
    const [selected, setSelected] = useState<boolean>(to === location.pathname);

    useEffect(() => {
      if (location) {
        setSelected(to === location.pathname);
      }
    }, [location]);

    return (
      <li className={`list-none ${fullWidth ? "w-full" : "w-auto"}`}>
        <NavLink
          to={to}
          className={`block py-2 px-4 ${
            selected
              ? "border-b-2 border-black"
              : "border-b-2 border-transparent"
          }`}
        >
          {primary}
        </NavLink>
      </li>
    );
  };

  // ====================================================================

  return (
    <div className="mb-20">
      <NavigationMenu>
        <div className="flex items-center justify-between p-2">
          <NavLink
            to={"/"}
            className="justify-center items-center text-center sm:flex hidden cursor-pointer"
          >
            Example Project
          </NavLink>



          <div className="hidden sm:flex ml-auto w-4/5 justify-start items-center h-16">
            <CustomListItemButton to={"/"} primary={"Home"} />
            <CustomListItemButton to={"/example"} primary={"Example"} />
            <ThemeToggle />
          </div>
        </div>

        <Drawer>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <CustomListItemButton to={"/"} primary={"Home"} />
              <CustomListItemButton to={"/example"} primary={"Example"} />
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </NavigationMenu>
    </div>
  );
}
