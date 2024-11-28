import React from "react";
import { Container, Paper, Typography } from "@mui/material";

export default function Success() {
  return (
    <Container sx={{ marginY: 8 }}>
      <Paper sx={{ padding: 4 }}>
        <Typography variant="h1" sx={{ marginBottom: 4, textAlign: "center" }}>
          ¡Compra exitosa!
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          ¡Gracias por adquirir tu entrada! 🎉 Tu acceso al evento ha sido
          confirmado. Aquí tienes los detalles:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">Evento: [Nombre del evento]</Typography>
          </li>
          <li>
            <Typography variant="body1">Fecha: [Día, mes, año]</Typography>
          </li>
          <li>
            <Typography variant="body1">Hora: [Hora de inicio]</Typography>
          </li>
          <li>
            <Typography variant="body1">Lugar: [Ubicación].</Typography>
          </li>
        </ul>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Si tienes alguna pregunta, no dudes en contactarnos. ¡Te esperamos
          para disfrutar de una experiencia inolvidable!
        </Typography>
      </Paper>
    </Container>
  );
}
