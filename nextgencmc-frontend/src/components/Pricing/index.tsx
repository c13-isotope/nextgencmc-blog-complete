"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Professional CMC Regulatory Service Packages"
          paragraph="Comprehensive pharmaceutical regulatory solutions tailored to your specific needs, from single submissions to complete lifecycle management."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span className="flex cursor-pointer items-center text-sm font-medium text-body-color md:text-base">
              <span className="mr-3">Project-Based</span>
              <span className="flex h-8 w-16 items-center rounded-full bg-gray-4 p-1 duration-200">
                <span className="dot h-6 w-6 rounded-full bg-white duration-200"></span>
              </span>
              <span className="ml-3 text-primary">Ongoing Support</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Single Submission"
            price="Contact"
            duration="for Quote"
            subtitle="Perfect for individual regulatory submissions and one-off CMC projects."
          >
            <OfferList text="OLS Variation Submission" status="active" />
            <OfferList text="Type IA/IB CMC Variation" status="active" />
            <OfferList text="PIQ Variation Support" status="active" />
            <OfferList text="eCTD Compilation" status="active" />
            <OfferList text="MonoeCTD Preparation" status="active" />
            <OfferList text="Basic Regulatory Review" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Type II Complex Variations" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Product Lifecycle"
            price="Consultation"
            duration="Required"
            subtitle="Comprehensive lifecycle management for pharmaceutical products and ongoing support."
          >
            <OfferList text="All Single Submission Services" status="active" />
            <OfferList text="Type II Complex Variations" status="active" />
            <OfferList text="Generic Application Support" status="active" />
            <OfferList text="Multi-submission Planning" status="active" />
            <OfferList text="Regulatory Strategy Development" status="active" />
            <OfferList text="MHRA Communication Support" status="active" />
            <OfferList text="Priority Timeline" status="active" />
            <OfferList text="Training & Knowledge Transfer" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Pharmaceutical Partnership"
            price="Custom"
            duration="Agreement"
            subtitle="Long-term regulatory affairs partnership for pharmaceutical companies seeking dedicated support."
          >
            <OfferList text="All Lifecycle Services" status="active" />
            <OfferList text="Regulatory Affairs Consulting" status="active" />
            <OfferList text="Annual Renewal Management" status="active" />
            <OfferList text="Administrative Variation Support" status="active" />
            <OfferList text="Self-Certification Guidance" status="active" />
            <OfferList text="Training & Knowledge Transfer" status="active" />
            <OfferList text="24/7 Regulatory Support" status="active" />
            <OfferList text="Strategic Planning Sessions" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
