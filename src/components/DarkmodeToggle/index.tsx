import { Switch } from "@mui/material";
import { useAtom } from "jotai";
import { darkModeAtom } from "../../state/darkmode";

const DarkmodeToggle = () => {
    const [toggleDark, settoggleDark] = useAtom(darkModeAtom);
    return (
        <>
            <Switch
                color="default"
                checked={toggleDark === "dark"}
                onChange={() => {
                    settoggleDark(toggleDark === "light" ? "dark" : "light");
                }}
            />
        </>
    );
};
export default DarkmodeToggle;
