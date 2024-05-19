//
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import { useColorMode, useSetColorMode } from "@/context/customHooks.ts";
//
// export const ThemeToggle = () => {
//   const mode = useColorMode();
//
//   // TODO - figure out what type this should be
//   const setMode: any = useSetColorMode();
//
//   // useEffect(() => {
//   //   if (localStorage.getItem("mode") === null) {
//   //     localStorage.setItem("mode", "light");
//   //   }
//   //   const mode: PaletteMode = localStorage.getItem("mode") as PaletteMode;
//   //   setMode(mode);
//   // }, [setMode]);
//
//   const toggleColorMode = () => {
//     setMode(mode == "light" ? "dark" : "light");
//
//     localStorage.setItem(
//       "mode",
//       localStorage.getItem("mode") === "light" ? "dark" : "light"
//     );
//   };
//   return (
//     <div className="flex-grow justify-end text-end">
//       <button
//         className="p-1 px-2 h-4/5 m-auto my-4 mx-4"
//         onClick={toggleColorMode}
//       >
//         {mode == "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
//       </button>
//     </div>
//   );
// };

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/context/contextWrappers/ThemeProviderContext.tsx";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
