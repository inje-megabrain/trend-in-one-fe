import { Container, Grid } from "@mui/material";
import HomeDCInsideSection from "../../components/HomeDCInsideSection";
import HomeRedditSection from "../../components/HomeRedditSection";
import HomeTwitterSection from "../../components/HomeTwitterSection";
import HomeYoutubeSection from "../../components/HomeYoutubeSection";
import Layout from "../../components/Layout";

const Home = () => {
    return (
        <Layout>
            <Container maxWidth="lg">
                <Grid container sx={{ mt: 6 }} rowGap={6} columnSpacing={10}>
                    <Grid xs={12} md={6} item>
                        <HomeDCInsideSection />
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <HomeYoutubeSection />
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <HomeTwitterSection />
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <HomeRedditSection />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Home;
