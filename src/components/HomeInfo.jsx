import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox =({text, link, btnText}) => {
    
    <div className='info-box'>
        {text}
        <Link to={link}>
            {btnText}
        </Link>
    </div>
}

const renderContent={
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue px-8 py-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'>Humayun </span>👋
        <br/>
          A Website Developer From Pakistan
        </h1>
    ),
    2: (
        
        <InfoBox
        text={"Here's some of my work."}
        link={"/about"}
        btnText={"See More!"}
        />
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    ),

}


const HomeInfo = ({currentStage}) => {
  return renderContent [currentStage] || null;

}

export default HomeInfo