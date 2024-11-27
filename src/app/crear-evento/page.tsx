"use client";
import CreateEventForm from "@/components/createEvent/form";
import { Container, Paper, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

export default function CreateEvent() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container sx={{marginY: 8}}>
        <Paper sx={{ padding: 4 }}>
          <Typography
            variant="h1"
            sx={{ marginBottom: 4, textAlign: "center" }}
          >
            Crear evento
          </Typography>
          <CreateEventForm />
        </Paper>
      </Container>
    </LocalizationProvider>
  );
}
