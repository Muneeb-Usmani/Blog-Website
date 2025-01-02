import Link from "next/link";
import Image from "next/image";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/app/sanity/live";

const POSTS_QUERY = defineQuery(`*[
  _type == "post" && defined(slug.current)
] {
  _id,
  title,
  "slug": slug.current,
  "authorName": author->name,
  "imageUrl": mainImage.asset->url,
  publishedAt
} | order(publishedAt desc)`);

export default async function IndexPage() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Our Blogs</h1>
        <p className="text-gray-600 mt-4">
        Welcome to our blog, filled with interesting facts of life beneath the water’s surface. Learn about the animals we have here at Sea World.
        </p>
      </header>

      <section className="container mx-auto">
        <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li
              key={post._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Link href={`/blog/${post.slug}`}>
                {post.imageUrl && (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {post.authorName && (
                      <>
                        <span>By {post.authorName}</span>
                        <span className="mx-2">•</span>
                      </>
                    )}
                    {post.publishedAt && (
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                    )}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
