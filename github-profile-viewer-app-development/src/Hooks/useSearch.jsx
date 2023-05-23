import { useState, useEffect } from 'react';

export default function useSearch()
{

    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState({});
    const [repos, setRepos] = useState([]);
    const [flag, setFlag] = useState(false);
    const [allProfiles, setAllProfiles] = useState([]);
    const [allRepos,setAllRepos] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
  
    useEffect(() => {
      const storedProfiles = localStorage.getItem('allProfiles');
      const storedRepos = localStorage.getItem("allRepos"); 
      if (storedProfiles) {
        setAllProfiles(JSON.parse(storedProfiles));
      }
      if(storedRepos)
      {
          setAllRepos(JSON.parse(storedRepos));
      }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
  
    const inputHandler = (e) => {
      setUsername(e.target.value);
    };
  
    const fetchProfile = async () => {
      if (allProfiles.length > 0) {
        const profileFilter = allProfiles.find((profile) => profile.user === username);
        if (profileFilter) {
          setProfile(profileFilter);
          console.log("local");
          return;
        }
      }
  
      try {
        setIsLoading(true);
        let fetchedProfile = await fetch(`https://api.github.com/users/${username}`);
        fetchedProfile = await fetchedProfile.json();
          
          if(fetchedProfile.message){
            console.log(fetchedProfile.message);
            setIsLoading(false);
            setProfile(fetchedProfile)
            return;
          }
          console.log("api");
        let updatedProfile = { ...fetchedProfile, user: username };
  
        setProfile(updatedProfile);
  
        let updatedAllProfiles = [...allProfiles, updatedProfile];
        setAllProfiles(updatedAllProfiles);
        localStorage.setItem('profil', JSON.stringify(updatedProfile));
        localStorage.setItem('allProfiles', JSON.stringify(updatedAllProfiles));
      } catch (e) {
        console.log(e);
      }
      finally {
        setIsLoading(false);
      }
    };
  
    const fetchRepos = async () => {
      
    
      if(allRepos.length>0)
      {
          
  
          const repoFilter = allRepos.find((repo)=>{
              return repo[repo.length-1].user === username
          })
  
          if(repoFilter)
          {
              setRepos(repoFilter);
              console.log("local");
  
              return;
          }
  
  
      }    
      try {
        let fetchedRepos = await fetch(`https://api.github.com/users/${username}/repos`);
        fetchedRepos = await fetchedRepos.json();
        let updatedRepo = [ ...fetchedRepos, {user: username} ];
        setRepos(updatedRepo);
  console.log("api");
        let updatedAllRepo = [...allRepos,updatedRepo];
  
        setAllRepos(updatedAllRepo);
  
        localStorage.setItem('repos', JSON.stringify(updatedRepo));
        
        localStorage.setItem('allRepos', JSON.stringify(updatedAllRepo));
      } catch (e) {
        console.log(e);
      }
    };
  
    const submitHandler = () => {
      fetchProfile();
      fetchRepos();
      setFlag(true);
    };

    return{
        submitHandler,
        inputHandler,
        profile,
        repos,
        flag,
        username,
        isLoading
    };

}
