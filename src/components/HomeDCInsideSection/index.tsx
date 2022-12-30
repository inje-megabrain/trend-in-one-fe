import { Box } from "@mui/material";
import useGetSpecificCommunityPosts from "../../query/useGetSpecificCommunityPosts";
import { Post } from "../../types/post.d";
import HomeBanner from "../HomeBanner";
import MiniPostCard from "../MiniPostCard";

const HomeDCInsideSection = () => {
    const { data, isLoading } = useGetSpecificCommunityPosts("DC Inside");
    return (
        <div>
            <HomeBanner communityTitle="DC Inside" url="dcinside" />
            <Box sx={{ pl: 1, pr: 1 }}>
                {!isLoading &&
                    data?.post_page.map((post: Post, index: number) => {
                        return <MiniPostCard post={post} key={post.id} index={index} lastIndex={4} />;
                    })}
            </Box>
        </div>
    );
};

export default HomeDCInsideSection;
