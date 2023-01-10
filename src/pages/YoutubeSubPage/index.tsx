import Layout from "../../components/Layout";
import DCinside from "../../components/SubPage/DCinside";
import Youtube from "../../components/SubPage/Youtube";
import useGetPostInfiniteScrollQuery from "../../query/useGetPostInfiniteScrollQuery";

const YoutubeSubPage = () => {
    const scrollQueryProps = useGetPostInfiniteScrollQuery("DC_INSIDE");

    return <Layout>{!scrollQueryProps.getIsLoading && <Youtube {...scrollQueryProps} />}</Layout>;
};

export default YoutubeSubPage;
