import React from 'react';
import Card from './Card';
import useSearch from '../Hooks/useSearch';
import { RotatingLines } from 'react-loader-spinner'

const SearchUser = () => {

  const { submitHandler, inputHandler, profile, repos, flag, username, isLoading } = useSearch();
  console.log(profile)
  return (
    <>

      <div className="input-box">
        <input type="text" value={username} style={{ color: "white" }} placeholder="Search here..." onChange={inputHandler} />
        <button className="button" onClick={submitHandler}>
          Search
        </button>
      </div>
      <div className='margin'>
      {isLoading ? <RotatingLines /> : (profile.message) ? <div className='no-user'>{profile.message}</div> : (profile.login && flag) && <Card user={profile} repos={repos} username={username} />}
      </div>
    </>
  );
};

export default SearchUser;
