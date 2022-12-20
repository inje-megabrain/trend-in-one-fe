import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./components/Layout";
import PostList from "./components/PostList";
import data from "./data";
import { useAtom } from "jotai";
import { darkModeAtom } from "./state/darkmode";

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

    return (
        <ThemeProvider theme={myTheme}>
            <Layout>
                <PostList posts={data} />
            </Layout>
        </ThemeProvider>
    );
}
