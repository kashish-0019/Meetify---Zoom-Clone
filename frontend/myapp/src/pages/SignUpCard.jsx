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

export default function SignUpCard({ onToggle, onSubmit }) {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!fullname || !username || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      await onSubmit(fullname, username, password); // 🔗 Calls handleRegister from AuthContext
      alert("Registration successful! You can now sign in.");
      onToggle(); // 👈 Switch back to Sign In
    } catch (error) {
      alert("Sign up failed. Please try again.");
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
          Create Account
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mb={2}
        >
          Join Meetify and start connecting today!
        </Typography>

        {/* Full Name */}
        <TextField
          label="Full Name"
          fullWidth
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "white",
            },
          }}
        />

        {/* Username */}
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

        {/* Password */}
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

        {/* Sign Up Button */}
        <GradientButton fullWidth onClick={handleSignUp} disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </GradientButton>

        <Divider>or</Divider>

        {/* Google Sign Up */}
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

        {/* Link to Sign In */}
        <Typography variant="body2" textAlign="center">
          Already have an account?{" "}
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
            Sign In
          </Typography>
        </Typography>
      </Stack>
    </Paper>
  );
}
