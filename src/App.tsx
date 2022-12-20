import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./components/Layout";
import PostList from "./components/PostList";
import { useAtom } from "jotai";
import { darkModeAtom } from "./state/darkmode";
import { useQuery } from "react-query";
import getPosts from "./api/getPosts";

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
    const { isLoading, data } = useQuery(["posts"], getPosts, {
        refetchOnWindowFocus: false,
    });
    return (
        <ThemeProvider theme={myTheme}>
            <Layout>{!isLoading && <PostList posts={data} />}</Layout>
        </ThemeProvider>
    );
}
