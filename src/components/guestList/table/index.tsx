"use client";

import React, { useState } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

import { updateTickets } from "@/client/tickets";
import GuestRow from "../row";
import { Ticket, TicketItem } from "@/interfaces/tickets";

const columns = [
  {
    field: "name",
    headerName: "Nombre",
    editable: true,
    width: 500,
  },
  {
    field: "dni",
    headerName: "DNI",
    type: "number",
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

export default function GuestTable({ list }: Props) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const handleUpdate = (ticketId: string, itemId: string) => {
    updateTickets;
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
      <Table aria-label="collapsible table">
        {/* Encabezado de la tabla */}
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.field}>
                <Box sx={{ padding: 2 }}>{column.headerName}</Box>
              </Th>
            ))}
            <Th>
              <Box sx={{ padding: 2 }}>Acciones</Box>
            </Th>
          </Tr>
        </Thead>

        {/* Cuerpo de la tabla */}
        <Tbody>
          {list.map((row) => (
            <React.Fragment key={row._id}>
              <Tr>
                {columns.map((column) => (
                  <Td key={column.field} sx={{ whiteSpace: "nowrap" }}>
                    <Box sx={{ padding: 2 }}>
                      <Typography variant="body1" textAlign="center">
                        {row[column.field as keyof typeof row] || "-"}{" "}
                      </Typography>
                    </Box>
                  </Td>
                ))}
                <Td>
                  <Stack direction="row" justifyContent="center" sx={{padding:2}}>
                    <Button
                      sx={{ whiteSpace: "nowrap" }}
                      variant="contained"
                      onClick={() =>
                        setExpandedRow(expandedRow === row._id ? null : row._id)
                      }
                    >
                      {expandedRow === row._id ? "Ocultar" : "Ver detalle"}
                    </Button>
                  </Stack>
                </Td>
              </Tr>
              {/* Fila expandida */}
              {expandedRow === row._id && (
                <Tr>
                  <Td colSpan={columns.length + 1}>
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
                                (t: TicketItem) => t.status === "inactive"
                              ).length
                            }
                          </strong>
                        </Typography>
                        <Typography variant="body1">
                          Cantidad en espera{" "}
                          <strong>
                            {
                              row.tickets?.filter(
                                (t: typeof TicketItem) => t.status === "active"
                              ).length
                            }
                          </strong>
                        </Typography>
                      </Box>
                      {row.tickets?.map((ticket: TicketItem, index: number) => (
                        <GuestRow
                          eventId={row.eventId}
                          item={ticket}
                          index={index}
                          key={ticket._id}
                        />
                      ))}
                    </Box>
                  </Td>
                </Tr>
              )}
            </React.Fragment>
          ))}
        </Tbody>
      </Table>
  );
}
