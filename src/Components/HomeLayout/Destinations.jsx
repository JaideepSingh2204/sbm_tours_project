import React from "react";
import CustomCard from "../../CommonComponent/CustomCard";

const Destinations = () => {
    const destinationsCardData = [
        { imageUrl: "./image/Heros.jpg", imageTitle: "imageHero", headerName: "Western Europe", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
        { imageUrl: "./image/Herosections.jpg", imageTitle: "imageHeroSection", headerName: "South Africa", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
        { imageUrl: "./image/rajasthan.jpg", imageTitle: "imageRajasthan", headerName: "Scandinavia", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
        { imageUrl: "./image/Herosections.jpg", imageTitle: "imageHeroSection", headerName: "Egypt", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
        { imageUrl: "./image/Heros.jpg", imageTitle: "imageHero", headerName: "Asia", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
        { imageUrl: "./image/rajasthan.jpg", imageTitle: "imageRajasthan", headerName: "America", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
    ];

    return (
        <>
            <section>
                <header className="items-center pt-[60px]">
                    <h1 className="text-center font-bold text-5xl font-[poppins] pb-[30px]">Top <span className="text-orange-500">Destinations</span></h1>
                    <p className="text-center text-[#8c8c8c] font-[poppins] text-xl pb-[30px]">
                        Explore our top destinations voted by more than 100,000+ <br />customers around the world.
                    </p>
                    <div className="w-full flex justify-center">
                        <a href="/all-destinations" className="font-[poppins] text-slate-600 underline hover:text-orange-500">
                            All Destinations
                        </a>
                        <span className="text-slate-600 ps-1 font-[poppins]">&#8594;</span>
                    </div>
                </header>
            </section>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-16 gap-10 px-5 ">
                    <CustomCard cardData={destinationsCardData} figureClasses="h-[500px]" figcaptionClasses="absolute bottom-0 left-0 right-0 text-center w-full" figcaptionHaddingClasses="text-2xl text-white py-2 px-5 pb-20 opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
                </div>
            </section>
        </>
    );
};

export default Destinations;
