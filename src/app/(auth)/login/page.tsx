"use client";

import { useAuthStore } from "@/store/Auth";
import React from "react";

function LoginPage() {
  const { login } = useAuthStore();
  const [isLoading, setIsloading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //collect data
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    //validation
    if (!email || !password) {
      setError(() => "Please fill out all fields");
      return;
    }

    //handle loading and errors
    setIsloading(() => true);
    setError(() => "");

    //login=> store
    const loginResponse = await login(email.toString(), password.toString());
    if (loginResponse.error) {
      setError(() => loginResponse.error!.message);
    }
    setIsloading(() => false);
  };

  return (
    <div>
      <div></div>
    </div>
  );
}

export default LoginPage;
