import React from 'react'
import '../styles/about.css'
import brgr from '../imgs/brgr.png'

const About = () => {
    return (
        <div className='about'>
            <div className="img">
                <img src={brgr} alt="burger" />
            </div>
            <div className="con">
                <h2>
                    <center>
                        About us
                    </center>
                </h2>
                <div className="ctn">
                    n 2010 it all happened with BrrrGrrr . He had been the owner of a small Burger restaurant in Sector-15 part II HUDA market Gurgaon . When he decided to purchase a Burger/Sandwich shop sanjay knew he wanted a limited but appetizing and affordable menu. 
                    With a receptive attitude to what they liked, he added a Burger/sandwich here, eliminated one there. It worked. Business was good and getting better. And then, confident in the quality of his own special recipe for Veg. Surprise Burger /Veg. Chilli Lava Burger/Veg. ‘N’ Crisp Burger and Wraps also he featured it as the newest item on his modest menu. That really worked. The response was sensational. 
                </div>
            </div>
        </div>
    )
}

export default About