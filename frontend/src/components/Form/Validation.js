import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Validation = () => {
  const [Validation, setValidation] = useState(true);
  return (
    <form method="post">
      <div className="name">
        <div className="form-grp">
          <label htmlFor="">Student's First Name</label>
          <div className="inp">
            <input type="text" name="" id="" placeholder="Enter First Name" />
          </div>
        </div>
        <div className="form-grp">
          <label htmlFor="">Student's Last Name</label>
          <div className="inp">
            <input type="text" name="" id="" placeholder="Enter Last Name" />
          </div>
        </div>
      </div>
      <div className="form-grp">
        <label htmlFor="">School</label>
        <div className="inp">
          <input
            className={Validation ? "error" : ""}
            type="text"
            name=""
            id=""
            placeholder="Enter School Name"
          />
          {Validation ? (
            <div className="icon-warn">
              <span>
                <FontAwesomeIcon icon={faCircleExclamation} />
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        {Validation ? (
          <>
            <div className="error-message">
              <span>Error message informing me of a problem</span>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="form-grp radio-grp">
        <div className="radio">
          <input type="radio" name="a" id="ap" />
          <label htmlFor="ap">
            <span className={Validation ? "error-radio" : ""}>
              <span></span>
            </span>
            Advanced Placement (AP)
          </label>
        </div>
        <div className="radio">
          <input type="radio" name="a" id="ihs" />
          <label htmlFor="ihs">
            <span>
              <span></span>
            </span>{" "}
            Indonesian High School
          </label>
        </div>
        <div className="radio">
          <input type="radio" name="a" id="diploma" />
          <label htmlFor="diploma">
            <span>
              <span></span>
            </span>
            Diploma
          </label>
        </div>
        <div className="radio">
          <input type="radio" name="a" id="ial" />
          <label htmlFor="ial">
            <span>
              <span></span>
            </span>
            International A-Levels
          </label>
        </div>
        <div className="radio">
          <input type="radio" name="a" id="ib" />
          <label htmlFor="ib">
            <span>
              <span></span>
            </span>
            International Baccalaureate
          </label>
        </div>
        <div className="radio">
          <input type="radio" name="a" id="igc" />
          <label htmlFor="igc">
            <span>
              <span></span>
            </span>
            International GCSEs
          </label>
        </div>
        <div className="radio">
          <input type="radio" name="a" id="inc" />
          <label htmlFor="inc">
            <span>
              <span></span>
            </span>
            Local national curriculum
          </label>
        </div>
        <div className="radio">
          <input type="radio" name="a" id="os" />
          <label htmlFor="os">
            <span>
              <span></span>
            </span>
            Other - specify
          </label>
        </div>
      </div>
      <div className="form-grp">
        <label htmlFor="">Current Year/Grade Level</label>
        <div className="inp">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Current Year/Grade Level"
          />
        </div>
      </div>
      <div className="form-grp">
        <label htmlFor="">Year of Graduation</label>
        <div className="inp">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Year of Graduation"
          />
        </div>
      </div>
    </form>
  );
};

export default Validation;
