"use client"

import React, { useEffect, useState } from "react";
type User = {
  user_id: number;
  user_name: string;
};

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/express/all-users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch users, status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(`Error: ${err.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>{user.user_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
