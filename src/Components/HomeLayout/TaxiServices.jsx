import React from 'react'
import CustomCard from '../../CommonComponent/CustomCard'

const TaxiServices = () => {

    const taxiServicesCardData = [
        { imageUrl: "./image/Herosections.jpg", imageTitle: "imageHero", headerName: "Argentina – Great Diving Trip", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
        { imageUrl: "./image/rajasthan.jpg", imageTitle: "imageRajasthan", headerName: "India – Mumbai, New Delhi", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
        { imageUrl: "./image/Herosections.jpg", imageTitle: "imageHero section", headerName: "America – Grand canyon, Golden Gate", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,…", link: "View all tours" },
    ];
    return (

        <>
            <section>
                <header className="items-center pt-[60px]">
                    <h1 className="text-center font-bold text-5xl font-[poppins] pb-[30px]">Texi <span className="text-orange-500">Services</span></h1>
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
                    <CustomCard cardData={taxiServicesCardData} figureClasses="h-[500px]" figcaptionClasses="block  text-center" />
                </div>
            </section>
        </>
    )
}

export default TaxiServices