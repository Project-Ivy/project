import "./../../assets/css/FormValid.css";
import Validation from "../../components/Form/Validation";

const FormValidation = () => {
  return (
    <>
      <div className="wrapper-form">
        <div className="header-form">
          <h2>Form</h2>
        </div>
        <div className="form">
          <Validation/>
        </div>
      </div>
    </>
  );
};

export default FormValidation;
