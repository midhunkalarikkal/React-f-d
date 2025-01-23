import React from 'react'
import Header from './Header'

const HeaderBg = () => {
  return (
    <div className="relative w-full h-screen">
        <img 
        src="https://img.freepik.com/free-photo/hot-pizza-adorned-with-vibrant-tomatoes-greens-features-melted-cheese-stretching-out_91128-4677.jpg?t=st=1737542567~exp=1737546167~hmac=e2372b708d3080c88279f215bf661cf0105f30a67f4b3ed286c06ea3785b09b4&w=1800" 
        className="w-full h-[700px] object-cover absolute top-0 left-0 z-0" 
        alt="Background" 
        />
        <Header />
    </div>
  )
}

export default HeaderBg