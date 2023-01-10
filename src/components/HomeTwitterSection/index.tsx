import { Box, Typography } from "@mui/material";
import useGetTwitterTags from "../../query/useGetTwitterTags";
import { TwitterTag } from "../../types/post.d";
import HomeBanner from "../HomeBanner";
import TwitterTagCard from "../TwitterTagCard";

const HomeTwitterSection = () => {
    const { data, isLoading } = useGetTwitterTags();
    return (
        <div>
            <HomeBanner communityTitle="Twitter" subTitle="현재 트랜드" />
            <Box sx={{ pl: 1, pr: 1 }}>
                {!isLoading &&
                    data
                        .slice(0, 4)
                        .map((post: TwitterTag, index: number) => (
                            <TwitterTagCard post={post} index={index} lastIndex={4} key={post.query} />
                        ))}
            </Box>
        </div>
    );
};

export default HomeTwitterSection;
