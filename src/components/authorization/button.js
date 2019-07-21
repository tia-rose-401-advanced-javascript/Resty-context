// import React from 'react';

import React, { useContext } from "react";
import { RestyContext } from "../../context/restyContext";


/**
 * Button function component
 * @description renders a button with info being passed via props
 */

const Button = () => {
  const state = useContext(RestyContext);
  return(
    <button onClick={state.onClick}>
        Headers
      </button>
  )
}

export default Button;