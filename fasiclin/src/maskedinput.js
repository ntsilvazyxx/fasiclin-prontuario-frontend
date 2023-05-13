import React from 'react';
import InputMask from 'react-input-mask';


const maskedInput = ({ value, onChange }) => {
    return <InputMask mask="999.999.999-99" value={value} onChange={onChange} />;
};

export default maskedInput;