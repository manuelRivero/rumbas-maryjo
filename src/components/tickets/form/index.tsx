"use client";
import { postTicket } from "@/client/tickets";
import QuantitySelector from "@/components/shared/quantitySelector";
import { Event } from "@/interfaces/events";
import { Wallet } from "@mercadopago/sdk-react";
import {
  Box,
  Button,
  CircularProgress,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface Form {
  name: string;
  email: string;
  dni: string;
  quantity: string;
  price: string;
}
interface Props {
  eventData: Event;
}

export default function TicketsForm({ eventData }: Props) {
  const { control, handleSubmit, reset, watch } = useForm<Form>({
    defaultValues: {
      name: "",
      email: "",
      dni: "",
      quantity: "1",
      price: String(eventData.price),
    },
  });
  const watchQuantity = watch("quantity");
  const watchPrice = watch("price");
  const [loading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(Number(watchPrice));

  const submit = async (values: Form) => {
    try {
      setLoading(true);
      await postTicket({ ...values, id: eventData._id });
      reset({
        name: "",
        email: "",
        dni: "",
        quantity: "1",
        price: String(eventData.price),
      });
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  const initialization = {
    preferenceId: "<PREFERENCE_ID>",
  };

  const customization = {
    texts: {
      valueProp: "smart_option",
    },
  };

  const onSubmit = async (formData: any) => {
    // callback llamado al hacer clic en Wallet Brick
    // esto es posible porque Brick es un botón
  };

  const onError = async (error: any) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
  };

  const onReady = async () => {
    // Callback llamado cuando Brick esté listo.
    // Aquí puedes ocultar loadings en tu sitio, por ejemplo.
  };

  useEffect(() => {
    setTotal(Number(watchPrice) * Number(watchQuantity));
  }, [watchQuantity]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Box sx={{ marginBottom: 2 }}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              sx={{ width: "100%" }}
              id="name"
              label="Nombre completo *"
              variant="outlined"
              value={field.value}
              onChange={field.onChange}
              helperText={fieldState.error?.message ?? null}
              error={Boolean(fieldState.error)}
            />
          )}
          rules={{
            required: "Campo obligatorio *",
          }}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Controller
          name="dni"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              sx={{ width: "100%" }}
              id="dni"
              label="DNI *"
              variant="outlined"
              value={field.value}
              onChange={field.onChange}
              helperText={fieldState.error?.message ?? null}
              error={Boolean(fieldState.error)}
            />
          )}
          rules={{
            required: "Campo obligatorio *",
          }}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              sx={{ width: "100%" }}
              id="email"
              label="Correo electrónico *"
              variant="outlined"
              value={field.value}
              onChange={field.onChange}
              helperText={
                fieldState.error?.message ??
                "Te enviaremos tu entrada a este correo electrónico"
              }
              error={Boolean(fieldState.error)}
            />
          )}
          rules={{
            required: "Campo obligatorio *",
          }}
        />
      </Box>
      <Stack justifyContent="flex-end" direction="row" sx={{ marginBottom: 2 }}>
        <Box>
          <InputLabel sx={{ textAlign: "center" }}>
            Cantidad de entradas
          </InputLabel>
          <Controller
            name="quantity"
            control={control}
            render={({ field, fieldState }) => (
              <QuantitySelector value={field.value} setValue={field.onChange} />
            )}
            rules={{
              required: "Campo obligatorio *",
            }}
          />
        </Box>
      </Stack>
      <Box sx={{ marginBottom: 2, textAlign: "right" }}>
        <Typography>Total a pagar: {total}</Typography>
      </Box>
      <Stack direction="row" justifyContent="center">
        <Button variant="contained" type="submit">
          {loading ? <CircularProgress /> : "Comprar"}
        </Button>

        <Wallet
          initialization={{ preferenceId: "<PREFERENCE_ID>" }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      </Stack>
    </form>
  );
}
