import React from 'react';
import Link from 'next/link';
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMC Regulatory Blog | NextGenCMC - Expert Pharmaceutical Insights",
  description: "Professional insights on pharmaceutical regulatory affairs, CMC submissions, MHRA variations, and regulatory compliance strategies.",
};

interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug?: string;
  content?: any;
  tags?: string[]; // Add this
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



// Helper functions with proper TypeScript handling
// Enhanced helper function with debugging
// Fixed helper function for blog listing page
const getImageUrl = (featuredImage: Post['featuredImage']): string | null => {
  if (!featuredImage) return null;
  
  if (typeof featuredImage === 'object' && featuredImage.url) {
    // The URL already includes http://localhost:3000, so use it directly
    return featuredImage.url;
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

async function getPosts(): Promise<Post[]> {
  try {
    const response = await fetch('http://127.0.0.1:3001/api/posts?limit=6&depth=2', {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

const Blog = async () => {
  const posts = await getPosts();

  return (
    <>
      <Breadcrumb
        pageName="CMC Regulatory Insights"
        description="Professional insights on pharmaceutical regulatory affairs, CMC submissions, MHRA variations, and compliance strategies from industry experts."
      />

      {/* Featured Posts Section */}
      {posts.length > 0 && (
        <section className="pt-[120px] pb-[60px]">
          <div className="container">
            <div className="mx-auto max-w-[570px] text-center mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Featured CMC Regulatory Articles
              </h2>
              <p className="text-base font-medium text-body-color">
                Expert insights on pharmaceutical regulatory compliance and MHRA submissions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {posts.slice(0, 2).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug || post.id}`}>
                  <div className="group bg-white dark:bg-dark rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-[16/9] overflow-hidden">
                      {(() => {
                        const imageUrl = getImageUrl(post.featuredImage);
                        return imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={getImageAlt(post.featuredImage, post.title)}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                            <div className="text-white text-6xl">📊</div>
                          </div>
                        );
                      })()}
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-body-color text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Grid */}
      <section className="pt-[60px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-8">
                  <Link href={`/blog/${post.slug || post.id}`}>
                    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark">
                      {/* Featured Image */}
                      <div className="relative block aspect-[37/22] w-full overflow-hidden">
                        {(() => {
                          const imageUrl = getImageUrl(post.featuredImage);
                          return imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={getImageAlt(post.featuredImage, post.title)}
                              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="h-full w-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                              <div className="text-white text-4xl font-bold">📊</div>
                            </div>
                          );
                        })()}
                        
                        <div className="absolute right-6 top-6 z-20">
                          <div className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                            CMC
                          </div>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                        <h3 className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
                          {post.title}
                        </h3>
                        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                          {post.excerpt || "Professional pharmaceutical regulatory content"}
                        </p>

                        <div className="flex items-center">
                          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                            <div className="mr-4">
                              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                <div className="h-full w-full bg-primary flex items-center justify-center text-white font-bold">
                                  {post.author?.name?.charAt(0) || 'N'}
                                </div>
                              </div>
                            </div>
                            <div className="w-full">
                              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                                By {post.author?.name || 'NextGenCMC'}
                              </h4>
                              <p className="text-xs text-body-color">
                                Regulatory Expert
                              </p>
                            </div>
                          </div>
                          <div className="inline-block">
                            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                              Date
                            </h4>
                            <p className="text-xs text-body-color">
                              {new Date(post.createdAt).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="w-full px-4 text-center">
                <div className="mx-auto max-w-[570px] text-center">
                  <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    📚
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Welcome to NextGenCMC Blog
                  </h3>
                  <p className="text-base font-medium text-body-color">
                    We're preparing expert content on CMC regulatory affairs, MHRA submissions, 
                    and pharmaceutical compliance strategies. Create your first professional blog post in the admin panel!
                  </p>
                </div>
              </div>
            )}
          </div>

          {posts.length > 0 && (
            <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
              <div className="w-full px-4">
                <ul className="flex items-center justify-center pt-8">
                  <li className="mx-1">
                    <span className="flex h-9 min-w-[36px] cursor-default items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                      Showing {posts.length} latest posts
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
