import React from 'react';
import BsInput from "react-bootstrap/FormControl";

const Input = ({ value, onChange, id, type = "text", ...rest}) => {
    const handleChange = (event) => {
        const value = event.target.value;
        console.log(value);

        onChange(value, id);
    };
  
  
    return (
    <BsInput value={value} onChange={handleChange} type={type} {...rest} />
  );
};

export default Input;