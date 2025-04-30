// src/app/components/HeroSection/Hero.tsx
export const Hero = () => {
  return (
    <section className="text-gray-900 md:-mt-6">
      <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl leading-[1.2] md:leading-[1.1] font-bold">
        <span className="block">Empowering</span>
        <span className="block mt-2 md:mt-4">Global Businesses</span>
      </h1>

      <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl max-w-2xl">
        From startups to multinational corporations, we deliver scalable,
        reliable, and cost-effective services to address your unique challenges.
      </p>

      <div className="mt-12 md:mt-16 lg:mt-20 max-w-2xl justify-right float-right">
        <p className="text-base md:text-lg lg:text-xl">
          Transform your business with expert engineering, seamless migrations,
          and innovative digital solutions, no matter where you are.
        </p>

        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/a65e0e8f6e48c1dfa03d33a381e373a5ccb57110?placeholderIfAbsent=true"
            alt="Case studies illustration"
            className="w-full sm:w-48 lg:w-56 flex-shrink-0"
          />
          <a href="#" className="text-blue-600 hover:text-blue-800 text-lg font-semibold underline">
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};