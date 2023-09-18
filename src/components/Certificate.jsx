
import React from 'react';
import { certificates } from '../constants';
import { SectionWrapper } from '../hoc';

const Certificate = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10 text-center items-center'>
            <h2 className={'text-center text-3xl font-bold ' }> My Certificates.</h2>
            {certificates.map((cert) => (
                <div className='w-[80vw] ' key={cert.title}>
                    <p className='text-xl m-2 '>{cert.title}</p>
                    <img className='justify-center' src={cert.img} alt="" />
                </div >

            ))}
        </div>
    )
}


export default SectionWrapper(Certificate, "cert");
