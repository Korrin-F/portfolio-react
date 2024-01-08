import { NavLink } from "react-router-dom";
import ContactMeCard from "../Contact/ContactMeCard";
import './Footer.css'

function Footer() {
    return (
        <footer id="footer">
        <div className="container py-4">
          <div className="row justify-content-center">
            

            {/* <!-- Contact --> */}
            <div className="col-sm-4 text-center">
                <ContactMeCard />
                <p className="my-auto">Korrin Franklin © 2023</p>
            </div>

            {/* <div class="col-auto">
              <p class="my-auto">Korrin Franklin © 2023</p>
            </div> */}

            {/* <!-- Links --> */}
            <div className="col-sm-2">
              <ul className="list-unstyled flex-column justify-content-evenly footer-link-cont my-5 pb-2 ps-2">
                <li><a className="nav-link" href="#top">Top</a></li>
                <li>
                    <NavLink
                        to="/"
                        end
                        className="nav-link"
                    >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="about"
                        end
                        className="nav-link"
                    >
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="projects"
                        end
                        className="nav-link"
                    >
                    Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="contact"
                        end
                        className="nav-link"
                    >
                    Contact
                    </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;