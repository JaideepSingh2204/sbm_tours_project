import React from 'react';

const ToursCard = ({ cardData, mainClasses, imageClasses, figureClasses, figcaptionClasses, figcaptionHaddingClasses }) => {
    return (
        <>
            {cardData && cardData.map((cardData, index) => {
                return (
                    <article key={index} className={`${mainClasses} relative rounded-xl bg-slate-100 h-auto font-[poppins] group`}>
                        <div className='block w-full h-auto'>
                            <figure className={`${figureClasses} h-[480px] w-full `}>
                                <img src={cardData.imageUrl} alt={cardData.imageTitle} className={` ${imageClasses} w-full h-full object-cover object-center rounded-xl`} />
                                <figcaption className={`${figcaptionClasses} absolute bottom-0 left-0 right-0 text-start w-full `}>
                                    <h2 className={`${figcaptionHaddingClasses} text-2xl text-white py-2 px-5 pb-20 opacity-100 group-hover:opacity-0 transition-opacity duration-200`}>{cardData.headerName}</h2>
                                </figcaption>

                                <div className='absolute flex flex-col items-center justify-end text-start -bottom-10 group-hover:bottom-0 left-0 right-0 bg-black/50 opacity-0 group-hover:opacity-100 w-full h-full transition-all duration-200 rounded-xl'>
                                    <h2 className='text-2xl text-white py-2 px-5'>{cardData.headerName}</h2>
                                    <div className=' grid grid-cols-2 text-center w-full py-5 px-5'>
                                        <div className='text-white'>
                                            <p>2 Days 3 Night</p>
                                            <p className='text-sm text-slate-400'> <span className='text-yellow-500'>&#9733; 4.8 </span>(216 Reviwe)</p>
                                        </div>
                                        <div className='text-white'>
                                            <p className='text-slate-400'><del>&#8377; 1299</del></p>
                                            <p>&#8377; 1099</p>
                                        </div>
                                    </div>
                                </div>

                            </figure>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default ToursCard;
