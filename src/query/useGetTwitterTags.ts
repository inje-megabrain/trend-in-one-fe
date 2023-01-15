import { useQuery } from "react-query";
import getTwitterTags from "../api/getTwitterTags";

const useGetTwitterTags = () => {
    return useQuery(["twitter_tags"], getTwitterTags);
};

export default useGetTwitterTags;
