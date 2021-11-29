
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

  const lines = window.innerWidth < 790 ? 40 : 75
  const a = window.innerWidth < 790 ? 2.5 : 2
  const paths = []
  for (let i=0; i<lines; i++) {
    paths.push(<path key={i} d={`M0 ${a*i*(window.innerHeight/lines)} ${a*i*(window.innerWidth/lines)} 0`} style={{ animationDelay: `-${i*0.5}s`}} />)
  }
  const responsiveStyle = window.innerWidth < 790 ? { height: '100vh'} : {}
  return (
    <>
      <svg
        viewBox="0 0 640 640"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'fixed', zIndex: -1, ...responsiveStyle }}
      >
        {paths}
      </svg>

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
      <footer>
        <div>
          <div><a href="https://twitter.com/steviepxyz" target="_blank" rel="nofollow">twitter</a></div>
          <div><a href="https://discord.gg/9uA8WBFpcB" target="_blank" rel="nofollow">discord</a></div>
          <div><a href="https://steviep.xyz" target="_blank">steviep</a> (c) 2021</div>
        </div>
      </footer>
    </>
  )
}

export default App;



