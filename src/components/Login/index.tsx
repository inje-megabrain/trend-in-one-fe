import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../Layout";

const Login = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    const classes = useStyles();
    const navigate = useNavigate();
    const handleOnClick = React.useCallback((url: string) => navigate(url, { replace: true }), [navigate]);

    return (
        <Box sx={{ flexDirection: "column", minHeight: "100vh" }} className={classes.root}>
            <Container maxWidth="sm">
                <Box sx={{ pt: 5, pb: 5, textAlign: "center" }}>
                    <Typography variant="h2" fontWeight={400}>
                        <span role="img" aria-label="waving hand">
                            👋
                        </span>
                    </Typography>
                </Box>

                <Typography sx={{ color: "text.primary", textAlign: "center", typography: { xs: "h6", sm: "h4" } }}>
                    국내 실시간 트렌드 시각화 플랫폼
                </Typography>
                <Typography
                    sx={{
                        color: "text.primary",
                        textAlign: "center",
                        typography: { xs: "h6", sm: "h4" },
                        textDecoration: "underline",
                    }}
                    onClick={() => {
                        handleOnClick("/");
                    }}
                >
                    <span style={{ fontWeight: "bold" }}>Trend In One</span>
                </Typography>
                <Typography
                    sx={{ color: "text.secondary", textAlign: "center", typography: { xs: "body1", sm: "h6" }, mt: 3 }}
                >
                    Trend In One은 국내 플랫폼 정보 알림 서비스 입니다
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#fee502",
                            width: "400px",
                            height: "60px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            ":hover": {
                                bgcolor: "#fee502",
                            },
                        }}
                        onClick={() => {
                            handleLogin();
                        }}
                    >
                        <img
                            src="assets/images/kakao_png.webp"
                            width={30}
                            style={{ position: "absolute", left: 30 }}
                        ></img>
                        <Typography variant="h6" sx={{ fontWeight: 600 }} color={"black"}>
                            카카오로 바로 시작
                        </Typography>
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;
