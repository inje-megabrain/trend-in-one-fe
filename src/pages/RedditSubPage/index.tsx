import Layout from "../../components/Layout";
import Reddit from "../../components/SubPage/Reddit";
import useGetPostInfiniteScrollQuery from "../../query/useGetPostInfiniteScrollQuery";

const RedditSubPage = () => {
    const scrollQueryProps = useGetPostInfiniteScrollQuery("REDDIT");

    return <Layout>{!scrollQueryProps.getIsLoading && <Reddit {...scrollQueryProps} />}</Layout>;
};

export default RedditSubPage;
