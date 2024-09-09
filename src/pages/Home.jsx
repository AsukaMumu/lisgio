//主页

import React from 'react';
import Carousel from '../components/Carousel';
import '../css/Home.scss';
import img1 from '../assets/img/111.jpeg';
import img2 from '../assets/img/222.jpg';
import img3 from '../assets/img/333.jpg';

const slides = [
  { 
    image: img1, 
    text1: '中科领界（苏州）科技有限公司' ,
    text2: 'DEDICATED TO THE BUSINESS SUPPLY OF ALLOY STRUCTURAL STEEL AND ALLOY TOOL STEEL'
  },
  { 
    image: img2, 
    text1: '机器视觉——让工业更有智慧' ,
    text2: 'MAKE INDUSTRY SMARTER'

  },
  { 
    image: img3, 
    text1: '机器视觉——让工业更有智慧' ,
    text2: 'MAKE INDUSTRY SMARTER'
  },
];

export default function Home() {
  return (
    <div className='home'>
      <Carousel 
        slides={slides} 
        interval={5000} 
        showControls={true} 
        className="custom-carousel"
      />
      {/* 其他内容 */}
    </div>
  );
}
