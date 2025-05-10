// src/app/components/HeroSection/Background2.tsx
import Image from "next/image";

// src/app/components/HeroSection/Background2.tsx
export const Background2 = ({ imgUrl }: { imgUrl: string }) => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full">
            <Image
                src={imgUrl}
                alt="Background decoration"
                fill
                priority
                quality={100}
                className="object-cover object-center"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            />
            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
};