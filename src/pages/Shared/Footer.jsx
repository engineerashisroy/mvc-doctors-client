import React from "react";
import footerImg from "../../assets/images/footer.png";
import site_logo from "../../assets/images/site_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${footerImg})` }} className="p-0 m-0">
      <div>
        <footer className="footer  bg-gradient-to-r from-primary to-secondary text-base-content p-4 ">
          <div className="footer">
            <aside>
              <Link to="/">
                <img src={site_logo} alt="site logo" />
                <p className="italic text-3xl">Sintheya Clinic</p>
              </Link>
              <div>
                <br />
                Providing reliable Service since 2024
              </div>
            </aside>
            <nav>
              <h6 className="footer-title text-2xl">Quick Link</h6>
              <Link to="/" className="link link-hover">
                About Us
              </Link>

              <Link to="/" className="link link-hover">
                Services
              </Link>

              <Link to="/" className="link link-hover">
                Doctors
              </Link>

              <Link to="/" className="link link-hover">
                Departments
              </Link>

              <Link to="/" className="link link-hover">
                Online Payment
              </Link>

              <Link to="/" className="link link-hover">
                Contact Us
              </Link>
              <Link to="/" className="link link-hover">
                My Account
              </Link>
            </nav>
            <nav>
              <h6 className="footer-title text-2xl">S. Clinic Services</h6>
              <Link className="link link-hover">Teeth Orthodontics</Link>
              <Link className="link link-hover">Cosmetic Dentistry</Link>
              <Link className="link link-hover">Teeth Cleaning</Link>
              <Link className="link link-hover">Cavity Protection</Link>
              <Link className="link link-hover">Pediatric Dental</Link>
              <Link className="link link-hover">Oral Surgery</Link>
            </nav>
            <nav className="text-center ">
              <h6 className="footer-title text-2xl">Working Hours</h6>
              <Link className="link link-hover">Monday - 10 . am to 7 pm</Link>
              <Link className="link link-hover">Tuesday - 10 . am to 7 pm</Link>
              <Link className="link link-hover">
                Wednesday - 10 . am to 7 pm
              </Link>
              <Link className="link link-hover">
                Thursday - 10 . am to 7 pm
              </Link>
              <Link className="link link-hover">Friday - 10 . am to 7 pm</Link>
              <Link className="link link-hover">
                Saturday - 10 . am to 7 pm
              </Link>
              <Link className="link link-hover">Sunday - 10 . am to 7 pm</Link>
            </nav>
          </div>
        </footer>

        <div className="bg-cyan-300 p-2">
          <p className="text-center text-2xl">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
