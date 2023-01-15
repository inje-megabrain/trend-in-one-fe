import { useAtom } from "jotai";
import Layout from "../../components/Layout";
import LoadingAnimation from "../../components/LoadingAnimation";
import PostList from "../../components/PostList";
import useGetPostInfiniteScrollQuery from "../../query/useGetDCINSIDEInfiniteScrollQuery";
import { darkModeAtom } from "../../state/darkmode";

const Trends = () => {
    const scrollQueryProps = useGetPostInfiniteScrollQuery();
    const [toggleDark, settoggleDark] = useAtom(darkModeAtom);

    return (
        <Layout>
            {scrollQueryProps.getIsLoading ? (
                <LoadingAnimation isDark={toggleDark == "light"} />
            ) : (
                <PostList {...scrollQueryProps} />
            )}
        </Layout>
    );
};

export default Trends;
