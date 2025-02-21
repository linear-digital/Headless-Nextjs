import { getPostBySlug } from "@/lib/hasnode";
import { Post } from "@/types/posts";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);
  return (
    <div className="container mx-auto pb-10">
      <div className="relative w-full lg:h-[500px] overflow-hidden">
        <Image
          src={post.coverImage.url}
          alt={post.title}
          fill
          className="object-contain object-center rounded-lg"
        />
      </div>
      <div
        className={`blog-page-content prose prose-lg mx-auto break-words tracking-tight dark:prose-dark xl:prose-xl`}
      >
        <h1
          className={`blog-page-title mb-10 break-words text-3xl font-bold text-black dark:text-white md:text-4xl xl:text-5xl`}
        >
          {post.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.html,
          }}
        />
      </div>
    </div>
  );
};

export default page;
