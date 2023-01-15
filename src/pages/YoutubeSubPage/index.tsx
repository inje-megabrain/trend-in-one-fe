import Layout from "../../components/Layout";
import Youtube from "../../components/SubPage/Youtube";
import useGetVideosInfiniteScrollQuery from "../../query/useGetVideosInfiniteScrollQuery";

const YoutubeSubPage = () => {
    const scrollQueryProps = useGetVideosInfiniteScrollQuery();

    return <Layout>{!scrollQueryProps.getIsLoading && <Youtube {...scrollQueryProps} />}</Layout>;
};

export default YoutubeSubPage;
