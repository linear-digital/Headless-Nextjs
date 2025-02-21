import { fetchHashnodeBlogs } from "@/lib/hasnode";
import { Post } from "@/types/posts";
import moment from "moment";
import { Avatar } from "antd";
import { BookOpen, Eye } from "lucide-react";
import Link from "next/link";

export default async function Blogs() {
  const blogs: Post[] = await fetchHashnodeBlogs({ limit: 9 });

  return (
    <div className="bg-white dark:bg-gray-900 pb-20">
      <div className="mx-auto container px-4">
        <div className="mx-auto mt-10 grid grid-cols-1 gap-x-5 gap-y-10  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-6 md:grid-cols-2">
          {blogs.slice(1, blogs.length).map((post, index) => (
            <article
              key={post.id}
              className={`flex flex-col items-start justify-between ${
                index < 2 ? "lg:col-span-3" : "col-span-2"
              } shadow-lg shadow-gray-100 dark:shadow-gray-800 rounded-xl bg-white dark:bg-black overflow-hidden`}
            >
              <Link href={`/blog/${post.slug}`} className="w-full">
                <div
                  className={`w-full h-56 rounded-lg border-b border-gray-50 dark:border-gray-700 ${
                    index < 2 ? "lg:h-[350px]" : ""
                  } `}
                  style={{
                    backgroundImage: `url(${post.coverImage.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </Link>
              <div className="p-4">
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={post.publishedAt}
                    className="text-gray-500 dark:text-white"
                  >
                    {moment(post.publishedAt).format("MMMM DD, YYYY")}
                  </time>
                  <a
                    href={post.tags[0].slug}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.tags[0].name}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:group-hover:text-gray-300 dark:text-white">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm/6 text-gray-600 dark:text-white/90">
                    {post.brief}
                  </p>
                </div>
                <div className="relative mt-5 flex items-center gap-x-4">
                  <Avatar
                    size={40}
                    alt=""
                    src={post.author.profilePicture}
                    className="size-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      <a href={post.author.username}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-white/80 flex items-center gap-x-2">
                      <BookOpen size={15} /> {post.readTimeInMinutes} min read{" "}
                      <Eye size={15} /> {post.views}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
