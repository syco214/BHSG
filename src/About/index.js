import React, {useState} from 'react'
import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight, Image, Link} from './AboutElements'
import ParticleBackground from '../ParticleBackground'
import { Button } from './ButtonElement'
import logo from '../Logos/logo.svg';

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='about'>
           <HeroBg>
                <ParticleBackground></ParticleBackground>
                <ParticleBackground></ParticleBackground>
                <ParticleBackground></ParticleBackground>
                <ParticleBackground></ParticleBackground>
                <ParticleBackground></ParticleBackground>
           </HeroBg> 
           <HeroContent>
               <Image max-width='10%' src={logo} alt="logo"/>
               <HeroH1>BOUNTY HUNTER SPACE GUILD</HeroH1>
               {/* <HeroP>5,555 Unique NFTs</HeroP> */}
               <HeroBtnWrapper>
                {/* <Link to={{pathname:"https://bhsg-mint.vercel.app/"}}> */}
                   <Button a href="https://bhsg-mint.vercel.app/" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                       Mint is Live {hover ? <ArrowForward /> : <ArrowRight/>}
                   </Button>
                {/*</Link>*/}
               </HeroBtnWrapper>
           </HeroContent>
        </HeroContainer>
    )
}

export default Hero
