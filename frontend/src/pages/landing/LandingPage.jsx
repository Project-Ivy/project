import "../../assets/css/LandingPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
const LandingPage = () => {
  return (
    <div className="background-page">
      <div className="welcome-card">
        <div class="row">
          <div>
            <h1>Welcome to UniPath!</h1>
            <span>
              a gamified app to connect high school students achievements,
              activities and academics directly to school counsellors where we
              will provide a weekly plan target to get to a desired uni +
              community and other features. is this true?
            </span>
            <div className="btn-group">
              <button className="btn-reg">REGISTER</button>
              <button className="btn-log">LOGIN</button>
            </div>
            <div className="contact-info">
              <p>Contact Us!</p>
              <div className="icon-group" >
              <FontAwesomeIcon icon={ faInstagram } className="icon-info" />
              <FontAwesomeIcon icon={ faTiktok } className="icon-info" />
              <FontAwesomeIcon icon={ faYoutube } className="icon-info" />
              <FontAwesomeIcon icon={ faTwitter } className="icon-info" />
              </div>
            </div>
          </div>
        </div>
        <div class="row1"></div>
      </div>
    </div>
  );
};

export default LandingPage;
