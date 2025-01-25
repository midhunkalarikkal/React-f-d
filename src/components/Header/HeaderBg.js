import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

const HeaderBg = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] shadow-lg">
      <img 
        src="https://img.freepik.com/free-photo/hot-pizza-adorned-with-vibrant-tomatoes-greens-features-melted-cheese-stretching-out_91128-4677.jpg?t=st=1737542567~exp=1737546167~hmac=e2372b708d3080c88279f215bf661cf0105f30a67f4b3ed286c06ea3785b09b4&w=1800"
        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover absolute top-0 left-0 z-0"
        alt="Background"
      />
      
      <div className="absolute top-0 left-0 w-full h-full bg-black via-transparent to-transparent z-1 opacity-30"></div>

      <Navbar />
      <Search />
    </div>
  )
}

export default HeaderBg