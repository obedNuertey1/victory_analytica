// src/app/components/HeroSection/ClientLogos.tsx
export const ClientLogos = () => {
  const logos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/d1c99eb2d7d81e33a6b721f9d8d276d8bdbf5a06?placeholderIfAbsent=true",
      aspect: "3.55",
      width: "170",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/649b3b7b85316f6ef74fd238ed5ba5c95d82764c?placeholderIfAbsent=true",
      aspect: "3.48",
      width: "167",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/9be58a118642d464eb3cb7263d1f733c0cde0bde?placeholderIfAbsent=true",
      aspect: "4.13",
      width: "198",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/9708cbbd7dbef7c5a9c16a161da2909747aa526d?placeholderIfAbsent=true",
      aspect: "3.46",
      width: "166",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/058bc7201398c9653c768e4fd11b345204d92079?placeholderIfAbsent=true",
      aspect: "4.1",
      width: "197",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/4314c70e87b9b00d9c58d6ba010b7ffed86dcec2?placeholderIfAbsent=true",
      aspect: "3.79",
      width: "182",
    },
  ];

  return (
    <section className="mt-20 md:mt-32 lg:mt-40 container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center md:text-left">
        Join our ever-growing client list
      </h2>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center p-2">
            <img
              src={logo.src}
              alt={`Client logo ${index + 1}`}
              className="max-h-12 md:max-h-16 w-auto object-contain"
              style={{
                aspectRatio: logo.aspect,
                width: `${logo.width}px`
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
