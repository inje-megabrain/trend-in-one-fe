import { Box, Typography } from "@mui/material";
import { TwitterTag } from "../../types/post.d";
import HomeBanner from "../HomeBanner";
import TwitterTagCard from "../TwitterTagCard";

type Props = {
    data: any;
    isLoading: boolean;
    isFetched: boolean;
};

const HomeTwitterSection = ({ data, isLoading, isFetched }: Props) => {
    return (
        <div>
            <HomeBanner communityTitle="Twitter" subTitle="현재 트랜드" />
            <Box sx={{ pl: 1, pr: 1 }}>
                {!isLoading &&
                    isFetched &&
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
