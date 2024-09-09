// Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Footer.scss';
import logo from '../../assets/img/logo1.png';
import qr from '../../assets/img/wechat.jpg';
import '../../assets/icon/iconfont.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="Logo" className='bottomimg' />
        </div>
        <div className="footer-nav">
          <NavLink to="/">首页</NavLink>
          <span>|</span>
          <NavLink to="/about">关于我们</NavLink>
          <span>|</span>
          <NavLink to="/products">产品中心</NavLink>
          <span>|</span>
          <NavLink to="/standards">工艺标准</NavLink>
          <span>|</span>
          <NavLink to="/equipment">设备一览</NavLink>
          <span>|</span>
          <NavLink to="/careers">人才招聘</NavLink>
          <span>|</span>
          <NavLink to="/contact">联系我们</NavLink>
        </div>
      </div>
      <div className="right">
        <div className="qr">
          <img src={qr} alt="wechat" className='wechatimg' />
        </div>
        <div className="tel">
          <i class="iconfont icon-tel"><span>15962422436</span></i>
          <i class="iconfont icon-mail"><span> tolovcc@126.com</span></i>
          <i class="iconfont icon-loc"><span>
            <a
              href="https://maps.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D江苏省苏州市苏州工业园区金鸡湖大道88号人工智能产业园E1栋"
              target="_blank"
              rel="noopener noreferrer"

            >
              江苏省苏州市苏州工业园区金鸡湖大道88号人工智能产业园E1栋
            </a>
          </span></i>
        </div>
      </div>
      <div className="bottom">
        <span>Copyright © 2021 苏州领界网络科技有限公司 All Rights Reserved.</span>
      </div>
    </div>
  );
}
