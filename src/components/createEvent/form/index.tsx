"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import dayjs, { Dayjs } from "dayjs";

import React from "react";
import { Controller, useForm } from "react-hook-form";

interface Form {
  name: string;
  description: string;
  timeStart: Dayjs;
  timeEnd: Dayjs;
  dateStart: Dayjs;
  dateEnd: Dayjs;
  price: string
}

export default function CreateEventForm() {
  const { control, handleSubmit } = useForm<Form>(
    {
      defaultValues:{
        dateStart: dayjs(),
        dateEnd: dayjs(),
        timeStart: dayjs(),
        timeEnd: dayjs()
      }
    }
  );
  const submit = (values: Form) => {
    console.log(values);
  }
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
                label="Nombre del evento *"
                variant="outlined"
                value={field.value}
                onChange={field.onChange}
                helperText={fieldState.error?.message ?? null}
                error={Boolean(fieldState.error)}
              />
            )}
            rules={{
              required: "campo requerido *",
            }}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Controller
            name="description"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                sx={{ width: "100%" }}
                id="description"
                label="Descripción del evento *"
                variant="outlined"
                multiline
                rows={8}
                value={field.value}
                onChange={field.onChange}
                helperText={fieldState.error?.message ?? null}
                error={Boolean(fieldState.error)}
              />
            )}
            rules={{
              required: "campo requerido *",
            }}
          />
        </Box>
        <Stack direction="row" gap={4}>
          <Box sx={{ marginBottom: 2, width: "100%" }}>
            <Controller
              name="timeStart"
              control={control}
              render={({ field, fieldState }) => (
                <MobileTimePicker
                  sx={{ width: "100%" }}
                  label="Hora de inicio"
                  value={field.value}
                  onChange={field.onChange}
                  slotProps={{
                    textField: {
                      helperText: fieldState.error?.message,
                    },
                  }}
                />
              )}
              rules={{
                required: "campo requerido *",
              }}
            />
          </Box>
          <Box sx={{ marginBottom: 2, width: "100%" }}>
            <Controller
              name="dateStart"
              control={control}
              render={({ field, fieldState }) => (
                <DatePicker
                  sx={{ width: "100%" }}
                  label="Fecha de inicio"
                  value={field.value}
                  onChange={field.onChange}
                  disablePast
                  slotProps={{
                    textField: {
                      helperText: fieldState.error?.message,
                    },
                  }}
                />
              )}
              rules={{
                required: "campo requerido *",
              }}
            />
          </Box>
        </Stack>
        <Stack direction="row" gap={4}>
          <Box sx={{ marginBottom: 2, width: "100%" }}>
            <Controller
              name="timeEnd"
              control={control}
              render={({ field, fieldState }) => (
                <MobileTimePicker
                  sx={{ width: "100%" }}
                  label="Hora de finalización"
                  value={field.value}
                  onChange={field.onChange}
                  slotProps={{
                    textField: {
                      helperText: fieldState.error?.message,
                    },
                  }}
                />
              )}
              rules={{
                required: "campo requerido *",
              }}
            />
          </Box>
          <Box sx={{ marginBottom: 2, width: "100%" }}>
            <Controller
              name="dateEnd"
              control={control}
              render={({ field, fieldState }) => (
                <DatePicker
                  sx={{ width: "100%" }}
                  label="Fecha de fín"
                  value={field.value}
                  onChange={field.onChange}
                  disablePast
                  slotProps={{
                    textField: {
                      helperText: fieldState.error?.message,
                    },
                  }}
                />
              )}
              rules={{
                required: "campo requerido *",
              }}
            />
          </Box>
        </Stack>

        <Box sx={{ marginBottom: 2 }}>
          <Controller
            name="price"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                sx={{
                  width: "100%",
                  "& input[type=number]::-webkit-outer-spin-button": {
                    "-webkitAppearance": "none",
                    margin: 0,
                  },
                  "& input[type=number]::-webkit-inner-spin-button": {
                    "-webkitAppearance": "none",
                    margin: 0,
                  },
                }}
                id="description"
                label="Precio de la entrada *"
                variant="outlined"
                value={field.value}
                onChange={field.onChange}
                helperText={fieldState.error?.message ?? null}
                error={Boolean(fieldState.error)}
                slotProps={{
                  htmlInput: { type: "number" },
                }}
              />
            )}
            rules={{
              required: "campo requerido *",
            }}
          />
        </Box>
        <Stack direction="row" justifyContent="center">
          <Button variant="contained" type="submit">Crear evento</Button>
        </Stack>
    </form>
  );
}
