import React from "react";

export default function Card(props) {
  return <input style={style} {...props} />;
}

const style = {
  border: "none",
  padding: 5,
  borderRadius: 5
};
