import fetchPublicationInfo from "@/lib/hasnode/publication";

export default async function Footer() {
  const publisher = await fetchPublicationInfo();
  return (
    <footer className="border-t bg-background">
      <div className="py-8 text-center text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {publisher?.title}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
