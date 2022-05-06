import React from "react";
import { Link2, Link3 } from "../design/Link/Link";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto mb-20 min-h-[160px] border-t border-solid border-gray">
        <div className="min-h-[80px] flex justify-between items-end">
          <div className="footer-links">
            <Link2 className="mr-10" to="/blog" text="Contact" />
            <Link2 className="mr-10" to="/terms" text="Terms of services" />
            <Link2
              className="mr-10"
              to="/shipping"
              text="Shipping and returns"
            />
          </div>
          <div className="news-later">
            <input
              type="text"
              name="newsletter-email"
              id="newsletter-email"
              placeholder="Give an email, get the newsletter"
            />
          </div>
        </div>
        <div className="min-h-[80px] flex justify-between items-end">
          <p>
            &copy; {"2022"} Inventoryis.{" "}
            <Link3 to="/privacy" text="Terms of use and privacy policy." />
          </p>
          <div className="social-icons justify-between">fb</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
