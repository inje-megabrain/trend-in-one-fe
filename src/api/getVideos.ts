import axios from "axios";

const getVideos = async () => {
    try {
        const result = await axios.get(`http://${process.env.REACT_APP_API_URL}/videos?page=1&limit=10`);
        return {
            post_page: result.data.items,
            current_page: result.data.meta.currentPage,
            totalPages: result.data.meta.totalPages,
        };
    } catch (error) {
        return Promise.reject(error);
    }
};

export default getVideos;
