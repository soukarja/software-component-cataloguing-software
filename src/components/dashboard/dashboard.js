import React from 'react'
import Header from '../header/header'
import "./dashboard.css"
import SearchBar from '../searchbar/searchbar'
import AllComponents from '../allcomponents/allcomponents'

const Dashboard = () => {
  return (
   <>
   <Header/>
   <SearchBar />
   <AllComponents />
   </>
  )
}

export default Dashboard