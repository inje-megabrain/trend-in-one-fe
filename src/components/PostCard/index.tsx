import { Divider, Grid, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImageSelector from "../utils/ImageSelectorComponent";
import { Post } from "../../types/post.d";
type Props = {
    post: Post;
};

const PostCard = ({ post }: Props) => {
    return (
        <a href={post.postUrl} target="_blank" style={{ textDecoration: "none", color: "black" }}>
            <Grid container sx={{ color: "text.primary" }}>
                <Grid item xs={2} sx={{ mr: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div
                        style={{
                            height: "15vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ImageSelector communityTitle={post.communityTitle} />
                    </div>
                </Grid>
                <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
                    <div>
                        <h2 className="name text-dark">{post.title}</h2>
                        <span>{post.uploadedAt.toLocaleString()}</span>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={1.5}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Grid item xs={8} sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                        <div>
                            <Typography>
                                <VisibilityIcon fontSize="small" sx={{ verticalAlign: "middle" }} />:{post.views}
                            </Typography>
                            <Typography>
                                <FavoriteIcon fontSize="small" sx={{ verticalAlign: "middle" }} />:{post.likes}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
        </a>
    );
};

export default PostCard;
