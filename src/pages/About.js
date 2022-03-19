import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';
function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>
            We’re not for people who want to blend in: pushing boundaries is part of our heritage.
            We have more than 16,000 restaurants and 350,000 team members in more than 100 countries. 
            Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop driving 
            ourselves to deliver hot pizzas, fast every time – anywhere you want to enjoy it.

            WHAT WE’RE ABOUT

            At Pizza Corner, we don’t just make pizza. We make people happy. Pizza Corner was built on the 
            belief that pizza night should be special, and we carry that belief into everything we do. 
            With more than 55 years of experience under our belts, we understand how to best serve our customers 
            through tried and true service principles: We create food we’re proud to serve and deliver it fast, 
            with a smile.
            </p>
        </div>
    </div>
  )
}

export default About