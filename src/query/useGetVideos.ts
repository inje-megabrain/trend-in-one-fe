import { useQuery } from "react-query";
import getVideos from "../api/getVideos";

const useGetVideos = () => {
    return useQuery(["videos"], getVideos);
};

export default useGetVideos;
