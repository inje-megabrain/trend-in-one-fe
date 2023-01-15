import axios from "axios";

type Props = {
    pageParam?: number;
};

const getDCINSIDEPosts = async ({ pageParam = 1 }: Props) => {
    try {
        const result = await axios.get(
            `http://${process.env.REACT_APP_API_URL}/content/posts/DC_INSIDE?page=${pageParam}&limit=10`,
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

export default getDCINSIDEPosts;
