import styled from 'styled-components';
import React, {useEffect} from 'react';
import ParticleBackground from '../ParticleBackground';
import "./Roadmap.css";
import "aos/dist/aos.css";
import Aos from "aos";


const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const HeroContainer = styled.div`
    height: 130vw;
    position: relative;

    @media screen and (max-width: 1024px) {
        height: 150vw;
    }

    @media screen and (max-width: 768px) {
        height: 150vw;
    }
    @media screen and (max-width: 480px) {
        height: 260vw;
    }
`

export const HeroContent = styled.div`
    position: absolute;
    margin-bottom: 600px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
`

export const HeroH1 = styled.h1`
    color: #white;
    font-size: 6vw;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 5vw;
    margin-left: 38vw;
    text-shadow: 0 0 0.2em hsl(195 50% 50%);
    font-family: 'Saira Extra Condensed', sans-serif;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 8vw;
    }
    @media screen and (max-width: 480px) {
        font-size: 10vw;     
        margin-left: 30vw; 
        margin-top: 3vw;
    }
`


const Map = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    },[]);

    return (
    <>
    <HeroContainer id='roadmap'>
        <HeroBg>
            <ParticleBackground></ParticleBackground>
            <ParticleBackground></ParticleBackground>
            <ParticleBackground></ParticleBackground>
            <ParticleBackground></ParticleBackground>
            <ParticleBackground></ParticleBackground>
            <ParticleBackground></ParticleBackground>
            <ParticleBackground></ParticleBackground>
            <ParticleBackground></ParticleBackground>
            <ParticleBackground></ParticleBackground>
            <ParticleBackground></ParticleBackground>
        </HeroBg>
        <HeroContent>
        <HeroH1 data-aos="fade-up">ROADMAP</HeroH1>
        </HeroContent>
        <div class="grids">
            <div class="blade"/>
            <div class="circle"/>
            <div class="circle1"/>
            <div class="circle2"/>
            <div class="circle3"/>
            <div class="circle4"/>
            <div className="box1" data-aos="fade-up">
                <div className="h2">Main Launch</div>
                <div className="p">November 2021</div>
                <div className="p">Presale will be opened to all Space Pioneers (the first few on the Discord 
                who reach presale requirements). Presale minting will have a head start, but a whitelisting option is always possible. 
                The remaining of the 5555 Bounty Hunters will be available to mint for the public, price TBA.
                </div>
            </div>
            <div className="box2" data-aos="fade-up">
            <div className="h2">Post Launch</div>
                <div className="p">November 2021</div>
                <div className="p">Holders will now be able to verify their Bounty Hunters 
                and gain access to Private Discord channels. Digital Eyes will be the initial 
                secondary marketplace to provide a safe and secure way for trading Bounty Hunters. 
                Solanart.io will be next.
                </div>
            </div>
            <div className="box3" data-aos="fade-up">
                <div className="h2">Sweep or Reap Launch</div>
                <div className="p">December 2021</div>
                <div className="p">The first iteration of the Sweep or Reap utility will be launched 
                allowing holders to earn their chosen set of dividends from the Bounty Hunters Space 
                Guild DAO.
                </div>
            </div>
            <div className="box4" data-aos="fade-up">
                <div className="h2">Merchandise Store and 3D Models</div>
                <div className="p">2022</div>
                <div className="p">A Merchandise Store for holders only will be launched on the website.
                3D Helmet Models will be also given to holders who ask for it.
                </div>
            </div>
            <div className="box5" data-aos="fade-up">
                <div className="h2">Universe building airdrops</div>
                <div className="p">2022</div>
                <div className="p">Bounty Hunter Upgrades, Bounties/Wanted Posters, Planets are all 
                possibilities for future airdrops;  all dependent on what the community wants.
                </div>
            </div>
        </div>
    </HeroContainer>
    </>
    )
}

export default Map
