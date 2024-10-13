import React from 'react';

const TestimonialCard = ({ image, hadding, headingParagraph, reviews, paragraph }) => {
    return (
        <article className='flex justify-center'>
            <figure className='flex items-start bg-white w-[80%] shadow-lg shadow-slate-300/40 rounded-lg p-10'>
                <div className='flex-shrink-0'>
                    <img src={image} alt="testimonialImage" className='rounded-full w-20 h-20' />
                </div>
                <figcaption className='ml-4 rounded-lg w-full'>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='font-semibold text-lg'>
                                {hadding}
                            </h2>
                            <p className='text-slate-500'>{headingParagraph}</p>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-yellow-500'>{reviews} <span className='text-yellow-500'>&#9733;</span></p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <p>{paragraph}</p>
                    </div>
                </figcaption>
            </figure>
        </article>
    );
};

export default TestimonialCard;
