import React from 'react'
import About from './pages/about/About'
import AppRouter from './router/AppRouter'

const App = () => {
  return (
    <div className='appWrapper'>
      <AppRouter />
    </div>
  )
}

export default App