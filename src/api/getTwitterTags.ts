import axios from "axios";

const getTwitterTags = async () => {
    try {
        const result = await axios.get(`http://${process.env.REACT_APP_API_URL}/topics/23424868`);
        return result.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export default getTwitterTags;
