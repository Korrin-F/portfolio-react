import { NavLink } from "react-router-dom";
import ContactMeCard from "../Contact/ContactMeCard";
import './Footer.css'
import sitepages from '../../data/sitepages.json'
import ListLink from "./ListLink";

function Footer() {
    return (
        <footer id="footer">
        <div className="container py-4">
          <div className="row justify-content-evenly">
            

            {/* <!-- Contact --> */}
            <div className="col-sm-4 text-center">
                <ContactMeCard 
                backgroundColor='var(--dark)'
                borderTextColor='var(--rose)'
                />
                <p className="my-auto">Korrin Franklin © 2023</p>
            </div>

            {/* <!-- Links --> */}
            <div className="d-flex flex-column justify-content-evenly col-sm-2">
              <ul className="list-unstyled m-auto footer-link-cont my-5 pb-2 ps-2">
                <li><a className="nav-link" href="#top">Top</a></li>
                {sitepages.map( (page, index) => {
                    const [pageName, pagePath] = Object.entries(page)[0]; // Extract the key-value pair
                     return (
                        <ListLink 
                        filePath={pagePath}
                        text={pageName}
                        key={index}
                        />
                      )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;