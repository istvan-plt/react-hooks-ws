import React from "react";

export default function Button(props) {
  return <button style={style} {...props} />;
}

const style = {
  padding: 8,
  border: "1px solid black",
  borderRadius: 5
};
