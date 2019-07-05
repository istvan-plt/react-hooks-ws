import React, { useState, useEffect } from "react";
import { Card, Input } from "../components";
import useUser from "../hooks/useUser";

export default function HookComponent() {
  const [user, setSearchQuery] = useUser();

  return (
    <Card type="hook">
      <Input
        placeholder="username..."
        defaultValue=""
        onChange={e => setSearchQuery(e.target.value)}
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
