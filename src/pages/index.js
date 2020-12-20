import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fas fa-heart"></span>
        </div>
        <h2>{config.heading}</h2>
        <h4>{config.subHeading}</h4>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">He Asked...She Said YES !</h2>
            <p>
              We are happy and excited to announce that we will be tying the
              knot soon. So join us as we get engaged and help us celebrate this
              moment with us and shower us with your blessings !
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">SAVE THE DATE !</h2>
            <p>February 04th, 2020 (Thursday) between 10:30 AM and 12:00 PM</p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">WHERE ?</h2>
            <p>Narayana Guruvaiya Mandapam, Sannathi Street, Srivilliputur</p>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Narayana+Guru+Mahal/@9.5084334,77.633127,15z/data=!4m5!3m4!1s0x0:0xcc928a34929d6a3b!8m2!3d9.5084334!4d77.633127"
              className="special"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
