import React from 'react'
import SearchUser from '../Components/SearchUser';

const Home = () => {
    
  return (
    <>
     <div className='container'>
    <h1 style={{fontSize:"50px",color:"white"}}>Search Profile</h1>
    <br/>
    <SearchUser/>
    </div>
    </>
  )
}

export default Home