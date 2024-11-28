import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { TicketItem } from "../table";
import { updateTickets } from "@/client/tickets";

interface Props {
  index: number;
  item: TicketItem;
  eventId: string;
}
export default function GuestRow({ item, index, eventId }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(item.status);
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const response = await updateTickets(eventId, item._id);
      setStatus("inactive");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <Stack
      direction="column"
      sx={{ marginBottom: 2 }}
      gap={2}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Typography variant="body2">Entrada #{index + 1}</Typography>
      {status === "active" ? (
        <Button variant="contained" onClick={handleUpdate}>
          {loading ? <CircularProgress size={12} color="inherit" /> : "Confirmar asistencia"}
        </Button>
      ) : (
        <Typography>Asistencia confirmada</Typography>
      )}
    </Stack>
  );
}
