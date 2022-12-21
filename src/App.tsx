import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./components/Layout";
import PostList from "./components/PostList";
import { useAtom } from "jotai";
import { darkModeAtom } from "./state/darkmode";
import useGetPostInfiniteScrollQuery from "./query/useGetPostInfiniteScrollQuery";

export default function App() {
    const [toggleDark, settoggleDark] = useAtom(darkModeAtom);
    const myTheme = createTheme({
        // Theme settings
        palette: {
            mode: toggleDark === "dark" ? "dark" : "light",
            background: {
                paper: toggleDark === "dark" ? "#1f2936" : "white",
                default: toggleDark === "dark" ? "#1f2936" : "white",
            },
            text: {
                primary: toggleDark === "dark" ? "#FFF" : "#000",
            },
        },
    });
    const scrollQueryProps = useGetPostInfiniteScrollQuery();

    return (
        <ThemeProvider theme={myTheme}>
            <Layout>{!scrollQueryProps.getIsLoading && <PostList {...scrollQueryProps} />}</Layout>
        </ThemeProvider>
    );
}
