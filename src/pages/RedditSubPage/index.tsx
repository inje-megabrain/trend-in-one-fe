import { useAtom } from "jotai";
import Layout from "../../components/Layout";
import LoadingAnimation from "../../components/LoadingAnimation";
import Reddit from "../../components/SubPage/Reddit";
import useGetREDDITInfiniteScrollQuery from "../../query/useGetREDDITInfiniteScrollQuery";
import { darkModeAtom } from "../../state/darkmode";

const RedditSubPage = () => {
    const scrollQueryProps = useGetREDDITInfiniteScrollQuery();
    const [toggleDark, settoggleDark] = useAtom(darkModeAtom);

    return (
        <Layout>
            {scrollQueryProps.getIsLoading ? (
                <LoadingAnimation isDark={toggleDark == "light"} />
            ) : (
                <Reddit {...scrollQueryProps} />
            )}
        </Layout>
    );
};

export default RedditSubPage;
