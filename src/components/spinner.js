import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ size = 32 }) => {
  return (
    <div style={{ marginLeft: "40%" }}>
      <ClipLoader color={"#1070CA"} loading={true} size={size} />;
    </div>
  );
};

export default Spinner;
