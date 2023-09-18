import React from 'react';
import { styles } from '../style';
import meImage from '../assets/mimg.png';

const Hero = () => {
  return (
    <section className=' relative w-full h-[100vh] mx-auto'>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#317873]' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#317873]'>Dung</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`} >
            I am a website developer <br className='sm:block hidden' />
            who specializes in frontend development and has a passion for backend development and design as well.
          </p>
        </div>
      </div>



      <div>
        <img src={meImage} alt="Me" style={{ position: 'relative', top: '450px', left: '15%', maxWidth: '70%' }}/>
      </div>



    </section>
  )
}

export default Hero