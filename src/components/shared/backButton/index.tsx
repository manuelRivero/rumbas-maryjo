"use client";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import React from "react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <IconButton onClick={() => router.back()} sx={{marginBottom: 2}}>
      <ArrowBackIcon />
    </IconButton>
  );
}
