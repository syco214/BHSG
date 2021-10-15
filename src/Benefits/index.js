import { useState } from "react";
import React from 'react';
import styled from "styled-components";
import ParticleBackground from '../ParticleBackground';
import "./Tabs.css";

export const HeroBg = styled.div`
    position: absolute;
    background: black;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const HeroContainer = styled.div`
    background: black;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 710px;
    position: relative;
    z-index 1;

    @media screen and (max-width: 480px) {
        margin-top: -100px;
    }
`

export const HeroContent = styled.div`
    position: absolute;
    margin-bottom: 500px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #white;
    font-size: 48px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 270px;
    text-shadow: 0 0 0.2em hsl(195 50% 50%);
    font-family: 'Saira Extra Condensed', sans-serif;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 30px;
        margin-left: 23vw;
      }

    @media screen and (max-width: 640px) {
        font-size: 28px;
        margin-left: 15vw;
      }

    @media screen and (max-width: 480px) {
        font-size: 28px;
      }
`

function Tabs() {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
  setToggleState(index)};

return(
    <HeroContainer id='benefits'>
      <HeroBg>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
      </HeroBg>
    <div>
    <HeroContent>
        <HeroH1>GUILD MEMBER BENEFITS</HeroH1>
    </HeroContent>
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Sweep and Reap
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Future <br/>
          Airdrops
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          3D Model
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Access
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Eliminate Targets and Reap The Rewards</h2>
          <hr />
          <p>
          Each holder is entitled to a holder vote per month, 85 percent of all secondary 
          sales go towards the Bounty Hunter Space Guild Dao. 
          Guild members can choose to either <br/> <br/>
          <b>Eliminate</b> targets by sweeping the floor of a community chosen NFT project on Sol. 
          What to do with the swept NFT’s will be decided by the community. They can be given out randomly to holders, 
          donated to charity, held, or even deleted. #HappyHunting <br/><br/>
          And <br/><br/> <b>Reap</b> the rewards by collecting their bounties. If holders choose to reap the reward, 
          the community gains access to special rewards from the Bounty Hunter Space Guild DAO.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Access to Future Airdrops</h2>
          <hr />
          <p>
          If you are a Bounty Hunter holder, you are entitled to future airdrops which would also grant access to 
          Bounty Hunter Space Guild merchandise. Classified Information for now, but we will be sure to have world-building 
          as rich as all of our favorite Sci-Fi universes. 
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>3D Helmet Models</h2>
          <hr />
          <p>
          Holders will be given 3D renders of their Bounty Hunter helmets. 
          These helmets can be used in the Metaverse
          </p>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Access to Merch and Private Discord Channels</h2>
          <hr />
          <p>
          Verified Bounty Hunter Holders on Discord will be able to access “The Guild” and “The Mission Room” Channel on discord. 
          The team also plans to partner up with Grape to enable a community DAO to vote for sweeping or reaping. <br></br><br></br>
          A Merchandise store will also be made available for Verified Bounty Hunter Holders.
          </p>
        </div>
      </div>
    </div> 
    </div>
  </HeroContainer>
  );
}

export default Tabs;