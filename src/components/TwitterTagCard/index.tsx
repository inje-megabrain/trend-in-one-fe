import { Divider, Grid, Typography } from "@mui/material";
import { TwitterTag } from "../../types/post.d";
type Props = {
    post: TwitterTag;
    index: number;
    lastIndex?: number;
};

const TwitterTagCard = ({ post, index, lastIndex = 9999 }: Props) => {
    return (
        <a href={post.url} target="_blank" style={{ textDecoration: "none", color: "black" }}>
            <Grid container sx={{ color: "text.primary", height: "88px" }}>
                <Grid item xs={11} sx={{ display: "flex", alignItems: "center" }}>
                    <div>
                        <h3 className="name text-dark">{post.name}</h3>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <h3 className="name text-dark">{post.tweet_volume ? 0 : 0}</h3>
                </Grid>
            </Grid>
            {index !== lastIndex - 1 && <Divider />}
        </a>
    );
};

export default TwitterTagCard;
