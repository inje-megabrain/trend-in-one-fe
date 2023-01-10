import Layout from "../../components/Layout";
import DCinside from "../../components/SubPage/DCinside";
import useGetPostInfiniteScrollQuery from "../../query/useGetPostInfiniteScrollQuery";

const DCinsideSubPage = () => {
    const scrollQueryProps = useGetPostInfiniteScrollQuery("DC_INSIDE");

    return <Layout>{!scrollQueryProps.getIsLoading && <DCinside {...scrollQueryProps} />}</Layout>;
};

export default DCinsideSubPage;
