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
            100: "#fdfdfe",
            200: "#fbfbfd",
            300: "#f8f9fc",
            400: "#f6f7fb",
            500: "#f4f5fa",
            600: "#c3c4c8",
            700: "#929396",
            800: "#626264",
            900: "#313132"
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
                main: colors.secondary[500]
            },
            accent: {
                main: colors.accent[500],
                light: colors.accent[300],

            },
            background: {
                default: colors.secondary[500]
            }
        }
        // Todo I need to add topograghy
    }
}

export const useTheme = () => {

    const theme = useMemo(() => createTheme(themeSettings()), []);

    return theme;
}
