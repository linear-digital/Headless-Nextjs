export interface Publication {
    id: string;
    title: string;
    descriptionSEO: string;
    url: string;
    author: {
        id: string;
        name: string;
        username: string;
        profilePicture: string;
    };
    ogMetaData: {
        image: string;
    };
    favicon: string;
}