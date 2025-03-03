'use client'

import {
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { z } from "zod";
import { useEffect, useState } from "react";
import { schema } from "./schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues } from "react-hook-form";
import { DatePicker, TimePicker } from '@mui/x-date-pickers-pro';
import dayjs from "dayjs"
import FileExplorer from "./components/RichTreeView";
import ColorModeSelect from "./components/ColorModeSelect";

export default function Home() {
  type formData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const password = watch("password")
  
  const defaultValues:DefaultValues<formData>={
    email: "alpeshbaria@gmail.com",
    password: "",
    phoneNumber: "",
    country: "",
    gender:null
      }

  // useEffect(()=>{
  //   console.log(password);
  //   if (password.length < 8 ) {
  //     console.log("Password is too short")
  //   } else {
  //     console.log("password is 8 letters long")
      
  //   } 
  // },[password])
  const onSubmit = (data: formData) => {
    // console.log("in submit function")
    console.log(data);
  };

  return (
    <Container>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        align="left"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" gutterBottom>
          Signup
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          defaultValue={defaultValues.email}
          error={!!errors.email && touchedFields.email}
          {...register("email")}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          defaultValue={defaultValues.password}
          {...register("password")}
          error={!!errors.password && touchedFields.password}
          helperText={errors.password?.message}
        />
        <TextField
          label="Phone Number"
          fullWidth
          margin="normal"
          {...register("phoneNumber")}
          error={!!errors.phoneNumber && touchedFields.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />

        <FormControl fullWidth margin="normal" error={!!errors.country && touchedFields.country}>
          <InputLabel>Country</InputLabel>
          <Select
            label="Country"
            {...register("country")}
            defaultValue={defaultValues.country}
            sx={{ my: 1 }}
          >
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            {/* Add other countries as needed */}
          </Select>
          <FormHelperText>{errors.country?.message}</FormHelperText>
        </FormControl>


        <section>
            <label>Radio Group</label>
            <Controller
              defaultValue={defaultValues.gender}
              render={({ field }) => (
                <RadioGroup aria-label="gender" {...field}>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              )}
              name="gender"
              control={control}
            />
          </section>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      <DatePicker defaultValue={dayjs('2022-04-17')} />
      <TimePicker sx={{
          marginBottom:6
        }}
        label="Basic time picker" />
      <FileExplorer/>
    </Container>
  );
}
