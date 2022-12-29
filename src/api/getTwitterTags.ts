import axios from "axios";

const getTwitterTags = async () => {
    try {
        const result = await axios.get("http://localhost:13000/topics/23424868", {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        return result.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export default getTwitterTags;
