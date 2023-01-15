import { useAtom } from "jotai";
import Layout from "../../components/Layout";
import LoadingAnimation from "../../components/LoadingAnimation";
import DCinside from "../../components/SubPage/DCinside";
import useGetDCINSIDEInfiniteScrollQuery from "../../query/useGetDCINSIDEInfiniteScrollQuery";
import { darkModeAtom } from "../../state/darkmode";

const DCinsideSubPage = () => {
    const scrollQueryProps = useGetDCINSIDEInfiniteScrollQuery();
    const [toggleDark, settoggleDark] = useAtom(darkModeAtom);

    return (
        <Layout>
            {scrollQueryProps.getIsLoading ? (
                <LoadingAnimation isDark={toggleDark == "light"} />
            ) : (
                <DCinside {...scrollQueryProps} />
            )}
        </Layout>
    );
};

export default DCinsideSubPage;
