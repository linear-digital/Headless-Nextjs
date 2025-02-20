import Blogs from "@/components/Blog/Blogs";
import FeaturedPost from "@/components/Home/Banner";

export default async function Home() {
  return (
    <main>
      <FeaturedPost />
      <Blogs />
    </main>
  );
}
