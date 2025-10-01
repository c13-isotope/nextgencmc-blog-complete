const NewsLatterBox = () => {
  return (
    <div
      className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Stay Updated on CMC Regulatory Changes
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Subscribe to receive latest pharmaceutical regulatory updates, MHRA guidance changes, and CMC best practices directly in your inbox.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="mb-5 w-full cursor-pointer rounded-sm bg-primary px-6 py-3 text-base font-medium text-white outline-none transition duration-300 ease-in-out hover:bg-primary/90 hover:shadow-signUp dark:shadow-submit-dark"
        />
        <p className="text-center text-base leading-relaxed text-body-color">
          No spam guaranteed. Unsubscribe anytime.
        </p>
      </div>

      <div className="absolute -right-9 -top-10 z-[-1]">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
            fill="#3056D3"
            fillOpacity="0.1"
          />
        </svg>
      </div>
      <div className="absolute -bottom-3 -left-4 z-[-1]">
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
            transform="rotate(-22.9007 25.6675 47.5095)"
            fill="#4A6CF7"
          />
        </svg>
      </div>
    </div>
  );
};

export default NewsLatterBox;
