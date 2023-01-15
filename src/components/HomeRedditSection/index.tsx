import { Box } from "@mui/material";
import useGetSpecificCommunityPosts from "../../query/useGetSpecificCommunityPosts";
import { Post } from "../../types/post.d";
import HomeBanner from "../HomeBanner";
import MiniPostCard from "../MiniPostCard";

const HomeRedditSection = () => {
    const { data, isLoading, isFetched } = useGetSpecificCommunityPosts("REDDIT");
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
