import Layout from "../../components/Layout";
import DCinside from "../../components/SubPage/DCinside";
import useGetDCINSIDEInfiniteScrollQuery from "../../query/useGetDCINSIDEInfiniteScrollQuery";

const DCinsideSubPage = () => {
    const scrollQueryProps = useGetDCINSIDEInfiniteScrollQuery();

    return <Layout>{!scrollQueryProps.getIsLoading && <DCinside {...scrollQueryProps} />}</Layout>;
};

export default DCinsideSubPage;
