import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
const Navbar = () => {

  const profile = useRef();
  const home = useRef();
  const actions = () => {
    const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");
    const allProfile = profile.current;
    const Home = home.current

    menuBtn.onclick = () => {
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    };

    cancelBtn.onclick = () => {
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    };

allProfile.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
};
Home.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
};

    searchBtn.onclick = () => {
      cancelBtn.classList.add("show");
    };
  };

  useEffect(() => {
    actions();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <nav>
      <div className="menu-icon">
        <span className="fas fa-bars" />
      </div>
      
      <div className="logo">
        GitHub Profile Viewer App
      </div>
      
      <ul className="nav-items">
        <li><Link ref={home} to={"/"}>Search Profile</Link></li>
        <li>
        <Link ref={profile} to={"/profiles"}>All Profiles</Link>
        </li>
       
      </ul>
      <div className="search-icon">
        {/* <span className="fas fa-search" /> */}
      </div>
      <div className="cancel-icon">
        <span className="fas fa-times" />
      </div>
      
    </nav>
  );
};

export default Navbar;
