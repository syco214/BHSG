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
    height: 150vw;
    position: relative;

    @media screen and (max-width: 1024px) {
        height: 170vw;
    }

    @media screen and (max-width: 768px) {
        height: 190vw;
    }

    @media screen and (max-width: 640px) {
        height: 210vw;
    }

    @media screen and (max-width: 480px) {
        height: 300vw;
    }

    @media screen and (max-width: 360px) {
        height: 340vw;
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
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 5vw;
    margin-left: 36vw;
    text-shadow: 0 0 0.2em hsl(195 50% 50%);
    font-family: 'Saira Extra Condensed', sans-serif;
    font-weight: bold;

    @media screen and (min-width: 3100px) {
        width: 1000px;
    }

    @media screen and (min-width: 2180px) {
        width: 600px;
    }

    @media screen and (max-width: 768px) {
        font-size: 8vw;
        margin-left: 32vw;
    }

    @media screen and (max-width: 640px) {
        margin-left: 18vw;
    }

    @media screen and (max-width: 480px) {
        width: 150px;
        font-size: 10vw;     
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
            <div class="circle5"/>
            <div className="box1" data-aos="fade-up">
                <div className="h2">Main Launch</div>
                <div className="p">November 20 2021</div>
                <div className="p">The mint will happen on November 20, 2021 at 17:00 UTC. The Fair Launch Protocol 
                will be used for this project, whitelisted 
                wallets will automatically win the lottery given that they bid at the Fair Price. The 
                remaining number of Bounty Hunters will be available for minting through the Fair Launch system, 
                more details will be released closer to launch.
                </div>
            </div>
            <div className="box2" data-aos="fade-up">
            <div className="h2">Post Launch</div>
                <div className="p">November 2021</div>
                <div className="p">Holders will now be able to verify their Bounty Hunters through Grape 
                and gain access to Private Discord channels and the Bounty Hunter Space Guild Dao. Digital 
                Eyes and Solanart will be the initial secondary marketplace to provide a safe and secure way for trading Bounty Hunters. 
                </div>
            </div>
            <div className="box3" data-aos="fade-up">
            <div className="h2">The Room</div>
                <div className="p">November 2021</div>
                <div className="p">The Tower x BHSG room will be filled with a portion of the mint sales. 
                Early holders get to participate in our little NFT spending spree.  <br /> <br />
                More details in Guild member benefits
                </div>
            </div>
            <div className="box4" data-aos="fade-up">
                <div className="h2">Sweep and Reap Launch</div>
                <div className="p">December 2021</div>
                <div className="p">The first iteration of the Sweep and Reap utility will be launched 
                allowing holders to vote on which projects to sweep as well as Reap the rewards of being
                a member of the Bounty Hunter Space Guild DAO.
                </div>
            </div>
            <div className="box5" data-aos="fade-up">
                <div className="h2">Universe building airdrops</div>
                <div className="p">2022</div>
                <div className="p">Bounty Hunter Upgrades and Spaceships are all 
                possibilities for future airdrops;  all dependent on what the community wants. 
                Every airdrop will be an integral part of the Bounty Hunter Space Guild universe.
                </div>
            </div>
            <div className="box6" data-aos="fade-up">
                <div className="h2">Merchandise Store and 3D Models</div>
                <div className="p">2022</div>
                <div className="p">A Merchandise Store for holders will be released, details on how to claim these purchase
                these items will released later on. 3D Helmet Renders will be also given to holders who ask for it.
                </div>
            </div>
        </div>
    </HeroContainer>
    </>
    )
}

export default Map
