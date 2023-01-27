import axios from "axios";

type Props = {
    pageParam?: number;
};

const postKakaoAuth = async ({ pageParam = 1 }: Props) => {
    try {
        const result = await axios.post(
            `http://${process.env.REACT_APP_API_URL}/auth/kakao/login`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
            {
                params: {
                    code: "",
                },
            },
        );
        return {
            post_page: result.data.items,
            current_page: result.data.meta.currentPage,
            totalPages: result.data.meta.totalPages,
        };
    } catch (error) {
        return Promise.reject(error);
    }
};

export default postKakaoAuth;
