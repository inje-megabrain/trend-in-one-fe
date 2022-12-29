import { useQuery } from "react-query";
import getSpecificCommunityPosts from "../api/getSpecificCommunityPosts";

const useGetSpecificCommunityPosts = (communityTitle: string) => {
    return useQuery(["specificTags", communityTitle], ({ queryKey }) =>
        getSpecificCommunityPosts({ communityTitle: queryKey[1] }),
    );
};

export default useGetSpecificCommunityPosts;
