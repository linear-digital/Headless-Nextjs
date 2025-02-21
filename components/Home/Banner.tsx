import Link from "next/link";

import { Post } from "@/types/posts";
import { fetchHashnodeBlogs } from "@/lib/hasnode";
import moment from "moment";

export default async function FeaturedPost() {
  const post: Post[] = await fetchHashnodeBlogs({ limit: 1 });
  
  return (
    <div
      className="relative h-[70vh] min-h-[600px] container mt-10 mx-auto overflow-hidden rounded-lg"
      style={{
        backgroundImage: `url(${post[0].coverImage.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Image
        src={post[0].coverImage.url}
        alt="Featured post cover"
        fill
        className="object-fill object-center"
        priority
      /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-gray-800" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post[0].publishedAt} className="text-white">
                {moment(post[0].publishedAt).format("MMMM DD, YYYY")}
              </time>
              {post[0]?.tags?.slice(0, 2).map((tag) => (
                <a
                  key={tag.slug}
                  href={tag.slug}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {tag.name}
                </a>
              ))}
            </div>
            <h1 className="text-4xl text-white md:text-5xl font-bold my-5">
              {post[0].title}
            </h1>
            <p className="text-lg mb-8 text-muted-foreground text-white/90">
              {post[0].brief}
            </p>
            <Link
              href={`/blog/${post[0].slug}`}
              className="py-2 px-3 border text-white border-white rounded-lg"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
