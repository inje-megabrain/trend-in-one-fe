import { Box, Divider, Grid, Typography } from "@mui/material";
import { Video } from "../../types/post.d";
type Props = {
    video: Video;
};

const ThumbnailCard = ({ video }: Props) => {
    return (
        <a href={video.videoUrl} target="_blank" style={{ textDecoration: "none", color: "black" }}>
            <Box
                sx={{
                    color: "text.primary",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    maxWidth: "100%",
                    maxHeight: "100%",
                }}
            >
                <img src={video.thumbnailUri} style={{ maxWidth: "100%" }}></img>
                <p>{video.title}</p>
            </Box>
        </a>
    );
};

export default ThumbnailCard;
