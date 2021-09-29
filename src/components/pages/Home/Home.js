import React from 'react'
import Footer from '../FooterPage/Footer'
import HeroSection from '../HeroSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
import Pricing from './Pricing'
function Home() {
    return (
        <React.Fragment>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjThree}/>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjFour}/>
            <Footer/>
            <Pricing/>
        </React.Fragment>
    )
}

export default Home;
