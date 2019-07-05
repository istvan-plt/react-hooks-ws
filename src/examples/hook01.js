import React, { useState } from "react";
import { Card, Button } from "../components";

export default function HookComponent() {
  const [count, setCount] = useState(1);
  const [address, setAddress] = useState("Manchester");

  return (
    <Card type="hook">
      <h1>Count: {count}</h1>
      <h1>Address: {address}</h1>
      <Button onClick={() => setCount(2)}>Set count to 2</Button>
      <Button onClick={() => setAddress("Bolton")}>
        Set address to bolton
      </Button>
    </Card>
  );
}
