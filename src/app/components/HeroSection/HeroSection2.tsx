// src/app/components/HeroSection/HeroSection.tsx
"use client";
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Navbar } from "../Navbar";
import { Background2 } from "./Background2";
import { Hero } from "./Hero";
import { ClientLogos } from "./ClientLogos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

const slideContent = [
    {
        firstBlockText: "Victory Analytica",
        secondBlockText: <span className="tracking-[3.4px] md:tracking-[5.5px] lg:tracking-[9px]">& Security LLC</span>,
        leftParagraph: "Empowering businesses globally with expert consulting in international business setup and strategic planning.",
        rightParagraph: "Leveraging cutting-edge data science and security solutions to optimize your global operations.",
        imgUrl: "https://plus.unsplash.com/premium_photo-1672330528083-e64cfdc15048?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwc2NyYXBlcnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        firstBlockText: "Strategic Expansion",
        secondBlockText: "Made Simple",
        leftParagraph: "Comprehensive solutions for U.S. market entry with banking, registration, and compliance handled seamlessly.",
        rightParagraph: "End-to-end support from business registration to tax identification and legal compliance.",
        imgUrl: "https://plus.unsplash.com/premium_photo-1683141136472-bd21514555a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtZW58ZW58MHx8MHx8fDA%3D"
    },
    {
        firstBlockText: "Advanced Security",
        secondBlockText: "& Analytics",
        leftParagraph: "Protecting your assets with state-of-the-art security systems and risk management strategies.",
        rightParagraph: "Data-driven insights to enhance decision-making and operational efficiency across all models.",
        imgUrl: "https://plus.unsplash.com/premium_photo-1661322804969-8e8f6bda78f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D"
    },
    {
        firstBlockText: "Elite Tier",
        secondBlockText: "Solutions",
        leftParagraph: "Full-spectrum services including asset management, work permits, and operational expansion support.",
        rightParagraph: "Premium packages with complete legal, financial, and operational management for enterprise growth.",
        imgUrl: "https://plus.unsplash.com/premium_photo-1682436024009-140eb10c1579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fEludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D"
    }
];

function HeroSection() {
    const [ref, inViewHero] = useInView({
        triggerOnce: false,
        threshold: 0.2
    });

    useEffect(() => {
        // Dispatch event when inView changes
        const event = new CustomEvent('navbarHeroColorChange', { detail: { inViewHero } });
        window.dispatchEvent(event);


        return () => {
            // Reset on unmount
            const cleanupEvent = new CustomEvent('navbarHeroColorChange', { detail: { inViewHero: false } });
            window.dispatchEvent(cleanupEvent);
        };
    }, [inViewHero]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    };

    return (
        <section className="relative h-screen" ref={ref}>
            {/* Navbar with transparent background */}
            <Navbar />

            {/* Combined slider for background and content */}
            {/* <Slider {...settings} className="absolute inset-0 -z-10 h-screen">
                {slideContent.map((slide, index) => (
                    <div key={index} className="relative h-full ">
                        <Background2 imgUrl={slide.imgUrl} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                            <Hero
                                firstBlockText={slide.firstBlockText}
                                secondBlockText={slide.secondBlockText}
                                leftParagraphText={slide.leftParagraph}
                                rightParagraphText={slide.rightParagraph}
                            />
                        </div>
                    </div>
                ))}
            </Slider> */}
             <Slider {...settings} className="absolute inset-0 z-10 h-screen">
                {slideContent.map((slide, index) => (
                    <div key={index} className="relative h-full">
                        {/* Background image */}
                        <Background2 imgUrl={slide.imgUrl} />

                        {/* Content overlay */}
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                            <div className="w-full max-w-7xl mx-auto"> {/* Added wrapper div */}
                                <Hero
                                    firstBlockText={slide.firstBlockText}
                                    secondBlockText={slide.secondBlockText}
                                    leftParagraphText={slide.leftParagraph}
                                    rightParagraphText={slide.rightParagraph}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>


            {/* Client Logos positioned absolutely at bottom */}
            <div className="absolute bottom-0 w-screen z-20">
                <ClientLogos />
            </div>
        </section>
    );
}

export default HeroSection;