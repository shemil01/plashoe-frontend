import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-bdr">
        <div>
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg"
            alt=""
          />
          <br />
          <br />
          <br />
          <p>
            Praesent eget tortor sit risus
            <br />
            egestas nulla pharetra ornare
            <br />
            quis bibendum est bibendum
            <br />
            sapien proin nascture
          </p>
        </div>
        <div>
          <h3>Shop</h3>
          <br />
          <p>
            {" "}
            <Link to="Men">Shop Men</Link>
          </p>

          <p>
            <Link to="Woman">Shop women</Link>
          </p>

          <p>
            <Link to="Lookbook">Lookbook</Link>
          </p>

          <p>
            {" "}
            <Link>Gift Card</Link>
          </p>

          <p>
            {" "}
            <Link>Sale</Link>
          </p>
        </div>
        <div>
          <h3>About</h3>
          <br />

          <p>
            <Link to="Ourstory">Our Story</Link>
          </p>

          <p>
            {" "}
            <Link>Our Materials</Link>
          </p>

          <p>
            <Link>Our Value</Link>
          </p>

          <p>
            {" "}
            <Link>Sustainabilty</Link>
          </p>

          <p>
            <Link>Manufacture</Link>
          </p>
        </div>
        <div>
          <h3>Need Help?</h3>

          <br />
          <p>
            {" "}
            <Link>FAQs</Link>
          </p>

          <p>
            <Link>Shipping&Returns</Link>
          </p>

          <p>
            <Link>Shoe Care</Link>
          </p>

          <p>
            <Link>Size Chart</Link>
          </p>

          <p>
            {" "}
            <Link to={"Contact"}>Conatact Us</Link>
          </p>
        </div>
      </div>
      <div className="footer-bdr2">
        © 2024 Copyright: PLASHOE.COM
        <br />
        by shemil
      </div>
    </div>
  );
};

export default Footer;
