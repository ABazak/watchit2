import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://watchit-api.onrender.com/auth/login",
        formData
      );

      if (response.data.access_token) {
        localStorage.setItem("accessToken", response.data.access_token);
        navigate("/");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setError(
          "You are not registered. Please click on Registration to sign up."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          padding: 5,
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button variant="contained" color="error" type="submit">
            Login
          </Button>
        </form>
        {error && (
          <Typography color="error" textAlign="center">
            {error}
          </Typography>
        )}
        <Typography variant="body2" sx={{ marginTop: 2, textAlign: "center" }}>
          Not registered yet?{" "}
          <Link
            href="/auth/registration"
            sx={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Registration
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
