import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../../../components/Login";

const KakaoLogin = () => {
    const location = useLocation();
    const KAKAO_CODE = location.search.split("=")[1];

    const navigate = useNavigate();
    const handleOnClick = useCallback((url: string) => navigate(url, { replace: true }), [navigate]);

    useEffect(() => {
        if (!location.search) return;
    }, []);
    return <></>;
};

export default KakaoLogin;
