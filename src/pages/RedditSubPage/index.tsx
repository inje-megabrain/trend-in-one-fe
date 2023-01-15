import Layout from "../../components/Layout";
import Reddit from "../../components/SubPage/Reddit";
import useGetREDDITInfiniteScrollQuery from "../../query/useGetREDDITInfiniteScrollQuery";

const RedditSubPage = () => {
    const scrollQueryProps = useGetREDDITInfiniteScrollQuery();

    return <Layout>{!scrollQueryProps.getIsLoading && <Reddit {...scrollQueryProps} />}</Layout>;
};

export default RedditSubPage;
