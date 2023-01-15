import { Box } from "@mui/material";
import { Post } from "../../types/post.d";
import HomeBanner from "../HomeBanner";
import MiniPostCard from "../MiniPostCard";

type Props = {
    data: any;
    isLoading: boolean;
    isFetched: boolean;
};

const HomeRedditSection = ({ data, isLoading, isFetched }: Props) => {
    return (
        <div>
            <HomeBanner communityTitle="Reddit" url="reddit" />
            <Box sx={{ pl: 1, pr: 1 }}>
                {!isLoading &&
                    isFetched &&
                    data?.post_page.slice(0, 4).map((post: Post, index: number) => {
                        return <MiniPostCard post={post} key={post.id} index={index} lastIndex={4} />;
                    })}
            </Box>
        </div>
    );
};

export default HomeRedditSection;
