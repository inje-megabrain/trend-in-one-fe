import { Container, Grid } from "@mui/material";
import HomeDCInsideSection from "../../components/HomeDCInsideSection";
import HomeTwitterSection from "../../components/HomeTwitterSection";
import Layout from "../../components/Layout";

const Home = () => {
    return (
        <Layout>
            <Container maxWidth="lg">
                <Grid container sx={{ mt: 6 }}>
                    <Grid xs={5.5} item>
                        <HomeTwitterSection />
                    </Grid>
                    {/* dummy section */}
                    <Grid xs={1}></Grid>
                    <Grid xs={5.5} item>
                        <HomeDCInsideSection />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Home;
