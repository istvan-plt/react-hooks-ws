import React from "react";
import { Card, Button } from "../components";

export default class ClassComponent extends React.Component {
  state = { count: 1, address: "Manchester" };
  setCountTo2() {
    this.setState({ count: 2 });
  }

  setAddressToBolton() {
    this.setState({ address: "Bolton" });
  }

  render() {
    const { count, address } = this.state;
    return (
      <Card>
        <h1>Count: {count}</h1>
        <h1>Address: {address}</h1>
        <Button onClick={this.setCountTo2.bind(this)}>Set count to 2</Button>
        <Button onClick={this.setAddressToBolton.bind(this)}>
          Set address to Bolton
        </Button>
      </Card>
    );
  }
}
