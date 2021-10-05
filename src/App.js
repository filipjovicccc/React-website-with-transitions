import React from 'react'
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
import {Switch, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'  // potrebno da se stavi kada se koriste animacije

//u promeni stranice, dakle ako imamo animaciju, tj tranziciju kada promenimo samu stranicu

//moramo da stavimo u filu gde nam je rutiranje, da bi react prepoznao


function App() {
  const location = useLocation();
  return (
    <div className="App">
        <GlobalStyle />
        <Nav />
        <AnimatePresence exitBeforeEnter>
      <Switch Location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
       </Switch>
       </AnimatePresence>
  </div>
  );
}

export default App;
