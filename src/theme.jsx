import { createTheme } from "@mui/material";
import { useMemo } from "react";

export const tokens = () => {
    return {
        primary: {
            100: "#ffffff",
            200: "#ffffff",
            300: "#ffffff",
            400: "#ffffff",
            500: "#ffffff",
            600: "#cccccc",
            700: "#999999",
            800: "#666666",
            900: "#333333"
        },
        secondary: {
            100: "#e4e3e7",
            200: "#c9c7cf",
            300: "#aeacb6",
            400: "#8B8D97",
            500: "#f4f5fa",
            600: "#787486",
            700: "#484650",
            800: "#302e36",
            900: "#18171b"
        },
        accent: {
            100: "#f6d7e0",
            200: "#edaec1",
            300: "#e486a3",
            400: "#db5d84",
            500: "#d23565",
            600: "#a82a51",
            700: "#7e203d",
            800: "#541528",
            900: "#2a0b14"
        }
    }
}

export const themeSettings = () => {
    const colors = tokens();
    return {
        palette: {
            primary: {
                main: colors.primary[500]
            },
            secondary: {
                main: colors.secondary[500],
                dark: colors.secondary[600]
            },
            accent: {
                light: colors.accent[300],
                main: colors.accent[500],
            },
            background: {
                default: colors.secondary[500]
            },
            text: {
                light: colors.secondary[400],
                main: colors.secondary[500],
                dark: colors.secondary[600]
            }
        },

        typography: {
            fontFamily: ["DM Sans", "sans - serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["DM Sans", "sans - serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["DM Sans", "sans - serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["DM Sans", "sans - serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["DM Sans", "sans - serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["DM Sans", "sans - serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["DM Sans", "DM Mono", "sans - serif"].join(","),
                fontSize: 12,
            },
        }
    }
}

export const useTheme = () => {

    const theme = useMemo(() => createTheme(themeSettings()), []);

    return theme;
}
