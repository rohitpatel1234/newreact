import React from 'react'
import "./Footerx.css"

const Footerx = () => {
  return (
      <>
<footer className="footer-distributed">

  <div className="footer-left">

    <h3>Groo<span>Min</span></h3>

    <p className="footer-links">
      <a href="#link1" class="link-1">Home</a>

      <a href="#pric">Pricing</a>

      <a href="#abo">About</a>

      <a href="#con">Contact</a>
    </p>

                  <p className="footer-company-name">Groomin © 2015</p> 
                  <p className="footer-company-name">Created By Rohit</p>
                 
  </div>

  <div className="footer-center">

    <div>
      <i className="fa fa-map-marker"></i>
      <p><span>444 S. Cedros Ave</span> Solana Beach, India</p>
    </div>

    <div>
      <i className="fa fa-phone"></i>
      <p>+916387162036</p>
    </div>

    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="mailto:support@company.com">support@company.com</a></p>
    </div>

  </div>

  <div className="footer-right">

    <p className="footer-company-about">
      <span>About the company</span>
      Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    <div className="footer-icons">

      <a href="#f"><i class="fa fa-facebook"></i></a>
      <a href="#t"><i class="fa fa-twitter"></i></a>
      <a href="#l"><i class="fa fa-linkedin"></i></a>
      <a href="#j"><i class="fa fa-github"></i></a>
      <a href="#j"><i class="fa fa-user"></i></a>

    </div>

  </div>

</footer>
      </>
  )
}

export default Footerx