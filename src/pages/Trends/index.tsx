import Layout from "../../components/Layout";
import PostList from "../../components/PostList";
import useGetPostInfiniteScrollQuery from "../../query/useGetDCINSIDEInfiniteScrollQuery";

const Trends = () => {
    const scrollQueryProps = useGetPostInfiniteScrollQuery();

    return <Layout>{!scrollQueryProps.getIsLoading && <PostList {...scrollQueryProps} />}</Layout>;
};

export default Trends;
