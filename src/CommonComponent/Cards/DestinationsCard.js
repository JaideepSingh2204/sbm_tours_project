import React from 'react';

const DestinationsCard = ({ cardData, mainClasses, imageClasses, figureClasses, figcaptionClasses, figcaptionHaddingClasses }) => {
    return (
        <>
            {cardData && cardData.map((cardData, index) => {
                return (
                    <article key={index} className={`${mainClasses} relative  bg-slate-100 h-auto font-[poppins] group`}>
                        <div className='block w-full h-auto rounded-xl'>
                            <figure className={`${figureClasses} h-64 w-full`}>
                                <img src={cardData.imageUrl} alt={cardData.imageTitle} className={` ${imageClasses} w-full h-full object-cover object-center rounded-xl`} />

                                <figcaption className={`${figcaptionClasses} absolute bottom-0 left-0 right-0 text-center w-full `}>
                                    <h2 className={`${figcaptionHaddingClasses}text-2xl text-white py-2 px-5 pb-20 opacity-100 group-hover:opacity-0 transition-opacity duration-200`}>{cardData.headerName}</h2>
                                </figcaption>
                                <div className='absolute flex flex-col items-center justify-center text-center -bottom-10 group-hover:bottom-0 left-0 right-0 bg-black/50 opacity-0 group-hover:opacity-100 w-full h-full transition-all duration-200 rounded-xl'>
                                    <h2 className='text-2xl text-white py-2 px-5'>{cardData.headerName}</h2>
                                    <p className='text-white pb-3 py-2 px-5'>{cardData.content}</p>
                                    <a href='#' className='text-orange-500 text-bold hover:text-orange-300 underline py-2 px-5'>{cardData.link}     </a>
                                </div>
                            </figure>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default DestinationsCard;
