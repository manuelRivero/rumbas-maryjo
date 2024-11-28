import React from 'react'
import { Container, Paper, Typography } from '@mui/material'
import { getTickets } from '@/client/tickets';
import GuestTable from '@/components/guestList/table';

export const dynamic = 'force-dynamic'

const getData = async ()=> {
    try {
        const {data} = await getTickets();
        console.log("data", data)
        return ({list: data.targetsTickets})
    } catch (error) {
        throw error
    }
}

export default async function GuestList() {
    const {list} = await getData()
  return (
    <Container sx={{marginY: 8}}>
    <Paper sx={{ padding: 4 }}>
      <Typography
        variant="h1"
        sx={{ marginBottom: 4, textAlign: "center" }}
      >
        Lista de invitados
      </Typography>
      <GuestTable list={list} />
    </Paper>
  </Container>
  )
}
