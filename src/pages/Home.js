import React, { useState } from 'react'
import datas from '../components/Slide'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

import '../css/Home.css'
import ExchangeRate from '../components/ExchangeRate'

const Home = () => {
  console.log(datas);

  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === datas.length -1? 0: slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0? datas.length -1: slide - 1)
  }
  
  return (
    <div style={{marginBottom: "100px", textAlign: "center"}}>
    
      <div className='carousel'>
      <BsArrowLeftCircleFill className='arrow arrowLeft' onClick={prevSlide}/>
        {datas.map((data, i) => {
          return <img src={data.image} key={i} alt='' className={slide === i ? 'slide': 'slide slide-hidden'}/>
        })}
        <BsArrowRightCircleFill className='arrow arrowRight' onClick={nextSlide}/>
        <span className='indicators'>
          {datas.map((_, i) => {
            return <button key={i} onClick={() => setSlide(i)} className={slide === i? 'indicator': 'indicator indicator-inactive'}></button>
          })}
        </span>
      </div>
      <ExchangeRate />
    </div>
  )
}

export default Home
