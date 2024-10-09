//关于我们
import React from 'react'

export default function AboutUs() {
  return (
    <div className="section">
      <div className="container">
        <div className="position">
          <div className="wz">
            <a href="/index.html">首页</a><a href="/about.html">关于我们</a>
          </div>
          <div className="tit">关于我们</div>
        </div>
        <dl className="in-about about-s clearfix">
          <dt className="img-center">
            <img src="static/picture/1633688541848865.jpg" alt="关于我们图片" />
          </dt>
          <dd>
            <h4>中科领界（苏州）科技有限公司</h4>
            <p style={{ textIndent: '2em', lineHeight: '2', textAlign: 'justify' }}>
              中科机器视觉技术研究院于2019年成立于中国苏州，依托中科院自动化所在人工智能和计算机视觉等方向上的技术积累，致力于深度学习算法研发及视觉检测系统、视觉检测设备领域。
            </p>
            {/* 其他 <p> 标签内容保持一致 */}
            <ul>
              <li>
                <div className="wrap">
                  <div className="num"><strong>2024</strong>年</div>
                  <p>创建于</p>
                </div>
              </li>
              <li>
                <div className="wrap">
                  <div className="num"><strong>800+</strong>万元</div>
                  <p>资产总额</p>
                </div>
              </li>
              <li>
                <div className="wrap">
                  <div className="num"><strong>200+</strong>亩</div>
                  <p>公司占地面积</p>
                </div>
              </li>
              <li>
                <div className="wrap">
                  <div className="num"><strong>5+</strong>人</div>
                  <p>公司现有员工</p>
                </div>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  );
}
