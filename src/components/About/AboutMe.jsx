import avatar from '../../assets/images/woman&deer@33-redu.png';
import './AboutMe.css';
import PageHeader from '../SectionHeader/PageHeader';
import ContactMeCard from '../Contact/ContactMeCard';
import aboutme from '../../data/aboutme.json'

function AboutMe() {
  return (
    <section id="about-me" className="w-100 pb-4 pt-5">
      <section className="container" id="about">
        <PageHeader name='About Me' />

        <div className="row justify-content-center mt-lg-3">
          {/* <!-- image --> */}
          <div className="col-12 col-sm-9 col-md-7 col-lg-5 justify-content-center my-3 my-sm-4 my-md-5">
            <img
              className="img-fluid px-1 py-0 "
              src={avatar}
              alt="Korrin's Avatar"
            />
          </div>

          {/* <!-- content column --> */}
          <div className="col-12 col-lg-7 col-xxl-6 px-3 px-md-5 mt-lg-5">
            <div className="flex-column d-flex h-100 justify-content-center text-center">
              {/* <!-- About me text --> */}
              <div className="my-2">
                <p className="mb-0">
                  {aboutme.partOne}
                  <br />
                  <br />
                  {aboutme.partTwo}
                </p>
              </div>
              <ContactMeCard />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutMe;
