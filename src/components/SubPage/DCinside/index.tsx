import { Box, Typography } from "@mui/material";
import { FetchNextPageOptions, InfiniteData } from "react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PostCard from "../../PostCard";
import { Post } from "../../../types/post.d";

type Props = {
    getPost:
        | InfiniteData<{
              post_page: Post[];
              current_page: number;
              totalPages: number;
          }>
        | undefined;
    getNextPage: (options?: FetchNextPageOptions | undefined) => Promise<any>;
    getPostIsSuccess: boolean;
    getNextPageIsPossible: boolean | undefined;
    getIsLoading: boolean;
};

const DCinside = ({ getPost, getNextPage, getPostIsSuccess, getNextPageIsPossible }: Props) => {
    const [ref, isView] = useInView();
    useEffect(() => {
        if (isView && getNextPageIsPossible) {
            getNextPage();
        }
    }, [isView, getPost]);
    return (
        <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mt: 5, mb: 4, textAlign: "center", color: "text.primary" }}>
                디씨 인사이드
            </Typography>
            {getPostIsSuccess &&
                getPost!.pages &&
                getPost?.pages.map((post, page_num) => {
                    const post_page = post.post_page;
                    return post_page.map((item: any, index: number) => {
                        if (getPost.pages.length - 1 === page_num && post_page.length - 1 === index) {
                            return (
                                <div ref={ref} key={item.id}>
                                    <PostCard post={item} />
                                </div>
                            );
                        } else {
                            return (
                                <div key={item.id}>
                                    <PostCard post={item} />
                                </div>
                            );
                        }
                    });
                })}
        </Box>
    );
};

export default DCinside;
