import { Container, Grid } from "@mui/material";
import HomeDCInsideSection from "../../components/HomeDCInsideSection";
import HomeRedditSection from "../../components/HomeRedditSection";
import HomeTwitterSection from "../../components/HomeTwitterSection";
import HomeYoutubeSection from "../../components/HomeYoutubeSection";
import Layout from "../../components/Layout";
import useGetSpecificCommunityPosts from "../../query/useGetSpecificCommunityPosts";
import useGetVideos from "../../query/useGetVideos";
import useGetTwitterTags from "../../query/useGetTwitterTags";
import LoadingAnimation from "../../components/LoadingAnimation";
import { useAtom } from "jotai";
import { darkModeAtom } from "../../state/darkmode";

const Home = () => {
    const [toggleDark, settoggleDark] = useAtom(darkModeAtom);
    const dc_api = useGetSpecificCommunityPosts("DC_INSIDE");
    const youtube_api = useGetVideos();
    const twitter_api = useGetTwitterTags();
    const reddit_api = useGetSpecificCommunityPosts("REDDIT");
    const isLoading = dc_api.isLoading || youtube_api.isLoading || twitter_api.isLoading || reddit_api.isLoading;
    return (
        <Layout>
            {isLoading ? (
                <LoadingAnimation isDark={toggleDark == "light"} />
            ) : (
                <Container maxWidth="lg">
                    <Grid container sx={{ mt: 6 }} rowGap={6} columnSpacing={10}>
                        <Grid xs={12} md={6} item>
                            <HomeDCInsideSection {...dc_api} />
                        </Grid>
                        <Grid xs={12} md={6} item>
                            <HomeYoutubeSection {...youtube_api} />
                        </Grid>
                        <Grid xs={12} md={6} item>
                            <HomeTwitterSection {...twitter_api} />
                        </Grid>
                        <Grid xs={12} md={6} item>
                            <HomeRedditSection {...reddit_api} />
                        </Grid>
                    </Grid>
                </Container>
            )}
        </Layout>
    );
};

export default Home;
