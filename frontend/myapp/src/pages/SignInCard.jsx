import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";

const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
  color: "#fff",
  borderRadius: "12px",
  padding: "10px 0",
  fontWeight: "bold",
  textTransform: "none",
  boxShadow: "0 4px 10px rgba(37,117,252,0.4)",
  "&:hover": {
    background: "linear-gradient(135deg, #5b0eb7 0%, #1b63e0 100%)",
  },
}));

export default function SignInCard({ onToggle, onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      await onSubmit(username, password); // 🔗 Calls handleLogin from AuthContext
      alert("Login successful!");
    } catch (error) {
      alert("Login failed. Please check your credentials.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        width: { xs: "100%", sm: 380 },
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Stack spacing={3}>
        <Typography
          variant="h4"
          fontWeight="700"
          textAlign="center"
          sx={{
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome Back
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mb={2}
        >
          Sign in to continue your journey
        </Typography>

        {/* Username Input */}
        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "white",
            },
          }}
        />

        {/* Password Input */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "white",
            },
          }}
        />

        {/* Sign In Button */}
        <GradientButton fullWidth onClick={handleSignIn} disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </GradientButton>

        <Divider>or</Divider>

        {/* Google Sign In */}
        <Button
          startIcon={<GoogleIcon />}
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Continue with Google
        </Button>

        {/* Toggle to Sign Up */}
        <Typography variant="body2" textAlign="center">
          Don’t have an account?{" "}
          <Typography
            component="span"
            sx={{
              color: "#2575fc",
              fontWeight: "600",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={onToggle}
          >
            Sign Up
          </Typography>
        </Typography>
      </Stack>
    </Paper>
  );
}
