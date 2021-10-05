import React from 'react'
import home1 from '../img/home1.png'
// import styled from 'styled-components'
import {About, Description, Image, Hide} from "../styles"

import styled from 'styled-components'

import {motion} from "framer-motion"

import {titleAnim, fade, photoAnim} from '../animation'

import Wave from './Wave'

const AboutSection = () => {


 return(
        <About>
        <Description >

            <div className="title">
                <Hide>
                    <motion.h2 variants={titleAnim} >We work to make</motion.h2>
             
                </Hide>
                <Hide>
                <motion.h2 variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                   
                </Hide>  
                <Hide>
                    <motion.h2 variants={titleAnim}>true.</motion.h2>
                </Hide>
                </div>
                  <motion.p variants={fade}>Contact us for any jewlery ideas you have, we 
                    have proffesionals with amazing skills</motion.p>
                  <motion.button variants={fade} >Contact Us</motion.button>

       </Description>
                <Image>
                    <motion.img variants={photoAnim} initial="hidden" animate="show" src={home1} alt=""  />
                </Image>
                <Wave />
          </About>
    )
};





export default AboutSection