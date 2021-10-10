import React, {useEffect} from 'react';
import './Cards.css';
import styled from 'styled-components';
import CardItem from './Carditem';
import ParticleBackground from '../ParticleBackground';
import "aos/dist/aos.css";
import Aos from "aos";

export const TeamContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vw;
    position: relative;
    margin-top: 5vw;
    margin-bottom: 20vw;

    @media screen and (max-width: 768px) {
      height: 1000px;
      margin-bottom: -10vw;

    @media screen and (max-width: 480px) {
      font-size: 32px;
      height: 1300px;
`
export const TeamBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const HeroContent = styled.div`
    position: absolute;
    margin-bottom: 700px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
      margin-bottom: 110vw;}

    @media screen and (max-width: 480px) {
      margin-bottom: 1300px;}
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 55px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    margin-top: -50px;
    text-shadow: 0 0 0.2em hsl(195 50% 50%);
    font-family: 'Saira Extra Condensed', sans-serif;
    font-weight: bold;
      
    @media screen and (max-width: 768px) {
        font-size: 48px;}
    
    @media screen and (max-width: 768px) {
        font-size: 32px;}
`

function Cards() {

  useEffect(() => {
    Aos.init({ duration: 2000});
  },[]);

  return (
  <TeamContainer id='team'>
    <TeamBg>
      <ParticleBackground></ParticleBackground>
      <ParticleBackground></ParticleBackground>
      <ParticleBackground></ParticleBackground>
      <ParticleBackground></ParticleBackground>
      <ParticleBackground></ParticleBackground>
      <ParticleBackground></ParticleBackground>
      <ParticleBackground></ParticleBackground>
    </TeamBg>
    <HeroContent data-aos="fade-up">
        <HeroH1>MEET THE TEAM</HeroH1>
    </HeroContent >
    <div className='space' data-aos="fade-up">
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../Images/Revan.png').default}
              text='Creative Director, Brand Manager
              Founder of Magical Mystery Gear. With a passion for Sci-Fi + Communications degree'
              label='ETHAN'
            />
            <CardItem
              src={require('../Images/Jaga.png').default}
              text='Lead Artist, Art Director. Professional workaholic, currently taking up a masters in innovation design in London'
              label='JAGA'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../Images/Sage.png').default}
              text='Lead Developer. Engineering graduate, big crypto lover except when he gets burned from futures.'
              label='SAGE'
            />
            <CardItem
              src={require('../Images/Horizon.png').default}
              text='Experienced copywriter, social media manager, and advertiser. Makes words go brrr.'
              label='ALEX'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  </TeamContainer>
  );
}

export default Cards;