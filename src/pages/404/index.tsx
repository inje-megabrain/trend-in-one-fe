import { Typography } from "@mui/material";
import Layout from "../../components/Layout";

const ErrorPage = () => {
    return (
        <Layout>
            <Typography variant="h4" sx={{ color: "text.primary", mt: 3 }}>
                Error 잘못된 요청입니다.
            </Typography>
        </Layout>
    );
};

export default ErrorPage;
