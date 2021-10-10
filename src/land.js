import React, {useState} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./About";
import Info from "./Info";
import Lore from "./Future";
import Map from "./Map"
import Tabs from "./Benefits";
import Carousel from "./Carousel";
import Cards from "./Team"
import { homeObjOne } from "./Info/Data";
import { homeObjTwo } from "./Future/Data";
import Footer from "./Footer";
import Faq from "./FAQ";

const Land = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
        <div style={{backgroundColor:'black'}}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>  
            <Hero/>
            <Info {...homeObjOne}/>
            <Tabs />
            <Carousel />
            <Map />
            <Cards />
            <Faq/>
            <Lore {...homeObjTwo}/>
            <Footer/>
        </div>
        </>
    );
} 

export default Land;