import { getEventDetail } from "@/client/events";
import TicketsForm from "@/components/tickets/form";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const hardCoreEventId = "6745e04ad3c9341ada1b47de";
const getData = async () => {
  try {
    const { data: eventDetail } = await getEventDetail(hardCoreEventId);
    return { eventDetail };
  } catch (error) {
    throw error;
  }
};

export default async function Ticket() {
  const data = await getData();

  return (
    <Container sx={{ marginY: 8 }}>
      <Paper sx={{ padding: 4 }}>
        <Typography variant="h1" textAlign="center" sx={{ marginBottom: 4 }}>
          Checkout
        </Typography>
        <Stack direction="row" justifyContent="center">
          <Box sx={{ width: "100%", maxWidth: 500 }}>
            <TicketsForm eventData={data.eventDetail.targetEvent} />
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}
