import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
     <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
   
  )
}

export default App