import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React, { useState } from "react";
import { updateTickets } from "@/client/tickets";
import { TicketItem } from "@/interfaces/tickets";
import { useRouter } from "next/navigation";

interface Props {
  index: number;
  item: TicketItem;
  eventId: string;
}
export default function GuestRow({ item, index, eventId }: Props) {
  const router= useRouter()
  const [loading, setLoading] = useState<boolean>(false);
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const response = await updateTickets(eventId, item._id);
      router.refresh()
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
      {item.status === "active" ? (
        <Button variant="contained" onClick={handleUpdate}>
          {loading ? <CircularProgress size={12} color="inherit" /> : "Confirmar asistencia"}
        </Button>
      ) : (
        <Stack direction="row" gap={2}>
        <Typography>Asistencia confirmada</Typography>
        <CheckCircleOutlineIcon />
        </Stack>
      )}
    </Stack>
  );
}
