import { useInfiniteQuery } from "react-query";
import getVideos from "../api/getVideos";

const useGetVideosInfiniteScrollQuery = () => {
    const {
        data: getVideo,
        fetchNextPage: getNextVideo,
        isSuccess: getVideoIsSuccess,
        hasNextPage: getNextVideoIsPossible,
        isLoading: getIsLoading,
    } = useInfiniteQuery(["page_videos_list"], getVideos, {
        getNextPageParam: (value) => {
            const isLastPage = value.current_page == value.totalPages;
            if (!isLastPage) return value.current_page + 1;
            return undefined;
        },
    });

    return { getVideo, getNextVideo, getVideoIsSuccess, getNextVideoIsPossible, getIsLoading };
};

export default useGetVideosInfiniteScrollQuery;
