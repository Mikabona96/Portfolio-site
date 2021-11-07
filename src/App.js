import React from "react";
//Import Components
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import MovieDetail from './pages/MovieDetail';
import ContactUs from './pages/ContactUs';
//Router
import { Route, Switch, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
         <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={AboutUs} />
          <Route path="/work" exact component={OurWork} />
          <Route path="/work/:id" component={MovieDetail} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
