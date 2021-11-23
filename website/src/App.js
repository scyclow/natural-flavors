
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

function Redirect() {
  const l = useLocation()
  debugger
  return null
}


function App() {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/natural-flavors' : '/'}>
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

        {/*<Route path="/" render={() => <Redirect />} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App;



