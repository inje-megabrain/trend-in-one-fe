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
