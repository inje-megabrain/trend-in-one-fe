import { Divider } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Post } from "../../types/post.d";
import { Box } from "@mui/material";
type Props = {
    post: Post;
    index: number;
    lastIndex?: number;
};

const MiniPostCard = ({ post, index, lastIndex = 9999 }: Props) => {
    return (
        <a href={post.postUrl} target="_blank" style={{ textDecoration: "none", color: "black" }}>
            <Box sx={{ color: "text.primary", height: "70px" }}>
                <h3
                    style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    {post.title}
                </h3>
                <Box sx={{ mt: -2 }}>
                    <h5>
                        <VisibilityIcon fontSize="small" sx={{ verticalAlign: "middle" }} /> {post.views}
                        <FavoriteIcon fontSize="small" sx={{ verticalAlign: "middle" }} /> {post.likes}
                    </h5>
                </Box>
            </Box>
            {index !== lastIndex - 1 && <Divider />}
        </a>
    );
};

export default MiniPostCard;
