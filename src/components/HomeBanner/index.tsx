import { Box, Typography } from "@mui/material";

type Props = {
    communityTitle: string;
    subTitle?: string;
};

const HomeBanner = ({ communityTitle, subTitle }: Props) => {
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
                <Typography
                    sx={{
                        fontWeight: 700,
                        margin: "auto",
                        ml: "10px",
                        color: "text.primary",
                    }}
                    variant="h5"
                >
                    {communityTitle}
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 500,
                        margin: "auto",
                        ml: "10px",
                        color: "text.primary",
                    }}
                    variant="h6"
                >
                    {subTitle}
                </Typography>
            </div>
        </Box>
    );
};

export default HomeBanner;
