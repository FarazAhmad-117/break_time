import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import ErrorBoundry from './components/ErrorBoundry.jsx'
import Home from './components/Home/Home.jsx'
import { About, Contact, Github, MoviePage, MoviePlayer, Movies, SeriesPage, SeriesPlayer, WebSeries } from './components/index.js'
import { loadGitData } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
    path='/' 
    element={<App/>}
    errorElement={<ErrorBoundry/>}
    >
      <Route path='' element={<Home/>} />
      <Route path='movies' element={<Movies/>} />
      <Route path='tv' element={<WebSeries/>} />
      <Route path='about' element={<About/>} />
      <Route path='github' element={<Github/>} loader={loadGitData} />
      <Route path='contact' element={<Contact/>} />
      <Route path='mplay/:movieId' element={<MoviePage/>}/>
      <Route path='tvplay/:seriesId' element={<SeriesPage/>}/>
      <Route path='tv-pl/:seasonId/:seasonNum/:episodeNum' element={<SeriesPlayer/>}/>
      <Route path='mv-pl/:movieId' element={<MoviePlayer/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
