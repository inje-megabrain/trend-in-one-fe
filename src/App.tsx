import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAtom } from "jotai";
import { darkModeAtom } from "./state/darkmode";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import Trends from "./pages/Trends";

export default function App() {
    const [toggleDark, settoggleDark] = useAtom(darkModeAtom);
    const queryClient = new QueryClient();

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/trends",
            element: <Trends />,
        },
        {
            path: "/dcinside",
            element: <></>,
        },
        {
            path: "/twitter",
            element: <></>,
        },
        {
            path: "/reddit",
            element: <></>,
        },
    ]);

    const myTheme = createTheme({
        // Theme settings
        palette: {
            mode: toggleDark === "dark" ? "dark" : "light",
            secondary: {
                main: toggleDark === "dark" ? "#464f5a" : "#ebf1f4",
            },
            background: {
                paper: toggleDark === "dark" ? "#1f2936" : "white",
                default: toggleDark === "dark" ? "#1f2936" : "white",
            },
            text: {
                primary: toggleDark === "dark" ? "#FFF" : "#000",
                secondary: toggleDark === "dark" ? "#bebebe" : "#4d4d4d",
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={myTheme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    );
}
