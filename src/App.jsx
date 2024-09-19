import { useState } from 'react'
import './App.css'
import HeaderApp from './assets/components/header'
import HeroApp from './assets/components/hero'
import AboutApp from './assets/components/about'
import ServicesApp from './assets/components/services'
import WhyChooseUsApp from './assets/components/why-choose-us'
import ContactApp from './assets/components/contacts'
import FooterApp from './assets/components/Footer'
import ImpactApp from './assets/components/global-impact'
import Testimonial from './assets/components/testimonial'
import TestimonialCarousel from './assets/components/testimonial'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  

  return (
    <>
      <HeaderApp />

      <HeroApp />
      <AboutApp />
      <ServicesApp />
      <WhyChooseUsApp></WhyChooseUsApp>
      <ImpactApp />
      <TestimonialCarousel></TestimonialCarousel>
      <ContactApp />
      <FooterApp />
    </>
  )
}

export default App
