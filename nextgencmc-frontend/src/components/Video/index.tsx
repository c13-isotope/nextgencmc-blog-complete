import Image from "next/image";

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[770px] text-center">
              <h2 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Ready to Support Your 
                <span className="text-primary"> Regulatory Success</span>
              </h2>
              <p className="mb-12 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Professional CMC regulatory expertise to streamline your pharmaceutical submissions, 
                minimize regulatory risks, and accelerate your product lifecycle management.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <div className="relative z-10 h-full w-full rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary p-6">
                    <svg 
                      width="80" 
                      height="80" 
                      viewBox="0 0 24 24" 
                      fill="white"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                      <path d="m8 16 2 2 4-4"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-dark dark:text-white mb-2">
                    CMC Regulatory Expert
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark text-lg">
                    4+ Years Specialized Experience
                  </p>
                </div>
              </div>
              
              <div className="absolute -right-6 -top-6 z-[-1]">
                <svg
                  width="134"
                  height="106"
                  viewBox="0 0 134 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.66667"
                    cy="1.66667"
                    r="1.66667"
                    transform="rotate(-90 1.66667 1.66667)"
                    fill="#2563eb"
                  />
                  <circle
                    cx="16.3333"
                    cy="1.66667"
                    r="1.66667"
                    transform="rotate(-90 16.3333 1.66667)"
                    fill="#2563eb"
                  />
                  <circle
                    cx="31"
                    cy="1.66667"
                    r="1.66667"
                    transform="rotate(-90 31 1.66667)"
                    fill="#2563eb"
                  />
                  <circle
                    cx="45.6667"
                    cy="1.66667"
                    r="1.66667"
                    transform="rotate(-90 45.6667 1.66667)"
                    fill="#2563eb"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Comprehensive CMC Regulatory Services
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Specialized in OLS variations, Type IA/IB/II CMC variations, PIQ variations, 
                  and self-certification processes. Expert in eCTD compilation using MonoeCTD 
                  software and complete pharmaceutical lifecycle management.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Proven Track Record
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Over 4 years of hands-on experience in pharmaceutical regulatory affairs, 
                  including API synthesis background, ensuring deep understanding of both 
                  technical and regulatory aspects of pharmaceutical development.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Quality & Compliance Focus
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Committed to maintaining the highest standards of regulatory compliance 
                  while optimizing submission timelines. Every project receives thorough 
                  regulatory assessment and quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
