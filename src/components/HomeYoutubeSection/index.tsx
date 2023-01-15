import { Box } from "@mui/material";
import { Video } from "../../types/post.d";
import HomeBanner from "../HomeBanner";
import MiniVideoCard from "../MiniVideoCard";

type Props = {
    data: any;
    isLoading: boolean;
    isFetched: boolean;
};

const HomeYoutubeSection = ({ data, isLoading, isFetched }: Props) => {
    return (
        <div>
            <HomeBanner communityTitle="Youtube" url="youtube" />
            <Box sx={{ pl: 1, pr: 1 }}>
                {!isLoading &&
                    isFetched &&
                    data?.post_page.slice(0, 4).map((post: Video, index: number) => {
                        return <MiniVideoCard post={post} key={post.id} index={index} lastIndex={4} />;
                    })}
            </Box>
        </div>
    );
};

export default HomeYoutubeSection;
