import React from 'react'
import { motion } from 'framer-motion'
import {Tilt} from 'react-tilt';
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc/index';
const ServiceCard = ({index,title,icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-[300px]'>
      <motion.div
      variants={fadeIn("right",'spring',0.5*index,0.75)}
      className='green-pink-gradient w-full px-[1px] py-[1px] rounded-[20px] shadow-card'
      >r
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='tert rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>  
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-margin`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText} text-margin`}>Overview</h2>
    </motion.div> 
    <motion.p variants={fadeIn("","",0.1,1)} className='text-margin m-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>I'm a skilled web develoepr with the experience in JavaScript and expertice in Reactjs, GSAP and framermotion. I build websites with cutting edge technology and provide a greate experience with beautiful UI design by also keeping Complexity in mind.</motion.p>
    <div className='flex flex-wrap gap-10' style={{margin: '3rem 2rem 3rem 1rem'}}>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index}  {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,'about');