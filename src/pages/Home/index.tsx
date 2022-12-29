import { Container, Grid } from "@mui/material";
import HomeDCInsideSection from "../../components/HomeDCInsideSection";
import HomeRedditSection from "../../components/HomeRedditSection";
import HomeTwitterSection from "../../components/HomeTwitterSection";
import Layout from "../../components/Layout";

const Home = () => {
    return (
        <Layout>
            <Container maxWidth="lg">
                <Grid container sx={{ mt: 6 }} rowGap={6}>
                    <Grid xs={5.5} item>
                        <HomeTwitterSection />
                    </Grid>
                    {/* dummy section */}
                    <Grid xs={1}></Grid>
                    <Grid xs={5.5} item>
                        <HomeDCInsideSection />
                    </Grid>
                    <Grid xs={5.5} item>
                        <HomeRedditSection />
                    </Grid>
                    {/* dummy section */}
                    <Grid xs={1}></Grid>
                    <Grid xs={5.5} item></Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Home;
