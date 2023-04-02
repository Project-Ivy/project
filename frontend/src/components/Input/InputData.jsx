import "../../assets/css/Input.css"

const InputData = ({ value, name, placeholder, type, onChange, error }) => {
  return (
    <div className="input-comp">
    <input
      type={type}
      value={value}
      name={name}
      className="input-data"
      placeholder={placeholder}
      onChange={onChange}
    />
    {error && <p className="input-error">{error}</p>}
  </div>
  )
}

export default InputData;