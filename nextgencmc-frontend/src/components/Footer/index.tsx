import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <div className="flex items-center">
                    <div className="bg-primary rounded-lg p-2 mr-3 flex-shrink-0">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="white"
                        className="w-5 h-5"
                      >
                        <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6h5v2h2V6h5l-1 9H9v-3H7v3H5L4 6z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-lg font-bold text-dark dark:text-white whitespace-nowrap">
                        NextGenCMC
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">
                        Regulatory Excellence
                      </span>
                    </div>
                  </div>
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Professional pharmaceutical regulatory affairs expertise specializing in CMC lifecycle management, 
                  MHRA submissions, and OLS variations for the UK pharmaceutical industry.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://linkedin.com"
                    aria-label="linkedin link"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7821 0H5.21788C2.33693 0 0 2.33693 0 5.21788V16.7821C0 19.6631 2.33693 22 5.21788 22H16.7821C19.6631 22 22 19.6631 22 16.7821V5.21788C22 2.33693 19.6631 0 16.7821 0ZM6.59091 18.7879H3.43636V8.25H6.59091V18.7879ZM5.01364 6.98864C3.97727 6.98864 3.13636 6.14773 3.13636 5.11136C3.13636 4.075 3.97727 3.23409 5.01364 3.23409C6.05 3.23409 6.89091 4.075 6.89091 5.11136C6.89091 6.14773 6.05 6.98864 5.01364 6.98864ZM18.7879 18.7879H15.6333V13.75C15.6333 12.4545 15.6091 10.7955 13.8409 10.7955C12.0485 10.7955 11.7727 12.1818 11.7727 13.6591V18.7879H8.61818V8.25H11.6364V9.79545H11.6788C12.1212 8.95455 13.2273 8.06818 14.9091 8.06818C18.1212 8.06818 18.7879 10.2273 18.7879 13.0455V18.7879Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="mailto:contact@nextgencmc.org"
                    aria-label="email link"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Services
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/services"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      OLS Variations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      CMC Variations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      eCTD Compilation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Generic Applications
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Resources
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Regulatory Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About Expert
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Service Packages
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Compliance
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/privacy"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/disclaimer"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Regulatory Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Professional Expertise Areas
                </h2>
                <ul>
                  <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    <span className="text-primary">✓</span> MHRA Regulatory Submissions
                  </li>
                  <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    <span className="text-primary">✓</span> MonoeCTD Software Expert
                  </li>
                  <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    <span className="text-primary">✓</span> Pharmaceutical Lifecycle Management
                  </li>
                  <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    <span className="text-primary">✓</span> UK Regulatory Compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              © 2025 NextGenCMC - Professional Pharmaceutical Regulatory Affairs Consulting. All rights reserved.
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#4A6CF7" />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#4A6CF7" />
              <g opacity="0.1" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="31.4992" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="-8.63141"
                y="-26.2932"
                width="124.997"
                height="104.998"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6667"
              height="66.6667"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="#4A6CF7"
            />
            <rect
              x="25.6675"
              y="47.5095"
              width="66.6667"
              height="66.6667"
              transform="rotate(22.9007 25.6675 47.5095)"
              fill="#4A6CF7"
            />
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
