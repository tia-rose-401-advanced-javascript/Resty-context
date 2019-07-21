import React, { useContext } from "react";
import ReactJson from "react-json-view";
import { RestyContext } from "../../context/restyContext";

/**
 * JsonResponse class/component
 * @description uses the react-json-view component to render JSON responses
 */

const JsonResponse = () => {
  const state = useContext(RestyContext);
  return (
    <ReactJson
      name="Response"
      enableClipboard={false}
      collapsed={false}
      src={state.body}
    />
  );
};

export default JsonResponse;
