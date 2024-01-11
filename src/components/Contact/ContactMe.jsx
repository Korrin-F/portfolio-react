import avatar from '../../assets/images/woman&deer@33-redu.png';
import babydeer from '../../assets/images/baby-deer-d.25-redu.png'
import '../About/AboutMe.css';
import PageHeader from '../SectionHeader/PageHeader';
import ContactMeCard from '../Contact/ContactMeCard';
import contactme from '../../data/contactme.json'

const styles = {
    page: {
        backgroundColor: "var(--rose)"
    },
    text: {
        fontFamily: "var(--font-family-secondary)",
        color: "var(--dark)"
    }

}

function ContactMe() {
  return (
    <section id="contact-me" className="w-100 pb-4 pt-5" style={styles.page}>
      <section className="container" id="contact">
        <PageHeader name='Contact Me' backgroundColor={styles.page}/>

        <div className="row justify-content-center mt-lg-3">
          {/* <!-- image --> */}
          <div className="col-12 col-sm-9 col-md-7 col-lg-5 justify-content-center my-3 my-sm-4 my-md-5">
            <img
              className="img-fluid px-1 py-0 "
              src={babydeer}
              alt="Korrin's Avatar"
            />
          </div>

          {/* <!-- content column --> */}
          <div className="col-12 col-lg-7 col-xxl-6 px-3 px-md-5 mt-lg-5">
            <div className="flex-column d-flex h-100 justify-content-center text-center">
              {/* <!-- About me text --> */}
              <div className="my-2">
                <p className="mb-0"
                    style={styles.text}
                >
                  {contactme.description}
                </p>
              </div>
              <ContactMeCard 
              backgroundColor='var(--rose)'
              borderTextColor='var(--dark)'/>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ContactMe;