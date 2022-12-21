import axios from "axios";

const getPosts = async () => {
    try {
        const result = await axios.get("http://localhost:13000/posts", {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        console.log(result);
        return result.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export default getPosts;
