import React from "react";
import { Card, Input } from "../components";

export default class ClassComponent extends React.Component {
  state = { searchQuery: "", user: null };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchUser();
    }
  }

  handleInput(event) {
    this.setState({ searchQuery: event.target.value });
  }

  async fetchUser() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?username=${
        this.state.searchQuery
      }`
    );

    const resJson = await response.json();
    const user = resJson[0];
    this.setState({ user: user });
  }

  render() {
    const { searchQuery, user } = this.state;
    return (
      <Card>
        <Input
          placeholder="username..."
          defaultValue={searchQuery}
          onChange={this.handleInput.bind(this)}
        />
        {user ? (
          <div>
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        ) : (
          <h1>User not found</h1>
        )}
      </Card>
    );
  }
}
