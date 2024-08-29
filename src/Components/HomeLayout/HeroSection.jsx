import React from "react";

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row w-full h-auto mb-2 pt-[45px] bg-slate-100 font-[poppins]">
                <div className="w-full md:w-1/2 ">
                    <div className="px-8 md:px-10  md:py-40">
                        <h1 className="font-bold text-6xl md:text-[4.7rem] 2xl:text-8xl ">
                            Find Next Place To <span className="text-orange-500">Visit</span>
                        </h1>
                        <p className="font-bold text-lg md:text-xl pt-5 md:pt-10 text-[#8c8c8c]">
                            Discover amazing places at exclusive deals.
                            <br />
                            Eat, Shop, Visit interesting places around the world.
                        </p>
                    </div>
                </div>

                <div
                    className="w-[95%] ms-4 md:w-[42%] h-[400px] md:h-[650px] bg-cover bg-center rounded-xl my-10 "
                    style={{ backgroundImage: "url(./Image/rajasthan.jpg)" }}
                ></div>


            </div>
        </>
    );
};

export default HeroSection;
