"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { updateTickets } from "@/client/tickets";
import GuestRow from "../row";

const columns = [
  {
    field: "name",
    headerName: "Nombre",
    editable: true,
    width: 500,
  },
  {
    field: "phone",
    headerName: "Teléfono",
    type: "number",
  },
];

interface Props {
  list: Ticket[];
}
interface Ticket {
  eventId: string;
  id: string;
  name: string;
  age: string;
  email: string;
  tickets: TicketItem[] | undefined;
}
export interface TicketItem {
  status: "active" | "inactive";
  _id: string;
}

export default function GuestTable({ list }: Props) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const handleUpdate = (ticketId: string, itemId: string) => {
    updateTickets
    // setList((prevList) =>
    //   prevList.map((ticket) =>
    //     ticket.id === ticketId
    //       ? {
    //           ...ticket,
    //           tickets: ticket.tickets?.map((item) =>
    //             item._id === itemId
    //               ? {
    //                   ...item,
    //                   status: item.status === "active" ? "inactive" : "active",
    //                 }
    //               : item
    //           ),
    //         }
    //       : ticket
    //   )
    // );
  };
  return (
    <TableContainer component={Paper} sx={{ overflow: "auto" }}>
      <Table aria-label="collapsible table">
        {/* Encabezado de la tabla */}
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.headerName}</TableCell>
            ))}
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>

        {/* Cuerpo de la tabla */}
        <TableBody>
          {list.map((row) => (
            <React.Fragment key={row.id}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.field} sx={{ whiteSpace: "nowrap" }}>
                    {row[column.field as keyof typeof row] || "-"}
                  </TableCell>
                ))}
                <TableCell>
                  <Button
                    sx={{ whiteSpace: "nowrap" }}
                    variant="contained"
                    onClick={() =>
                      setExpandedRow(expandedRow === row.id ? null : row.id)
                    }
                  >
                    {expandedRow === row.id ? "Ocultar" : "Ver detalle"}
                  </Button>
                </TableCell>
              </TableRow>
              {/* Fila expandida */}
              {expandedRow === row.id && (
                <TableRow>
                  <TableCell colSpan={columns.length + 1}>
                    <Box sx={{ padding: 2, backgroundColor: "#f9f9f9" }}>
                      <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1">
                          Cantidad de entradas{" "}
                          <strong>{row.tickets?.length}</strong>
                        </Typography>
                        <Typography variant="body1">
                          Cantidad de entradas confirmadas{" "}
                          <strong>
                            {
                              row.tickets?.filter(
                                (t: typeof ticket) => t.status === "inactive"
                              ).length
                            }
                          </strong>
                        </Typography>
                        <Typography variant="body1">
                          Cantidad en espera{" "}
                          <strong>
                            {
                              row.tickets?.filter(
                                (t: typeof ticket) => t.status === "active"
                              ).length
                            }
                          </strong>
                        </Typography>
                      </Box>
                      {row.tickets?.map((ticket: TicketItem, index: number) => (
                        <GuestRow eventId={row.eventId} item={ticket} index={index} key={ticket._id} />
                      ))}
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
