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
    text1: '中科领界（苏州）科技有限公司',
    text2: 'DEDICATED TO THE BUSINESS SUPPLY OF ALLOY STRUCTURAL STEEL AND ALLOY TOOL STEEL'
  },
  {
    image: img2,
    text1: '机器视觉——让工业更有智慧',
    text2: 'MAKE INDUSTRY SMARTER'

  },
  {
    image: img3,
    text1: '机器视觉——让工业更有智慧',
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
      <div className="main">
        <div className="aboutus">
          <div className="main-header"><small>ABOUT US</small>
            <h4>关于我们</h4>
          </div>
          <div className="content">
            <p>
              中科机器视觉技术研究院。。。。。
            </p>
          </div>

        </div>
        <div className='products'>
          <div className="main-header"><small>PRODUCT</small>
            <h4>产品中心</h4>
          </div>
          <div className="content">
            <p>
              中科机器视觉技术研究院。。。。。
            </p>
          </div>
        </div>

        <div className='standards'>
          <div className="main-header"><small>EQUIPMENT</small>
            <h4>设备一览</h4>
          </div>
          <div className="content">
            <p>
              中科机器视觉技术研究院。。。。。
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
