//types for blog posts

export type BlogPostData = {
    title: string;
    brief: string;
    slug: string;
    publishedAt: string;
    coverImage: {
        attribution?: string;
        url: string;
    };
    content: {
        markdown: string;
    };
}