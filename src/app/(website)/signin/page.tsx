"use client";

import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie"; // Install this with `npm install js-cookie`

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        Cookies.set("token", token); // Save token in HTTP-only cookie

        // Redirect to admin panel
        window.location.href = "/admin";
      } else {
        const data = await response.json();
        setError(data.error || "Sign in failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <div>
      {/* Form structure stays the same */}
      <form onSubmit={handleSubmit}>
        {/* Email and Password Inputs */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
