export interface Post {
    id: string;
     title: string;
     slug: string;
     subtitle: string;
     brief: string;
     coverImage: {
         url: string;
         isPortrait: boolean;
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
         tagline: string;
     };
     canonicalUrl: string;
     series: {
         id: string;
         name: string;
     }[];
     views: number;
     readTimeInMinutes: number;
     seo: {
         title: string;
         description: string;
     };
     content: {
         markdown: string;
         html: string;
     }
 }