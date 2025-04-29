// src/app/components/HeroSection/Hero.tsx
export const Hero = () => {
  return (
    <section className="mt-14 text-gray-900 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-9xl leading-[144px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Empowering
        <br />
        Global Businesses
      </h1>

      <p className="mt-6 text-lg leading-7 max-md:max-w-full">
        From startups to multinational corporations,we deliver scalable,
        reliable, and cost-effective services to address your unique challenges.
      </p>

      <div className="flex flex-col self-end mt-16 max-w-full w-[592px] max-md:mt-10">
        <p className="text-lg leading-7 text-gray-900 max-md:max-w-full">
          Transform your business with expert engineering, seamless migrations,
          and innovative digital solutions, no matter where you are.
        </p>

        <div className="flex gap-6 justify-center items-center self-start mt-6 text-base font-semibold leading-7 underline text-slate-800">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/a65e0e8f6e48c1dfa03d33a381e373a5ccb57110?placeholderIfAbsent=true"
            alt="Case studies illustration"
            className="object-contain shrink-0 gap-1.5 self-stretch py-4 my-auto aspect-[3.72] w-[201px]"
          />
          <a href="#" className="self-stretch my-auto">
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};
