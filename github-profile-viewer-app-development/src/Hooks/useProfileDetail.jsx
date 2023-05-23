import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function useProfileDetail() {
  const { username } = useParams();

  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [allProfilesFollowers, setAllProfilesFollowers] = useState([]);
  const [allProfilesFollowing, setAllProfilesFollowing] = useState([]);
  const [show, setShow] = useState('repo');

  const navigate = useNavigate();

  useEffect(() => {
    const storedProfiles = localStorage.getItem('allProfiles');
    const storedRepos = localStorage.getItem('allRepos');
    const storedFollowers = localStorage.getItem('allFollowers');
    const storedFollowing = localStorage.getItem('allFollowing');

    if (storedProfiles) {
      setUsers(JSON.parse(storedProfiles));
    }
    if (storedRepos) {
      setRepos(JSON.parse(storedRepos));
    }
    if (storedFollowers) {
      setAllProfilesFollowers(JSON.parse(storedFollowers));
    }
    if (storedFollowing) {
      setAllProfilesFollowing(JSON.parse(storedFollowing));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const repo = repos.find((repo) => repo[repo.length - 1].user === username);

  const user = users.find((profile) => profile.user === username);

  const getFollowers = async () => {
    if (allProfilesFollowers.length > 0) {
      const follower = allProfilesFollowers.find(
        (followers) => followers[followers.length - 1].user === username
      );

      if (follower) {
        setFollowers(follower);
        setShow('followers');
        return;
      }
    }
    try {
      let fetchedFollowers = await fetch(
        `https://api.github.com/users/${user.login}/followers`
      );
      fetchedFollowers = await fetchedFollowers.json();
      let updatedFollowers = [...fetchedFollowers, { user: username }];
      setFollowers(updatedFollowers);

      let updatedAllFollowers = [...allProfilesFollowers, updatedFollowers];
      setAllProfilesFollowers(updatedAllFollowers);
      localStorage.setItem('allFollowers', JSON.stringify(updatedAllFollowers));

      setShow('followers');
    } catch (error) {
      console.log(error);
    }
  };

  const getFollowing = async () => {
    if (allProfilesFollowing.length > 0) {
      const following = allProfilesFollowing.find(
        (following) => following[following.length - 1].user === username
      );

      if (following) {
        setShow('following');
        setFollowing(following);
        return;
      }
    }
    try {
      let fetchedFollowing = await fetch(
        `https://api.github.com/users/${user.login}/following`
      );
      fetchedFollowing = await fetchedFollowing.json();
      let updatedFollowing = [...fetchedFollowing, { user: username }];
      setFollowing(updatedFollowing);

      let updatedAllFollowing = [...allProfilesFollowing, updatedFollowing];
      setAllProfilesFollowing(updatedAllFollowing);
      localStorage.setItem('allFollowing', JSON.stringify(updatedAllFollowing));

      setShow('following');
    } catch (error) {
      console.log(error);
    }
  };

  const back = () => {
    navigate('/');
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return {
    followers,
    following,
    back,
    user,
    repo,
    getFollowers,
    getFollowing,
    show,
    setShow,
  };
}
