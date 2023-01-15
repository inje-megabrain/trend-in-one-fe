import { useAtom } from "jotai";
import Layout from "../../components/Layout";
import LoadingAnimation from "../../components/LoadingAnimation";
import Youtube from "../../components/SubPage/Youtube";
import useGetVideosInfiniteScrollQuery from "../../query/useGetVideosInfiniteScrollQuery";
import { darkModeAtom } from "../../state/darkmode";

const YoutubeSubPage = () => {
    const scrollQueryProps = useGetVideosInfiniteScrollQuery();
    const [toggleDark, settoggleDark] = useAtom(darkModeAtom);

    return (
        <Layout>
            {scrollQueryProps.getIsLoading ? (
                <LoadingAnimation isDark={toggleDark == "light"} />
            ) : (
                <Youtube {...scrollQueryProps} />
            )}
        </Layout>
    );
};

export default YoutubeSubPage;
