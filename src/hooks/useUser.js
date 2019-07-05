import { useState, useEffect } from "react";

export default function useUser() {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      );

      const resJson = await response.json();
      const user = resJson[0];
      setUser(user);
    };

    fetchFn();
  }, [searchQuery]);

  return [user, setSearchQuery];
}
