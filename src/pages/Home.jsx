import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import PizzaSubsribe from '../Components/PizzaSubscibe/PizzaSubscribe';

const Home = () => {
  return (
    <div>
       <Hero />
       <Popular />
       <Offers />
       <PizzaSubsribe />
    </div>
  )
}

export default Home