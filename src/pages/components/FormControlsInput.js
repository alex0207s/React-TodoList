import '../../App.css';

function FormControlsInput({
  category,
  label_content,
  input_type,
  input_placeholder,
  required,
}) {
  return (
    <>
      <label className="formControls_label" htmlFor={category}>
        {label_content}
      </label>
      <input
        className="formControls_input"
        type={input_type}
        id={category}
        name={category}
        placeholder={input_placeholder}
        required={required}
      />
    </>
  );
}

export default FormControlsInput;
