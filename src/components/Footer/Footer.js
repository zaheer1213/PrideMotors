import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="section">
          <div className="container">
            <div className="content">
              <div className="logoAndSupportingText">
                <img
                  className="finalLogoPride01041"
                  loading="lazy"
                  alt=""
                  src="/images/final-logo-pride0104-1@2x.png"
                />
                <div className="supportingText">
                  Design amazing digital experiences that create more happy in
                  the world.
                </div>
              </div>
              <div className="links">
                <div className="footerLinksColumn">
                  <div className="heading">Product</div>
                  <div className="footerLinks">
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text">Overview</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text1">Our Inventory</div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="footerLink2">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text2">Our Inventory</div>
                        </div>
                      </div>
                      <div className="badge">
                        <div className="badgeBase">
                          <div className="text3">New</div>
                        </div>
                      </div>
                    </div> */}
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text1">Key Points</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text5">Why Us</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text6">Our Story</div>
                        </div>
                      </div>
                    </div>

                    <div className="footerLink6">
                      <div className="button6">
                        <div className="buttonBase6">
                          <div className="text7">Additional</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink6">
                      <div className="button6">
                        <div className="buttonBase6">
                          <div className="text7">Additional</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink6">
                      <div className="button6">
                        <div className="buttonBase6">
                          <div className="text7">Additional</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink6">
                      <div className="button6">
                        <div className="buttonBase6">
                          <div className="text7">Additional</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footerLinksColumn">
                  <div className="heading">Company</div>
                  <div className="footerLinks1">
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text6">About us</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text13">Sell Car</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text14">Buy Car</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text6">Testimonials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footerLinksColumn">
                  <div className="heading">Resources</div>
                  <div className="footerLinks2">
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text23">Blog</div>
                        </div>
                      </div>
                    </div>

                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text26">Help centre</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footerLinksColumn">
                  <div className="heading">Social</div>
                  <div className="footerLinks3">
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text35">LinkedIn</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text36">Facebook</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text37">Instagram</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text38">Youtube</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footerLinksColumn">
                  <div className="heading">Legal</div>
                  <div className="footerLinks4">
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text45">Terms</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text46">Privacy</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text28">Cookies</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text48">Licenses</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text49">Settings</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink">
                      <div className="button">
                        <div className="buttonBase">
                          <div className="text17">Contact</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink6">
                      <div className="button6">
                        <div className="buttonBase6">
                          <div className="text7">Additional</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink6">
                      <div className="button6">
                        <div className="buttonBase6">
                          <div className="text7">Additional</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink6">
                      <div className="button6">
                        <div className="buttonBase6">
                          <div className="text7">Additional</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink6">
                      <div className="button6">
                        <div className="buttonBase6">
                          <div className="text7">Additional</div>
                        </div>
                      </div>
                    </div>
                    <div className="footerLink6">
                      <div className="button6">
                        <div className="buttonBase6">
                          <div className="text7">Additional</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section1">
          <div className="container1">
            <div className="content1">
              <div className="footerText">
                © {new Date().getFullYear()} Connecting Dots. All rights
                reserved.
              </div>
              <div className="socialIcons">
                <a href="https://www.linkedin.com/company/pride-motors-pune/?viewAsMember=true">
                  <FontAwesomeIcon icon={faLinkedin} className="socil-icon" />
                </a>
                <a href="https://www.facebook.com/pridemotorspune/">
                  <FontAwesomeIcon icon={faFacebook} className="socil-icon" />
                </a>
                <a href="https://www.instagram.com/pridemotorspune/">
                  <FontAwesomeIcon icon={faInstagram} className="socil-icon" />
                </a>
                <a href="https://www.youtube.com/@pridemotors4842">
                  <FontAwesomeIcon icon={faYoutube} className="socil-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
