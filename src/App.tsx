import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAtom } from "jotai";
import { darkModeAtom } from "./state/darkmode";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import Trends from "./pages/Trends";
import DCinsideSubPage from "./pages/DCinsideSubPage";
import RedditSubPage from "./pages/RedditSubPage";
import ErrorPage from "./pages/404";
import YoutubeSubPage from "./pages/YoutubeSubPage";

export default function App() {
    const [toggleDark, settoggleDark] = useAtom(darkModeAtom);
    const queryClient = new QueryClient();

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/trends",
            element: <Trends />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/dcinside",
            element: <DCinsideSubPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/reddit",
            element: <RedditSubPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/youtube",
            element: <YoutubeSubPage />,
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
