import { client } from "@/app/sanity/client";
import { sanityFetch } from "@/app/sanity/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery } from "next-sanity";
import { PortableText, PortableTextComponents} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Head from "next/head";
import { CalendarIcon, PencilIcon } from "@heroicons/react/24/solid";
import CommentsSection from "@/app/components/CommentsSection";


const BLOG_QUERY = defineQuery(`*[slug.current == $slug && _type == "post"][0]{
  title,
  mainImage,
  publishedAt,
  author->,
  categories[]->,
  body
}`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const myPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      const imageUrl = urlFor(value)?.width(800).height(400).url();
      if (!imageUrl) return null;
      return (
        <Image
          src={imageUrl}
          alt={value?.alt || "Blog Image"}
          width={800}
          height={400}
          className="rounded-lg shadow-md my-8 w-full max-w-full h-auto"
        />
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="border-l-4 pl-4 italic">{children}</blockquote>,
    normal: ({ children }) => <p className="text-base">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a href={value.href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
  },
};

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  let post;
  try {
    const { data } = await sanityFetch({
      query: BLOG_QUERY,
      params: { slug },
    });
    post = data;
  } catch (error) {
    console.error("Error fetching post:", error);
    notFound();
  }

  if (!post) {
    notFound();
  }

  const { title, mainImage, publishedAt, author, categories, body } = post;

  const blogImageUrl = mainImage
    ? urlFor(mainImage)?.width(1200).height(600).url()
    : "https://placehold.co/1200x600/png";

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <>
      <Head>
        <title>{title} | Blog</title>
      </Head>
      <main>
        <section
          className="relative w-full h-[500px] bg-gray-200"
          style={{
            backgroundImage: `url(${blogImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
              {title}
            </h1>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 flex items-center flex-col md:flex-row">
          <div className="hidden md:block sm:block sm:w-[7%] md:w-[15%]"></div>
            <article className="prose prose-lg max-w-none text-gray-800 sm:w-[85%] md:w-[70%] w-full space-y-8">
            <div className="flex flex-col items-center">
              <p className="text-gray-600 font-semibold ">Publisher Details</p>
              <div className="flex items-center justify-center space-x-4 mb-8 text-gray-600 italic">
              {author?.name && (
                <div className="flex items-center space-x-1">
                <PencilIcon className=" h-5 w-5" />
                <span> {author.name}</span>
                </div>
              )}
              {formattedDate && (
                <div className="flex items-center space-x-1">
                <CalendarIcon className="h-5 w-5" />
                <span>{formattedDate}</span>
                </div>
              )}
              </div>
            </div>

            <div className="space-y-4">
  <PortableText value={body} components={myPortableTextComponents} />
</div>
            </article>

          <div className="hidden md:block sm:block sm:w-[7%] md:w-[15%]"></div>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-sm md:text-base text-blue-600 hover:text-blue-800"
          >
            ← Back to blogs
          </Link>
        </div>

        <CommentsSection />
      </main>
    </>
  );
}
