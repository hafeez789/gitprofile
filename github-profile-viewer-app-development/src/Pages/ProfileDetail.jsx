import useProfileDetail from "../Hooks/useProfileDetail"
const ProfileDetail = () => {

  
  const {followers,following,back,user,repo,getFollowers,getFollowing,show,setShow} = useProfileDetail();


  return (
    <>

      {
        user&&
        <div className="container">
      <h1 style={{fontSize:"50px",color:"white"}}>Profile details</h1>
      
        <div className="box">
          <div className="profile-box">
            <div className="row">
              <div className="image">
                <img src={user.avatar_url} alt="user" />
              </div>
              <div className="about">
                <div className="details">
                  <h1 className="name">{user.name} </h1>
                  <h3 className="username">{user.login}</h3>
                  <p className="country">
                    <span>
                      <ion-icon name="location-sharp" />
                    </span>
                    {user.location ? user.location : 'No Location'}
                  </p>
                </div>
                <div className="btn-profile">
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    Visit Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="bio">
              <h3>About</h3>
              <p>{user.bio ? user.bio : 'No bio'}</p>
            </div>
            <div className="row-followers">
              <div className="col">
                <h3 className="heading">Followers</h3>
                <p>{user.followers}</p>
              </div>
              <div className="col">
                <h3 className="heading">Following</h3>
                <p>{user.following}</p>
              </div>
              <div className="col">
                <h3 className="heading">Repos</h3>
                <p>{repo.length-1}</p>
              </div>
            </div>
            <div className="row-followers">
              <div className="col">
                <h3 className="heading">
                  <button className="btn-style" onClick={getFollowers}>Followers</button>
                </h3>
              </div>
              <div className="col">
                <h3 className="heading">
                  
                  <button className="btn-style" onClick={getFollowing}>Following</button>
                </h3>
              </div>
              <div className="col">
                <h3 className="heading">
                  <button className="btn-style" onClick={() => setShow('repo')}>Repos</button>
                </h3>
              </div>
            </div>
            <div className="respos-row">
              <ul id="repo">
                {show === 'repo' ? (
                  repo.map((repo) => {
                    return (
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <li key={repo.id}>{repo.name}</li>
                      </a>
                    );
                  })
                ) : show === 'followers' ? (
                  followers.map((follower) => {
                    return (
                      <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
                        <li key={follower.id}>{follower.name ? follower.name : follower.login}</li>
                      </a>
                    );
                  })
                ) : (
                  following.map((follower) => {
                    return (
                      <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
                        <li key={follower.id}>{follower.name ? follower.name : follower.login}</li>
                      </a>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
        
          <button style={{width:"150px",height:"50px",borderRadius:"10px",fontSize:"15px",backgroundColor:"blue",color:"white"}} onClick={back}>Search More Profiles</button>
        
        
      </div>
      }
        
    </>
  );
};

export default ProfileDetail;
