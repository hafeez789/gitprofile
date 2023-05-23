// import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import useAllProfile from '../Hooks/useAllProfile';
const AllProfiles = () => {

  const {users,repos} = useAllProfile()
  return (
    <div className="container">
      <h1 style={{fontSize:"50px",color:"white"}}>All Profiles</h1>
    
      <div className="products-container">
        {users.map((user) => { 
          const userRepos = repos.find((repo) => repo[repo.length - 1].user === user.user);
          console.log(userRepos);
          return (
            <div className='margin'>

            <Card  user={user} repos={userRepos} username={user.user} />
            
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProfiles;
