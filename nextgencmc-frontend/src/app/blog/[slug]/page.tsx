import React from 'react';
import Link from 'next/link';
import Breadcrumb from "@/components/Common/Breadcrumb";
import RichText from "@/components/RichText";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug?: string;
  content?: any;
  tags?: string[];
  featuredImage?: {
    id: string;
    url: string;
    alt?: string;
    filename?: string;
    mimeType?: string;
    filesize?: number;
    width?: number;
    height?: number;
  } | string;
  createdAt: string;
  updatedAt?: string;
  author?: {
    name: string;
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ✅ Correct featured image URL prefix
const getImageUrl = (featuredImage: Post['featuredImage']): string | null => {
  if (!featuredImage) return null;

  if (typeof featuredImage === 'object' && featuredImage.url) {
    return featuredImage.url.startsWith('http')
      ? featuredImage.url
      : `http://localhost:3000${featuredImage.url}`;
  }

  return null;
};

const getImageAlt = (featuredImage: Post['featuredImage'], title: string): string => {
  if (typeof featuredImage === 'object') {
    if (featuredImage.alt) return featuredImage.alt;
    if (featuredImage.filename) return featuredImage.filename;
  }
  return title;
};

async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(
      `http://127.0.0.1:3001/api/posts?where[slug][equals]=${slug}&depth=2`,
      {
        cache: 'no-store',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch post:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    console.log('Full post data with tags:', JSON.stringify(data.docs?.[0], null, 2));
    return data.docs?.[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <>
        <Breadcrumb
          pageName="Post Not Found"
          description="The blog post you're looking for doesn't exist."
        />
        <section className="pt-[120px] pb-[120px]">
          <div className="container text-center">
            <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              404 - Post Not Found
            </h1>
            <p className="mb-8 text-base font-medium text-body-color">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80"
            >
              Back to Blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Breadcrumb pageName={post.title} description={post.excerpt} />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                {post.title}
              </h1>

              {/* Author & Date */}
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex items-center">
                  <div className="mr-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {post.author?.name?.charAt(0) || 'N'}
                  </div>
                  <div>
                    <p className="text-base font-medium text-body-color">
                      By <span className="text-primary">{post.author?.name || 'NextGenCMC Expert'}</span>
                    </p>
                    <p className="text-xs text-body-color">
                      {new Date(post.createdAt).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              {(() => {
                const imageUrl = getImageUrl(post.featuredImage);
                return imageUrl ? (
                  <div className="mb-10">
                    <img
                      src={imageUrl}
                      alt={getImageAlt(post.featuredImage, post.title)}
                      className="w-full rounded-lg object-cover shadow-md"
                    />
                  </div>
                ) : null;
              })()}

              {/* Rich Text */}
              <RichText content={post.content} />

              {/* Professional Footer Note */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">N</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-2">
                      NextGenCMC - Regulatory Excellence
                    </h4>
                    <p className="text-body-color text-sm leading-relaxed">
                      Professional pharmaceutical regulatory affairs expertise specializing in CMC submissions, 
                      MHRA variations, and compliance strategies. Our regulatory consultants provide expert 
                      guidance for pharmaceutical companies navigating complex regulatory requirements.
                    </p>
                    <div className="mt-3">
                      <Link 
                        href="/contact" 
                        className="text-primary hover:text-primary/80 text-sm font-medium"
                      >
                        Contact our regulatory experts →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Tags with Better Contrast */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-body-color mb-3">Tags:</h4>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-primary px-4 py-2 text-sm font-semibold text-primary dark:text-white hover:bg-primary hover:text-white transition-colors duration-200 shadow-md"
                      >
                        {tag.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="border-t border-body-color border-opacity-10 pt-8 mt-10">
                <div className="flex justify-between items-center">
                  <Link
                    href="/blog"
                    className="inline-flex items-center rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white duration-300 hover:bg-primary/80"
                  >
                    ← Back to Blog
                  </Link>
                  
                  <div className="text-right">
                    <p className="text-sm text-body-color mb-2">Share this article</p>
                    <div className="flex space-x-3">
                      <button className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        📧
                      </button>
                      <button className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        🔗
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
