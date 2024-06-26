// import React from "react";
// import {
//   createTheme,
//   CssBaseline,
//   PaletteMode,
//   ThemeProvider,
// } from "@mui/material";
// import { getDesignTokens } from "@/theme.ts";
//
// export interface GlobalContextProps {
//   children: React.ReactNode;
// }
//
// // ==================== React Contexts ====================
// // Create a React context, this will make the value held here availble to all of its children
// export const ColorModeContext = React.createContext({});
// export const SetColorModeContext = React.createContext({});
// // ==================== React Contexts ====================
//
// // Normal react component
// export const ThemeContextWrapper = ({ children }: GlobalContextProps) => {
//   // ===================== React States =====================
//   const [mode, setMode] = React.useState<PaletteMode>(
//     (localStorage.getItem("mode") as PaletteMode) || "light"
//   );
//
//   // regenerate the theme when the mode changes
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
//
//   // ===================== React States =====================
//
//   return (
//     // ColorModeContext.Provider makes the color mode available down the React tree thanks to React context.
//     // Mui will then use this to set the correct theme of each component in the tree.
//     <ColorModeContext.Provider value={mode}>
//       <SetColorModeContext.Provider value={setMode}>
//         {/*Theme provider provides customTheme access to the App and all of its children*/}
//         <ThemeProvider theme={theme}>
//           {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon and also makes the theme take effect on background colors */}
//           <CssBaseline />
//           {children}
//         </ThemeProvider>
//       </SetColorModeContext.Provider>
//     </ColorModeContext.Provider>
//   );
// };

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
