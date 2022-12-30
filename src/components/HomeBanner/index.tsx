import { Box, Typography } from "@mui/material";
import { LinkTextH2 } from "../../styles/TextStyles.styles";

type Props = {
    communityTitle: string;
    url?: string;
};

const HomeBanner = ({ communityTitle, url }: Props) => {
    return (
        <Box
            sx={{
                display: "flex",
                bgcolor: "secondary.main",
                width: "100%",
                height: "85px",
                opacity: 0.8,
                borderRadius: "20px",
                backgroundImage: "url('https://www.transparenttextures.com/patterns/always-grey.png')",
                boxShadow: "0 3px 5px rgba(0, 0, 0, 0.35)",
                position: "relative",
            }}
        >
            <a href={`/${url}`} target="_blank" style={{ textDecoration: "none" }}>
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        margin: 0,
                        transform: "translateY(-50%)",
                        marginLeft: "30px",
                        display: "flex",
                    }}
                >
                    {communityTitle == "Twitter" ? (
                        <img
                            src="assets/images/twitter-logo.webp"
                            style={{
                                objectFit: "cover",
                                width: "60px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                display: "block",
                            }}
                        ></img>
                    ) : communityTitle === "DC Inside" ? (
                        <img
                            src="assets/images/dcinside-logo.webp"
                            style={{
                                objectFit: "cover",
                                width: "60px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                display: "block",
                            }}
                        ></img>
                    ) : communityTitle === "Reddit" ? (
                        <img
                            src="assets/images/reddit-logo.webp"
                            style={{
                                objectFit: "cover",
                                width: "60px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                display: "block",
                            }}
                        ></img>
                    ) : (
                        <></>
                    )}
                    <Box sx={{ color: "text.primary", margin: "auto" }}>
                        <LinkTextH2>{communityTitle}</LinkTextH2>
                    </Box>
                </div>
            </a>
        </Box>
    );
};

export default HomeBanner;
