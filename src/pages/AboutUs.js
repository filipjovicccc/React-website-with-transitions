import React from 'react'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'




function AboutUs() {
    return (
        <motion.div 
        exit="exit"
        variants={pageAnimation} 
        initial="hidden" 
        animate="show">

            <AboutSection />
            <ServicesSection />
            <FaqSection />

        </motion.div>
    )
}

export default AboutUs
