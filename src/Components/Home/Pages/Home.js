import React from 'react'
import Introduce from '../Components/Introduce'
import AboutMySeft from '../Components/AboutMySeft'
import MySkill from '../Components/MySkill'
import Interest from '../Components/Interest'

const Home = () => {

    return (
        <div>
            <Introduce />
            <AboutMySeft />
            <MySkill />
            <Interest />
        </div>
    )
}

export default Home