import React from 'react';

const CustomCard = ({ cardData, mainClasses, imageClasses, figureClasses, figcaptionClasses, figcaptionHaddingClasses }) => {
    return (
        <>
            {cardData && cardData.map((cardData, index) => {
                return (
                    <article key={index} className={`${mainClasses} relative rounded-xl bg-slate-100 h-auto font-[poppins] group`}>
                        <div className='block w-full h-auto'>
                            <figure className={`${figureClasses} w-full `}>
                                <img src={cardData.imageUrl} alt={cardData.imageTitle} className={` ${imageClasses} w-full h-full object-cover object-center`} />

                                {/* <figcaption className={`${figcaptionClasses} absolute bottom-0 left-0 right-0 text-center w-full`}>
                                    <h2 className={`${figcaptionHaddingClasses}text-2xl text-white py-2 px-5 pb-20 opacity-100 group-hover:opacity-0 transition-opacity duration-200`}>{cardData.headerName}</h2>
                                </figcaption> */}
                                {/* <div className='absolute flex flex-col items-center justify-center text-center -bottom-10 group-hover:bottom-0 left-0 right-0 bg-black/50 opacity-0 group-hover:opacity-100 w-full h-full transition-all duration-200'>
                                    <h2 className='text-2xl text-white py-2 px-5'>{cardData.headerName}</h2>
                                    <p className='text-white pb-3 py-2 px-5'>{cardData.content}</p>
                                    <a href='#' className='text-orange-500 text-bold hover:text-orange-300 underline py-2 px-5'>{cardData.link}     </a>
                                </div> */}
                                <div className='absolute flex flex-col items-center justify-end text-center -bottom-10 group-hover:bottom-0 left-0 right-0 bg-black/50 opacity-0 group-hover:opacity-100 w-full h-full transition-all duration-200'>
                                    <h2 className='text-2xl text-white py-2 px-5'>{cardData.headerName}</h2>
                                    <div className=' grid grid-cols-2 text-center pt-4 '>
                                        <div className='text-white'>
                                            <p>2 Days 3 Night</p>
                                            <p>Reviwe</p>
                                        </div>
                                        <div className='text-white'>
                                            <p className='text-slate-400'><del>&#8377; 1299</del></p>
                                            <p>&#8377; 1099</p>
                                        </div>
                                    </div>

                                    <a href='#' className='text-orange-500 text-bold hover:text-orange-300 underline py-2 px-5'>{cardData.link}</a>
                                </div>
                                {/* <figcaption className={`${figcaptionClasses} `}>
                                    <h3> Corrola Altis</h3>
                                    <p>Rs. 20/km</p>
                                </figcaption>
                                <hr />
                                <div className='grid grid-cols-2 text-center pt-4 '>
                                    <h4>REAT</h4>
                                    <p>24hr/250km : 2000</p>
                                </div> */}
                            </figure>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default CustomCard;
