import React from "react";
import { Card, Input } from "../components";

export default class ClassComponent extends React.Component {
  state = { searchQuery: "", user: null };

  render() {
    const { searchQuery, user } = this.state;
    return (
      <Card>
        <Input placeholder="username..." defaultValue={searchQuery} />
        <h1>User not found</h1>
      </Card>
    );
  }
}
