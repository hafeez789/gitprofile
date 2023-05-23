import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({user,repos,username}) => {
  // console.log(user);
  console.log(repos.length);
  return (
 <>
  <div className='card'>
    <div className="lines"></div>
    <div className='imgBox'>
      <img src={user.avatar_url} alt='user'/>
    </div>
    <div className='content'>
      <div className='details'>
        <h2>{user.login}<br/> <span>{user.bio?user.bio.slice(0,30) :"no bio "}...</span></h2>
      <div className='data'>
        <h3>{repos.length-1}<br/> <span>Repos</span></h3>
        <h3>{user.followers}<br/> <span>Followers</span></h3>
        <h3>{user.following}<br/> <span>Following</span></h3>
      </div>
      <div className='actionBtn'>
      <Link to={`/profiledetail/${username}`}><button>Detail</button></Link>
      
      </div>
      </div>
    </div>
  </div>
 </>
  )
}

export default Card

