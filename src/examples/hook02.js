import React from "react";
import { Card, Input } from "../components";

export default function HookComponent() {
  return (
    <Card type="hook">
      <Input placeholder="username..." defaultValue="" />
      <h1>User not found</h1>
    </Card>
  );
}
