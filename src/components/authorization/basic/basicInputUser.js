// import React from 'react';

import React, { useContext } from "react";
import { RestyContext } from "../../../context/restyContext";
// const state = useContext(RestyContext);

/**
 * Basic Input Username function component
 * @description input field for username with info being passed via props
 */

const BasicInputUser = () => {
  const state = useContext(RestyContext);
  return(
    <input
        onChange={state.onChange}
        name="username"
        placeholder="Username"
        value={state.value}
      />
  )
}

export default BasicInputUser;