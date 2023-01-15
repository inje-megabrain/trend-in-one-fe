import axios from "axios";

const getPosts = async ({ pageParam = 1 }) => {
    try {
        const result = await axios.get(`http://${process.env.REACT_APP_API_URL}/content/posts?page=${pageParam}&limit=10`,{
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        return {
            post_page: result.data.items,
            current_page: result.data.meta.currentPage,
            totalPages: result.data.meta.totalPages,
        };
    } catch (error) {
        return Promise.reject(error);
    }
};

export default getPosts;
