import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="CMC Regulatory Insights & Updates"
          paragraph="Professional pharmaceutical regulatory content covering MHRA submissions, CMC variations, and industry best practices. New articles coming soon."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Planned Article 1 */}
          <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
            <Link href="/blog" className="relative block aspect-[37/22] w-full">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary p-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                      <path d="m8 16 2 2 4-4"/>
                    </svg>
                  </div>
                  <span className="text-primary font-medium">Coming Soon</span>
                </div>
              </div>
            </Link>
            <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
              <h3>
                <Link
                  href="/blog"
                  className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                >
                  Complete Guide to OLS Variations: Classification and Submission Strategies
                </Link>
              </h3>
              <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                Comprehensive guide covering OLS variation classification, assessment procedures, and submission best practices for pharmaceutical regulatory professionals.
              </p>
              <div className="flex items-center">
                <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10">
                  <div className="mr-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">AC</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                      By Abhishek
                    </h4>
                    <p className="text-xs text-body-color">CMC Regulatory Expert</p>
                  </div>
                </div>
                <div className="inline-block">
                  <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                    Date
                  </h4>
                  <p className="text-xs text-body-color">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Planned Article 2 */}
          <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
            <Link href="/blog" className="relative block aspect-[37/22] w-full">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary p-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <span className="text-primary font-medium">Coming Soon</span>
                </div>
              </div>
            </Link>
            <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
              <h3>
                <Link
                  href="/blog"
                  className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                >
                  MonoeCTD Best Practices: Optimizing eCTD Compilation and Validation
                </Link>
              </h3>
              <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                Expert insights on MonoeCTD software usage, eCTD compilation techniques, and validation processes to ensure smooth MHRA submission workflows.
              </p>
              <div className="flex items-center">
                <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10">
                  <div className="mr-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">AC</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                      By Abhishek
                    </h4>
                    <p className="text-xs text-body-color">CMC Regulatory Expert</p>
                  </div>
                </div>
                <div className="inline-block">
                  <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                    Date
                  </h4>
                  <p className="text-xs text-body-color">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Planned Article 3 */}
          <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
            <Link href="/blog" className="relative block aspect-[37/22] w-full">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary p-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-primary font-medium">Coming Soon</span>
                </div>
              </div>
            </Link>
            <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
              <h3>
                <Link
                  href="/blog"
                  className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                >
                  CMC Variation Types Explained: Type IA, IB, and II Strategic Approaches
                </Link>
              </h3>
              <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                Detailed breakdown of CMC variation classifications, regulatory requirements, and strategic considerations for pharmaceutical lifecycle management.
              </p>
              <div className="flex items-center">
                <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10">
                  <div className="mr-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">AC</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                      By Abhishek
                    </h4>
                    <p className="text-xs text-body-color">CMC Regulatory Expert</p>
                  </div>
                </div>
                <div className="inline-block">
                  <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                    Date
                  </h4>
                  <p className="text-xs text-body-color">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;
