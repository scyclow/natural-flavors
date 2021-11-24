
import './App.css';

import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import Main from './Main'
import Page from './Page'




export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



const basename = window.location.href.includes('steviep.xyz/natural-flavors')
  ? '/natural-flavors'
  : '/'

function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route
          path="/packets/:id"
          element={
            <Page />
          }
        />

        <Route
          exact
          path="/"
          element={
            <Main />
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App;



