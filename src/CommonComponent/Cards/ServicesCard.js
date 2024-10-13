import React from 'react';

const ServicesCard = ({ cardData, mainClasses, imageClasses, figureClasses, figcaptionClasses, figcaptionHaddingClasses }) => {
    return (
        <>
            {cardData && cardData.map((cardData, index) => {
                return (
                    <article key={index} className={`${mainClasses} relative rounded-xl bg-slate-100 h-auto   border-s-teal-50 font-[poppins] group`}>

                        <figure className={`${figureClasses} `}>
                            <img src={cardData.imageUrl} alt={cardData.imageTitle} className={` ${imageClasses} w-full h-44 object-cover object-center  rounded-t-xl`} />
                            <figcaption className={`${figcaptionClasses} text-center`}>
                                <h3> Corrola Altis</h3>
                                <p>Rs. 20/km</p>
                            </figcaption>
                            <hr />
                            <div className='grid grid-cols-2 text-start pt-4  ps-4'>
                                <h4>REAT</h4>
                                <p>24hr/250km : 2000</p>
                            </div>
                        </figure>

                    </article>
                );
            })}
        </>
    );
};

export default ServicesCard;
