export interface Post {
    id: string;
     title: string;
     slug: string;
     subtitle: string;
     brief: string;
     coverImage: {
         url: string;
     };
     tags: {
         id: string;
         name: string;
         slug: string;
     }[];
     publishedAt: string;
     updatedAt: string;
     ogMetaData: {
        image: string;
     }
     author: {
         id: string;
         name: string;
         username: string;
         profilePicture: string;
     };
     canonicalUrl: string;
     series: {
         id: string;
         name: string;
     }[];
     views: number;
     seo: {
         title: string;
         description: string;
     };
     content: {
         markdown: string;
         html: string;
     }
 }