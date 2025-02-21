import CustomImage from "@/components/ui/custom-image";
import { getPostBySlug } from "@/lib/hasnode";
import { Post } from "@/types/posts";
import { getBlurHash, resizeImage } from "@/util/image";
import { Avatar } from "antd";
import { BookOpen } from "lucide-react";
import moment from "moment";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  try {
    const post: Post = await getPostBySlug(slug);

    const title = post.seo?.title || "GENZ IT Blogs"; // Use optional chaining and default value
    const description =
      post.seo?.description ||
      "A blog for the next generation of IT professionals.";
    const imageUrl = post.coverImage?.url || "/no-image.png"; // Default image URL

    return {
      title,
      description,
      canonical: post.canonicalUrl,
      keywords: post.tags.map((tag) => tag.name),
      openGraph: {
        title,
        description,
        images: [imageUrl],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
      },
    };
  } catch (error) {
    console.error(`Error generating metadata for slug ${slug}:`, error);
    return {
      title: "GENZ IT Blogs",
      description: "A blog for the next generation of IT professionals.",
    };
  }
};
const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);
  return (
    <div className="container mx-auto pb-10">
      <div className="relative">
        <CustomImage
          className="mb-0 block w-full"
          placeholder="blur"
          originalSrc={post.coverImage.url}
          src={resizeImage(post.coverImage.url, {
            w: 1600,
            h: 840,
            ...(!post.coverImage.isPortrait
              ? { c: "thumb" }
              : { fill: "blur" }),
          })}
          blurDataURL={getBlurHash(
            resizeImage(post.coverImage.url, {
              ...{ w: 400, h: 210 },
              ...(!post.coverImage.isPortrait
                ? { c: "thumb" }
                : { fill: "blur" }),
            })
          )}
          width={1600}
          height={840}
          alt={post.title}
          priority
          layout="responsive"
        />
      </div>
      <div
        className={`blog-page-content prose prose-lg mx-auto break-words tracking-tight dark:prose-dark xl:prose-xl mt-10`}
      >
        <h1
          className={`blog-page-title mb-10 break-words text-3xl font-bold text-black dark:text-white md:text-4xl xl:text-5xl`}
        >
          {post.title}
        </h1>
        <div className="relative z-20 mb-8 flex flex-row flex-wrap items-center justify-center px-4 md:-mt-7 md:mb-14 md:text-lg last:md:mb-10">
          <div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start gap-x-3">
            <Avatar className="bg-white" src={post.author.profilePicture} />
            <a
              href={`https://hashnode.com/@${post.author.username}`}
              className="ml-2 font-semibold text-slate-600 dark:text-white md:ml-0"
            >
              <span>{post.author.name}</span>
            </a>
          </div>
          <div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start">
            <span className="mx-3 hidden font-bold text-slate-500 md:block">
              &middot;
            </span>
            <p
              className="tooltip-handle text-slate-700 dark:text-slate-400"
              data-title={`${moment(post.publishedAt).format(
                "MMM D, YYYY HH:mm"
              )}`}
            >
              <span>{moment(post.publishedAt).format("MMM D, YYYY")}</span>
            </p>
            <span className="mx-3 block font-bold text-slate-500">
              &middot;
            </span>
            <p className="flex flex-row items-center text-slate-700 dark:text-slate-400">
              <BookOpen className="mr-2 h-5 w-5 fill-current opacity-75" />
              <span>{post.readTimeInMinutes} min read</span>
            </p>
          </div>
        </div>
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
