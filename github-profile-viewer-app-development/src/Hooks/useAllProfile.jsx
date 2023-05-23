import { useState, useEffect } from 'react';

export default function useAllProfile()
{
    useEffect(() => {
        const storedProfiles = localStorage.getItem('allProfiles');
        const storedRepos = localStorage.getItem('allRepos');
        if (storedProfiles) {
          setUsers(JSON.parse(storedProfiles));
        }
        if (storedRepos) {
          setRepos(JSON.parse(storedRepos));
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);

  return{
    users,
    repos
  }
}  
