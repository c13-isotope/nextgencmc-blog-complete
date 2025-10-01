const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              
              <div className="text-center w-full mb-8">
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  Professional Tools & Software Expertise
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Specialized experience with industry-leading regulatory software and systems
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                
                <div className="flex items-center">
                  <div className="mr-3 flex h-12 w-12 items-center justify-center rounded bg-primary/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#2563eb">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-body-color dark:text-body-color-dark">
                    MonoeCTD
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="mr-3 flex h-12 w-12 items-center justify-center rounded bg-primary/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#2563eb">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-body-color dark:text-body-color-dark">
                    MHRA Systems
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="mr-3 flex h-12 w-12 items-center justify-center rounded bg-primary/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#2563eb">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-body-color dark:text-body-color-dark">
                    eCTD Compilation
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="mr-3 flex h-12 w-12 items-center justify-center rounded bg-primary/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#2563eb">
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-body-color dark:text-body-color-dark">
                    Regulatory Databases
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
