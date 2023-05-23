import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
   <footer className="footer-distributed">
  <div className="footer-left">
    <h3>GitHub <span>Profile Viewer App</span></h3>
    <p className="footer-links">
      <Link to={"/"}>Search Profile</Link>
      |
      <Link to={"/profiles"}>All Profiles</Link>
      
    </p>
    <p className="footer-company-name">Copyright © 2021 <strong>GitHub</strong> All rights reserved</p>
  </div>
  <div className="footer-center">
    <div>
      <i className="fa fa-map-marker" />
      <p><span>Lahore</span>
        Pakistan</p>
    </div>
    <div>
      <i className="fa fa-phone" />
      <p>0304**9**25</p>
    </div>
    <div>
      <i className="fa fa-envelope" />
      <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
    </div>
  </div>
  <div className="footer-right">
    <p className="footer-company-about">
      <span>About the App</span>
      <strong>GitHub Profile Viewer App</strong>
    </p>
    <div className="footer-icons">
      <button><i className="fab fa-facebook" /></button>
      <button><i className="fab fa-instagram" /></button>
      <button><i className="fab fa-linkedin" /></button>
      <button><i className="fab fa-twitter" /></button>
      <button><i className="fab fa-youtube" /></button>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
