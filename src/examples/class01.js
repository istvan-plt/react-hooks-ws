import React from "react";
import { Card, Button } from "../components";

export default class ClassComponent extends React.Component {
  state = { count: 1 };
  setCountTo2() {
    this.setState({ count: 2 });
  }

  render() {
    const { count } = this.state;
    return (
      <Card>
        <h1>Count: {count}</h1>
        <Button onClick={this.setCountTo2.bind(this)}>Set count to 2</Button>
      </Card>
    );
  }
}
