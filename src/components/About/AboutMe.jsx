import avatar from '../../assets/images/woman&deer@.5.png';
import './about.css';
import PageHeader from '../../components/PageHeader';

function AboutMe() {
  return (
    <section id="about-me" className="w-100 pb-4">
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
                  Hello there! I'm Korrin, and I'm on a journey to code the
                  canvas of imagination. Welcome to my colourful corner of the
                  web, where I combine my passion for programming with a keen
                  eye for design. As a budding programmer, I've embarked on a
                  quest to explore the vast realm of technology, with a focus on
                  front-end web development.
                  <br />
                  <br />I believe in the magic of blending technical
                  problem-solving with visual creativity, and I strive to In
                  every line of code and every pixel placed, you'll find my
                  enthusiasm for programming and my dedication to crafting
                  beautiful, user-f create digital experiences that are as
                  functional as they are aesthetically pleasing.riendly web
                  interfaces. If you're seeking a junior software developer with
                  a passion for both technology and design I'd love to connect
                  and explore opportunities together.
                </p>
              </div>

              {/* <!-- Contact Me --> */}
              <div
                className="d-flex mb-4 mt-1 mt-md-2 mt-lg-0 mt-xxl-4 justify-content-center"
                id="contact"
              >
                <div>
                  <h3 className="display-6 px-3 mb-0 mx-auto">Contact Me</h3>
                  <div className="row contact-content p-4 py-5 p-sm-5 ">
                    <div className="col-6 ">
                      <a className="btn button" href="" target="_blank">
                        LinkedIn
                      </a>
                    </div>
                    <div className="col-6 ">
                      <a className="btn button" href="" target="_blank">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutMe;
