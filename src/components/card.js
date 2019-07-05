import React from "react";

export default function Card(props) {
  const { type, ...otherProps } = props;
  const style = createStyle(props);
  return <div style={style} {...otherProps} />;
}

const createStyle = props => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  width: 450,
  height: 300,
  background: props.type === "hook" ? "#d400004d" : "#00bcd44d",
  borderRadius: 20
});
