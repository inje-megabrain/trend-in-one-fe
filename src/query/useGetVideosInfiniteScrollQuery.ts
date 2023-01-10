import { useInfiniteQuery } from "react-query";
import getVideos from "../api/getVideos";

const useGetVideosInfiniteScrollQuery = () => {
    const {
        data: getPost,
        fetchNextPage: getNextPage,
        isSuccess: getPostIsSuccess,
        hasNextPage: getNextPageIsPossible,
        isLoading: getIsLoading,
    } = useInfiniteQuery(["page_videos_list"], getVideos, {
        getNextPageParam: (value) => {
            const isLastPage = value.current_page == value.totalPages;
            if (!isLastPage) return value.current_page + 1;
            return undefined;
        },
    });

    return { getPost, getNextPage, getPostIsSuccess, getNextPageIsPossible, getIsLoading };
};

export default useGetVideosInfiniteScrollQuery;
