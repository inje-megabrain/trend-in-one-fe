import { Divider } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Video } from "../../types/post.d";
import { Box } from "@mui/material";
import { LinkTextH3 } from "../../styles/TextStyles.styles";
type Props = {
    post: Video;
    index: number;
    lastIndex?: number;
};

const MiniVideoCard = ({ post, index, lastIndex = 9999 }: Props) => {
    return (
        <>
            <Box sx={{ height: "70px" }}>
                <a href={post.videoUrl} target="_blank" style={{ textDecoration: "none" }}>
                    <Box sx={{ color: "text.primary" }}>
                        <LinkTextH3
                            style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {post.title}
                        </LinkTextH3>
                    </Box>
                </a>
            </Box>
            {index !== lastIndex - 1 && <Divider />}
        </>
    );
};

export default MiniVideoCard;
