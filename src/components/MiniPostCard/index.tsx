import { Divider } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Post } from "../../types/post.d";
import { Box } from "@mui/material";
import { LinkTextH3 } from "../../styles/TextStyles.styles";
type Props = {
    post: Post;
    index: number;
    lastIndex?: number;
};

const MiniPostCard = ({ post, index, lastIndex = 9999 }: Props) => {
    return (
        <>
            <Box sx={{ height: "70px" }}>
                <a href={post.postUrl} target="_blank" style={{ textDecoration: "none" }}>
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

                <Box sx={{ mt: -2, color: "text.secondary" }}>
                    <h5>
                        {post.views && (
                            <>
                                <VisibilityIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
                                {post.views}
                            </>
                        )}
                        &nbsp;
                        {post.likes && (
                            <>
                                <FavoriteIcon fontSize="small" sx={{ verticalAlign: "middle" }} /> {post.likes}
                            </>
                        )}
                    </h5>
                </Box>
            </Box>
            {index !== lastIndex - 1 && <Divider />}
        </>
    );
};

export default MiniPostCard;
