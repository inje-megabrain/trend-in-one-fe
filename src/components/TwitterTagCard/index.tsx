import { Box, Divider } from "@mui/material";
import { LinkTextH3 } from "../../styles/TextStyles.styles";
import { TwitterTag } from "../../types/post.d";
import RepeatIcon from "@mui/icons-material/Repeat";

type Props = {
    post: TwitterTag;
    index: number;
    lastIndex?: number;
};

const TwitterTagCard = ({ post, index, lastIndex = 9999 }: Props) => {
    return (
        <>
            <Box sx={{ height: "70px" }}>
                <Box>
                    <a href={post.url} target="_blank" style={{ textDecoration: "none" }}>
                        <Box sx={{ color: "text.primary" }}>
                            <LinkTextH3 className="name text-dark">{post.name}</LinkTextH3>
                        </Box>
                    </a>
                </Box>
                {post.tweet_volume && (
                    <Box sx={{ mt: -2, color: "text.secondary" }}>
                        <h5>
                            <>
                                <RepeatIcon fontSize="small" sx={{ verticalAlign: "middle" }} /> {post.tweet_volume}
                            </>
                        </h5>
                    </Box>
                )}
            </Box>
            {index !== lastIndex - 1 && <Divider />}
        </>
    );
};

export default TwitterTagCard;
