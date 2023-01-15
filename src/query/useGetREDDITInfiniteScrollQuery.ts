import { useInfiniteQuery } from "react-query";
import getREDDITPosts from "../api/getREDDITPosts";

const useGetREDDITInfiniteScrollQuery = () => {
    const {
        data: getPost,
        fetchNextPage: getNextPage,
        isSuccess: getPostIsSuccess,
        hasNextPage: getNextPageIsPossible,
        isLoading: getIsLoading,
    } = useInfiniteQuery(["page_post_list"], getREDDITPosts, {
        getNextPageParam: (value) => {
            const isLastPage = value.current_page == value.totalPages;
            if (!isLastPage) return value.current_page + 1;
            return undefined;
        },
    });

    return { getPost, getNextPage, getPostIsSuccess, getNextPageIsPossible, getIsLoading };
};

export default useGetREDDITInfiniteScrollQuery;
