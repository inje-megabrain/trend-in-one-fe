import Lottie from "react-lottie";
import WhiteLoadingData from "../../lotties/LoadingWhite.json";
import BlackLoadingData from "../../lotties/LoadingBlack.json";
import { useEffect } from "react";

type Props = {
    isDark: boolean;
};

const LoadingAnimation = ({ isDark }: Props) => {
    const defaultOption = {
        loop: true,
        autoplay: true,
        animationData: isDark ? BlackLoadingData : WhiteLoadingData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return <Lottie options={defaultOption} height={400} width={400} />;
};

export default LoadingAnimation;
