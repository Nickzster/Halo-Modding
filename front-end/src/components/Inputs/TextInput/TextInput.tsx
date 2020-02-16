import React from "react";

interface Props {
  type: string;
  placeholder: string;
  name: string;
  value: any;
  onChange: Function;
  required?: boolean;
}

const TextInput: React.FC<Props> = props => {
  const { type, placeholder, name, value, onChange, required } = props;
  return (
    <React.Fragment>
      {type === "textarea" ? (
        <textarea
          style={{ color: "black", padding: "0.5em" }}
          required={!!required ? required : false}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={e => onChange(e)}
        ></textarea>
      ) : (
        <input
          required={!!required ? required : false}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={e => onChange(e)}
          type={type}
        ></input>
      )}
    </React.Fragment>
  );
};

export default TextInput;
