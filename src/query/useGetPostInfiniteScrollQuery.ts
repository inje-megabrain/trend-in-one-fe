import { useInfiniteQuery } from "react-query";
import getPosts from "../api/getPosts";
import getSpecificCommunityPosts from "../api/getSpecificCommunityPosts";

const useGetPostInfiniteScrollQuery = (communityTiitle?: string) => {
    const {
        data: getPost,
        fetchNextPage: getNextPage,
        isSuccess: getPostIsSuccess,
        hasNextPage: getNextPageIsPossible,
        isLoading: getIsLoading,
    } = useInfiniteQuery(
        ["page_post_list"],
        !communityTiitle ? getPosts : () => getSpecificCommunityPosts({ communityTitle: communityTiitle }),
        {
            getNextPageParam: (value) => {
                const isLastPage = value.current_page == value.totalPages;
                if (!isLastPage) return value.current_page + 1;
                return undefined;
            },
        },
    );

    return { getPost, getNextPage, getPostIsSuccess, getNextPageIsPossible, getIsLoading };
};

export default useGetPostInfiniteScrollQuery;
