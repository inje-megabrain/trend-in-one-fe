import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DarkmodeToggle from "../DarkmodeToggle";
import { useNavigate } from "react-router-dom";
interface Props {
    window?: () => Window;
    children: any;
}

const drawerWidth = 240;
const navItems = [
    { title: "Home", url: "/" },
    { title: "Trends", url: "/trends" },
];

const useStyles = makeStyles(
    (theme: {
        palette: { background: { default: any } };
        breakpoints: { down: (arg0: string) => any };
        spacing: (arg0: number) => any;
    }) => ({
        // Styling material components
        root: {
            width: "100%",
            minHeight: "100vh",
            backgroundColor: theme.palette.background.default,
            [theme.breakpoints.down("xs")]: {
                paddingTop: theme.spacing(2),
            },
        },
    }),
);

const Layout = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const classes = useStyles();
    const navigate = useNavigate();
    const handleOnClick = React.useCallback((url: string) => navigate(url, { replace: true }), [navigate]);

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Trend In One
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: "center" }}
                            onClick={() => {
                                handleOnClick(item.url);
                            }}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} className={classes.root}>
            <AppBar component="nav" color="default">
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ mr: 4, display: { xs: "none", sm: "block" } }}>
                            Trend In One
                        </Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.title}
                                    color="inherit"
                                    onClick={() => {
                                        handleOnClick(item.url);
                                    }}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>
                        <DarkmodeToggle />
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Container component="main" maxWidth="lg" sx={{ flex: 1 }}>
                <Toolbar />
                {props.children}
            </Container>
        </Box>
    );
};

export default Layout;
