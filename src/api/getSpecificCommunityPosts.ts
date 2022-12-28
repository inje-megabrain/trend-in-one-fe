import axios from "axios";

type Props = {
    communityTitle: string;
    pageParam?: number;
};

const getSpecificCommunityPosts = async ({ communityTitle, pageParam = 1 }: Props) => {
    try {
        const result = await axios.get(`http://localhost:13000/posts/${communityTitle}?page=${pageParam}&limit=4`, {
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

export default getSpecificCommunityPosts;
