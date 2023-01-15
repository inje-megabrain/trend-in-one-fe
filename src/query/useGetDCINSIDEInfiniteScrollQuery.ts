import { useInfiniteQuery } from "react-query";
import getDCINSIDEPosts from "../api/getDCINSIDEPosts";

const useGetDCINSIDEInfiniteScrollQuery = () => {
    const {
        data: getPost,
        fetchNextPage: getNextPage,
        isSuccess: getPostIsSuccess,
        hasNextPage: getNextPageIsPossible,
        isLoading: getIsLoading,
    } = useInfiniteQuery(["page_post_list"], getDCINSIDEPosts, {
        getNextPageParam: (value) => {
            const isLastPage = value.current_page == value.totalPages;
            if (!isLastPage) return value.current_page + 1;
            return undefined;
        },
    });

    return { getPost, getNextPage, getPostIsSuccess, getNextPageIsPossible, getIsLoading };
};

export default useGetDCINSIDEInfiniteScrollQuery;
