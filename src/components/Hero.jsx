import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto hero'>
      <div className={`${styles.paddingY} absolute inset-0 top-[140px] mx-auto flex flex-row items-start gap-5`}>
        <div className='name'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Subhan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>I develop beautiful and <br className='sm:block hidden' /> fully functional applications</p>
        </div>
      </div>
      <ComputersCanvas />


      <div className='absolute  bottom-10 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
              }}
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero