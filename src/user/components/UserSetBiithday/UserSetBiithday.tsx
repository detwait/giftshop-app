import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import userProfileService from "../../services/user-profile.service";
import type {} from '@mui/x-date-pickers/themeAugmentation';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
});

export default function UserSetBirthday() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
  const navigate = useNavigate();
  
  async function setBirthday(value: Dayjs | null) {
    if (value) {
      await userProfileService.setBirthday(value.toDate());
      navigate('/list');
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Pick a birthdat"
        value={value}
        minDate={dayjs('2017-01-01')}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <ThemeProvider theme={theme}>
        <Button onClick={() => setBirthday(value)}>Save</Button>
      </ThemeProvider>
    </LocalizationProvider>
  );
}