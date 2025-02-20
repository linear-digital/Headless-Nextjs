import { Publication } from "@/types/publication";

const HASHNODE_API = process.env.NEXT_PUBLIC_HASHNODE_GQL || "";

const PUBLICATION = process.env.HASHNODE_PUBLICATION || "";
const fetchPublicationInfo = async (): Promise<Publication | null> => {
  const query = {
    query: `query {
      publication(host: "${PUBLICATION}") {
        id
        title
        descriptionSEO
        url
        favicon
        author {
          id
          name
          username
          profilePicture
        }
        ogMetaData {
          image
        }
      }
    }`,
  };

  try {
    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
      cache: "no-cache",
    });

    const data = await response.json();
    return data.data?.publication;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchPublicationInfo;
