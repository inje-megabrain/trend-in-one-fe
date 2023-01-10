import { Box } from "@mui/material";
import useGetVideos from "../../query/useGetVideos";
import { Video } from "../../types/post.d";
import HomeBanner from "../HomeBanner";
import MiniVideoCard from "../MiniVideoCard";

const HomeYoutubeSection = () => {
    const { data, isLoading } = useGetVideos();
    return (
        <div>
            <HomeBanner communityTitle="Youtube" url="youtube" />
            <Box sx={{ pl: 1, pr: 1 }}>
                {!isLoading &&
                    data?.post_page.slice(0, 4).map((post: Video, index: number) => {
                        return <MiniVideoCard post={post} key={post.id} index={index} lastIndex={4} />;
                    })}
            </Box>
        </div>
    );
};

export default HomeYoutubeSection;
