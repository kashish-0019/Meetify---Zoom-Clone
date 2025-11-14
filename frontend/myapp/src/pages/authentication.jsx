import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";
import image from "../assets/image.png";
import { AuthContext } from "../contexts/AuthContext";

export default function Authentication({ isSignIn: initialSignIn }) {
  const { handleLogin, handleRegister } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [isSignIn, setIsSignIn] = useState(initialSignIn);

  // Update when route changes
  useEffect(() => {
    if (location.pathname === "/auth/login") setIsSignIn(true);
    else if (location.pathname === "/auth/register") setIsSignIn(false);
  }, [location.pathname]);

  const handleToggle = () => {
    if (isSignIn) navigate("/auth/register");
    else navigate("/auth/login");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(135deg, #0b1220, #081b3c)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 8 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", maxWidth: "1200px" }}
      >
        {/* LEFT SECTION */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h3"
            fontWeight="700"
            sx={{ color: "#1E90FF", mb: 2 }}
          >
            Connect. Collaborate. Communicate.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.8)",
              mb: 4,
              maxWidth: "420px",
              mx: { xs: "auto", md: "0" },
            }}
          >
            Welcome to <b>Meetify</b> — your all-in-one platform for seamless,
            real-time communication and collaboration.
          </Typography>

          <Box
            component="img"
            src={image}
            alt="Video Call Illustration"
            sx={{
              width: { xs: "80%", md: "70%" },
              borderRadius: "12px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
            }}
          />
        </Box>

        {/* RIGHT SECTION */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            transition: "all 0.4s ease",
          }}
        >
          {isSignIn ? (
            <SignInCard onToggle={handleToggle} onSubmit={handleLogin} />
          ) : (
            <SignUpCard onToggle={handleToggle} onSubmit={handleRegister} />
          )}
        </Box>
      </Stack>
    </Box>
  );
}
