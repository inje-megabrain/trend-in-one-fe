import { Box, Divider, Grid, Typography } from "@mui/material";
import { Post } from "../../types/post.d";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImageSelector from "../utils/ImageSelectorComponent";
type Props = {
    posts: Post[];
};

const PostList = ({ posts }: Props) => {
    return (
        <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mt: 5, mb: 4, textAlign: "center", color: "text.primary" }}>
                Today's Trend
            </Typography>

            {posts.map((post, index) => (
                <a
                    key={post.id}
                    href={`https://www.reddit.com${post.postUrl}`}
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <Grid container sx={{ color: "text.primary" }}>
                        <Grid
                            item
                            xs={1}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mr: 2,
                            }}
                        >
                            <h3>{index + 1}</h3>
                        </Grid>
                        <Grid
                            item
                            xs={1}
                            sx={{ mr: 4, display: "flex", alignItems: "center", justifyContent: "center" }}
                        >
                            <div
                                style={{
                                    height: "15vh",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <ImageSelector communityTitle={"Reddit"} />
                            </div>
                        </Grid>
                        <Grid item xs={7.5} sx={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <h2 className="name text-dark">{post.title}</h2>
                                <span>{post.uploadedAt.toLocaleString()}</span>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={1}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <Grid item xs={8} sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                                <div>
                                    <Typography>
                                        <VisibilityIcon fontSize="small" sx={{ verticalAlign: "middle" }} />:
                                        {post.views}
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
            ))}
        </Box>
    );
};

export default PostList;
