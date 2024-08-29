import React from 'react'
import CustomCard from '../../CommonComponent/CustomCard';

const PopularTours = () => {
    const popularTourCardData = [
        { imageUrl: "./image/Herosections.jpg", imageTitle: "imageHero", headerName: "Argentina – Great Diving Trip", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
        { imageUrl: "./image/rajasthan.jpg", imageTitle: "imageRajasthan", headerName: "India – Mumbai, New Delhi", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
        { imageUrl: "./image/Herosections.jpg", imageTitle: "imageHero section", headerName: "America – Grand canyon, Golden Gate", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
    ];

    return (
        <>
            <section>
                <header className="items-center pt-24">
                    <h1 className="text-center font-bold text-5xl font-[poppins] pb-[30px]">Popular <span className="text-orange-500">Tours</span></h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-10 px-5 ">
                    <CustomCard cardData={popularTourCardData} figureClasses="h-[600px]" figcaptionClasses="absolute bottom-0 left-0 right-0 text-center w-full" />
                </div>
                <div className="w-full flex justify-center pt-8">
                    <a href="/all-destinations" className="font-[poppins] text-slate-600 underline hover:text-orange-500">
                        See More
                    </a>
                    <span className="text-slate-600 ps-1 font-[poppins]">&#8594;</span>
                </div>
            </section>
        </>
    );
}

export default PopularTours