import TicketsForm from "@/components/tickets/form";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import flayer from "@/assets/images/flayer.jpg";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getEventDetail } from "@/client/events";

const hardCoreEventId = "6745e04ad3c9341ada1b47de";
const getData = async () => {
  try {
    const { data: eventDetail } = await getEventDetail(hardCoreEventId);
    return { eventDetail };
  } catch (error) {
    throw error;
  }
};

export default async function EventDetail() {
  const data = await getData();
  console.log('data', data.eventDetail.targetEvent)
  return (
    <Container sx={{ marginY: 8 }}>
      <Paper sx={{ padding: 4 }}>
        <Stack direction="row" justifyContent="center" alignItems={"center"}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography
              variant="h1"
              textAlign="center"
              sx={{ marginBottom: 4 }}
            >
              {data.eventDetail.targetEvent.name}
            </Typography>
            <Typography
              variant="h3"
              textAlign="center"
              sx={{ marginBottom: 1 }}
            >
              Descripción del evento
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ marginBottom: 2 }}
            >
              {data.eventDetail.targetEvent.description}
            </Typography>
            <Typography
              variant="h3"
              textAlign="center"
              sx={{ marginBottom: 1 }}
            >
              Fecha y hora del evento
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ marginBottom: 2 }}
            >
              {`${data.eventDetail.targetEvent.dateStart} - ${data.eventDetail.targetEvent.timeStart}`}
            </Typography>
            <Typography
              variant="h3"
              textAlign="center"
              sx={{ marginBottom: 1 }}
            >
              Dirección
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ marginBottom: 2 }}
            >
              {data.eventDetail.targetEvent.address}
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Box sx={{ width: "100%", maxWidth: 500 }}>
            <Image
              alt="Imagen del evento"
              src={flayer.src}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="center" sx={{ marginTop: 2 }}>
          <Button
            LinkComponent={Link}
            href="/comprar-entrada/1"
            variant="contained"
          >
            Comprar entrada
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
