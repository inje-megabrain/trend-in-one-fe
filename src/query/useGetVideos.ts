import { useQuery } from "react-query";
import getVideos from "../api/getVideos";

const useGetSpecificCommunityPosts = () => {
    return useQuery(["videos"], getVideos);
};

export default useGetSpecificCommunityPosts;
