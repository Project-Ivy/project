import "../../assets/css/LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as BubbleOne } from "../../assets/vector/bubbleOne.svg";
import { ReactComponent as BubbleTwo } from "../../assets/vector/bubbleTwo.svg";
import { ReactComponent as BubbleThree } from "../../assets/vector/bubbleThree.svg";
import { ReactComponent as Logo } from "../../assets/vector/logo.svg";
import { ReactComponent as FootPrint } from "../../assets/vector/footPrint.svg";

const LandingPage = () => {
  return (
    <div className="background-page">
      <div className="bubble1">
        <BubbleOne className="bubbleOne" />
      </div>
      <div className="bubble2">
        <BubbleTwo className="bubbleTwo" />
      </div>
      <div className="bubble3">
        <BubbleThree className="bubbleThree" />
      </div>
      <div className="footPrint-group">
        <FootPrint className="footPrint" />
      </div>
      <div className="welcome-card">
        <div className="row">
          <div className="content-group">
            <h1>Welcome to UniPath!</h1>
            <span>
              a gamified app to connect high school students achievements,
              activities and academics directly to school counsellors where we
              will provide a weekly plan target to get to a desired uni +
              community and other features. is this true?
            </span>
            <div className="grouping">
              <div className="btn-group">
                <button className="btn-reg">REGISTER</button>
                <button className="btn-log">LOGIN</button>
              </div>
              <div className="contact-info">
                <p>Contact Us!</p>
                <div className="icon-group">
                  <FontAwesomeIcon icon={faInstagram} className="icon-info" />
                  <FontAwesomeIcon icon={faTiktok} className="icon-info" />
                  <FontAwesomeIcon icon={faYoutube} className="icon-info" />
                  <FontAwesomeIcon icon={faTwitter} className="icon-info" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row1">
          <Logo className="logo-landing" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
