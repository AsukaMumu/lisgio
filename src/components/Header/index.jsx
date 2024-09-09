// Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Header.scss'; // 确保引用正确的样式
import logo from '../../assets/img/logo1.png';

export default function Header() {
  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = rect.width;

    if (offsetX < width / 2) {
      e.currentTarget.classList.add('enter-from-left');
    } else {
      e.currentTarget.classList.add('enter-from-right');
    }
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove('enter-from-left', 'enter-from-right');
  };

  const navItems = [
    { to: "/", label: "首页" },
    { to: "/about", label: "关于我们" },
    { to: "/products", label: "产品中心" },
    { to: "/standards", label: "工艺标准" },
    { to: "/equipment", label: "设备一览" },
    { to: "/careers", label: "人才招聘" },
    { to: "/contact", label: "联系我们" }
  ];

  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="nav-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
