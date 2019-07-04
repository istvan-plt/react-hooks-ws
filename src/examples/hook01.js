import React from "react";
import { Card, Button } from "../components";

export default function HookComponent() {
  return (
    <Card type="hook">
      <h1>Count: 1</h1>
      <Button>Set count to 2</Button>
    </Card>
  );
}
