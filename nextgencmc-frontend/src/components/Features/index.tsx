import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Core CMC Regulatory Services"
            paragraph="Comprehensive pharmaceutical regulatory lifecycle management expertise, from initial submissions through ongoing maintenance and generic applications."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {/* OLS Variations */}
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                    <path d="m8 16 2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  OLS Variations
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  Expert handling of Other Licensable Substances variations including classification, assessment, and submission preparation with proven track record of successful approvals.
                </p>
              </div>
            </div>

            {/* Type IA/IB/II Variations */}
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".2s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  CMC Variations (Type IA/IB/II)
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  Comprehensive variation management including API additions, FP manufacturer changes, and technical modifications with detailed regulatory impact assessment.
                </p>
              </div>
            </div>

            {/* PIQ Variations */}
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".25s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  PIQ Variations
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  Product Information Questionnaire variations with meticulous attention to SmPC updates, labeling requirements, and cross-referencing compliance.
                </p>
              </div>
            </div>

            {/* MonoeCTD Expert */}
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".3s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  MonoeCTD Compilation
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  Professional eCTD dossier compilation and validation using MonoeCTD software ensuring regulatory compliance and seamless submission processes.
                </p>
              </div>
            </div>

            {/* Generic Applications */}
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".35s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H3.5C2.67 2 2 2.67 2 3.5v15C2 19.33 2.67 20 3.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C20 2.67 19.33 2 18.5 2z"/>
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Generic Applications
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  Complete generic drug application preparation including bioequivalence assessments, comparative quality reviews, and regulatory pathway optimization.
                </p>
              </div>
            </div>

            {/* Lifecycle Management */}
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".4s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Lifecycle Maintenance
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  End-to-end pharmaceutical product lifecycle management from initial authorization through post-marketing changes, renewals, and administrative updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
