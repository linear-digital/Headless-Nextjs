import fetchPublicationInfo from "@/lib/hasnode/publication";

export default async function Icon () {
    const publication = await fetchPublicationInfo();
    const favicon = publication?.favicon || "";
    return (
        <link rel="icon" href={favicon
        } />
    );
}