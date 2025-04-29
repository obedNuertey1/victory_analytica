// src/app/components/HeroSection/Background.tsx
export const Background = () => {
  return (
    <>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/12bf4ad164c299f1889bdac8da2b849e43c3a1d4?placeholderIfAbsent=true"
        alt="Background decoration"
        className="object-cover absolute inset-0 size-full"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/e2b6827f4c0520308efe3c199f9c602255c6a6d1?placeholderIfAbsent=true"
        alt="Background overlay"
        className="object-cover absolute inset-0 size-full"
      />
    </>
  );
};
