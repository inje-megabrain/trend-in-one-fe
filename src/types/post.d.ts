export interface Post {
    id: string;
    title: string;
    author: string;
    views: number | null;
    likes: number | null;
    hasImage: boolean;
    postUrl: string;
    uploadedAt: Date;
    communityTitle: string; // ENUM, Reddit, Twitter, dcinside
}

export interface Video {
    id: string;
    videoId: string;
    videoUrl: string;
    title: string;
    description: string;
    thumbnailUri: string;
    channelTitle: string;
    uploadedAt: Date;
}

export interface TwitterTag {
    name: string;
    query: string;
    tweet_volume: number | null;
    url: string;
}
