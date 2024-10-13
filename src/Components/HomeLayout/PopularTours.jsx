import React from 'react'
import ToursCard from '../../CommonComponent/Cards/ToursCard';
import { Rajasthan, Herosections, Tower } from "../../Assets/Image/index"

const PopularTours = () => {

    const popularTourCardData = [
        { imageUrl: Rajasthan, imageTitle: "imageHero", headerName: "Argentina – Great Diving Trip", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
        { imageUrl: Herosections, imageTitle: "imageRajasthan", headerName: "India – Mumbai, New Delhi", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
        { imageUrl: Tower, imageTitle: "imageHero section", headerName: "America – Grand canyon, Golden Gate", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
    ];

    return (
        <>
            <section>
                <header className="items-center pt-24">
                    <h1 className="text-center font-bold text-5xl font-[poppins] pb-[30px]">Popular <span className="text-orange-500">Tours</span></h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-10 px-5 ">
                    <ToursCard cardData={popularTourCardData} />
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