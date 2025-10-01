import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              {/* Professional CMC Regulatory Visual */}
              <div className="relative z-10 h-full w-full rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                
                {/* Top Browser Bar */}
                <div className="mb-6 flex items-center justify-start">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 h-4 w-32 rounded bg-gray-300 dark:bg-gray-600"></div>
                </div>

                {/* CMC Document Layout */}
                <div className="space-y-4">
                  {/* Header Section */}
                  <div className="flex items-center space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                        <path d="m8 16 2 2 4-4"/>
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-24 rounded bg-gray-400 dark:bg-gray-500"></div>
                      <div className="h-3 w-32 rounded bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                  </div>

                  {/* Content Lines */}
                  <div className="space-y-3 pt-4">
                    <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-3 w-4/5 rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-3 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                  </div>

                  {/* Lower Section */}
                  <div className="mt-6 rounded-lg bg-white/50 dark:bg-gray-800/50 p-4">
                    <div className="space-y-2">
                      <div className="h-3 w-20 rounded bg-primary/30"></div>
                      <div className="h-2 w-full rounded bg-gray-300 dark:bg-gray-600"></div>
                      <div className="h-2 w-2/3 rounded bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              
              {/* Regulatory Compliance */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Regulatory Compliance Excellence
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Meticulous attention to regulatory requirements ensures every submission meets MHRA standards. 
                  Comprehensive review processes minimize regulatory risks and maximize approval success rates.
                </p>
              </div>

              {/* Professional Standards */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Professional Standards
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Dedicated support throughout your regulatory journey with timely communications, 
                  regular progress updates, and responsive assistance for all your CMC regulatory needs.
                </p>
              </div>

              {/* MonoeCTD Expertise */}
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  MonoeCTD & eCTD Expertise
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Advanced proficiency in MonoeCTD software for seamless eCTD compilation and validation. 
                  Optimized submission processes ensure faster regulatory review timelines and reduced 
                  back-and-forth communications.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
