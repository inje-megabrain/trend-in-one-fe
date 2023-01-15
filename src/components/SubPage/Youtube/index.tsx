import { Box, Grid, Typography } from "@mui/material";
import { FetchNextPageOptions, InfiniteData } from "react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ThumbnailCard from "../../ThumbnailCard";
import { Video } from "../../../types/post.d";

type Props = {
    getVideo:
        | InfiniteData<{
              post_page: Video[];
              current_page: number;
              totalPages: number;
          }>
        | undefined;
    getNextVideo: (options?: FetchNextPageOptions | undefined) => Promise<any>;
    getVideoIsSuccess: boolean;
    getNextVideoIsPossible: boolean | undefined;
    getIsLoading: boolean;
};

const Youtube = ({ getVideo, getNextVideo, getVideoIsSuccess, getNextVideoIsPossible }: Props) => {
    const [ref, isView] = useInView();
    useEffect(() => {
        if (isView && getNextVideoIsPossible) {
            getNextVideo();
        }
    }, [isView, getVideo]);
    return (
        <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mt: 5, mb: 4, textAlign: "center", color: "text.primary" }}>
                유튜브 인기 동영상
            </Typography>
            <Grid container rowGap={3} columnSpacing={3}>
                {getVideoIsSuccess &&
                    getVideo!.pages &&
                    getVideo?.pages.map((post, page_num) => {
                        const post_page = post.post_page;
                        return post_page.map((item: Video, index: number) => {
                            if (getVideo.pages.length - 1 == page_num && post_page.length - 1 == index) {
                                return (
                                    <Grid item ref={ref} key={item.id} md={4} xs={6}>
                                        <ThumbnailCard video={item} />
                                    </Grid>
                                );
                            } else {
                                return (
                                    <Grid item key={item.id} md={4} xs={6}>
                                        <ThumbnailCard video={item} />
                                    </Grid>
                                );
                            }
                        });
                    })}
            </Grid>
        </Box>
    );
};

export default Youtube;
