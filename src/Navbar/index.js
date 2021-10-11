import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Image} from './NavbarElements'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter, faDiscord} from "@fortawesome/free-brands-svg-icons"
import '../Sidebar/icons.css'
import {animateScroll as scroll} from 'react-scroll';
import logo from '../Logos/logo.svg';

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
         if(window.scrollY >= 80) {
             setScrollNav(true)}
             else{
             setScrollNav(false)
             }
         }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <Image src={logo} alt="logo"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="benefits" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Utility</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Roadmap</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="faq" smooth={true} duration={500} spy={true} exact='true' offset={-80}>FAQ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="future" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Future</NavLinks>
                        </NavItem>
                        <a href="https://twitter.com/BountyHunterNFT" className="twitter social"> 
                        <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </a>
                        <a href="https://discord.gg/YPDJGKWMNX" className="discord social"> 
                        <FontAwesomeIcon icon={faDiscord} size="1x" />
                        </a>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
