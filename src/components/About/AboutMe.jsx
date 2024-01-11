import avatar from '../../assets/images/woman&deer@33-redu.png';
import './AboutMe.css';
import PageHeader from '../SectionHeader/PageHeader';
import aboutme from '../../data/aboutme.json'

const styles = {
  page: {
      backgroundColor: "var(--rose)"
  },
  text: {
      fontFamily: "var(--font-family-secondary)",
      color: "var(--dark)"
  },
  shape: {
      position: 'relative',
      top: '-3rem',
      borderBottom: '5rem solid rgba(var(--rgb-yellow), 0)',
      borderBottomLeftRadius: '100%',
      borderBottomRightRadius: '100%',
      borderTopLeftRadius: '100%',
      borderTopRightRadius: '100%',
      boxShadow: 'var(--box-shadow)'
  },
  img: {
      position: 'relative',
      zIndex: '1',
      bottom: '-0.25rem'
  }

}

function AboutMe() {
  return (
    <section 
    className="w-100 pb-4 pt-5"
    style={styles.page}
    >
      <section 
      className="container mt-4" 
      id="about"
      >
        <PageHeader 
        name='About Me' 
        backgroundColor={styles.page}
        />

        <div className="row justify-content-center mt-lg-3">
          {/* <!-- image --> */}
          <div className="col-12 col-sm-9 col-md-7 col-lg-5 justify-content-center my-3 my-sm-4 my-md-5">
            <img
              className="img-fluid px-1 py-0 "
              src={avatar}
              alt="Korrin's Avatar"
              style={styles.img}
            />
            <div
            style={styles.shape}
            >
            </div>
          </div>

          {/* <!-- content column --> */}
          <div className="col-12 col-lg-7 col-xxl-6 px-3 px-md-5 mt-lg-0">
            <div className="flex-column d-flex h-100 justify-content-center text-center">
              {/* <!-- About me text --> */}
              <div className="my-2 my-lg-0">
                <p 
                className="mb-0"
                style={styles.text}>
                  {aboutme.partOne}
                  <br />
                  <br />
                  {aboutme.partTwo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutMe;
