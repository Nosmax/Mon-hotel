import React from 'react'
import Slide from './Slide'
import data from './Data'
import  "./Home.css"

const Hero = () => {
  return (
        <div>
          <Slide slides={data}/>
        </div>
  )
}

export default Hero