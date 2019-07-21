// import React from 'react';

import React, { useContext } from "react";
import { RestyContext } from "../../context/restyContext";


const Url = () => {
  const state = useContext(RestyContext);
  return(
    <input
      type="text"
      className="wide"
      name="url"
      placeholder="URL"
      value={state.url}
      onChange={state.handleChange}
    />
  )
}

export default Url;

