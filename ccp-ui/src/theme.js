import { createTheme } from '@mui/material/styles';

export const getTheme = () => {
  const primaryMain = localStorage.getItem('primaryColor') || '#1976d2';
  return createTheme({
    palette: {
      primary: { main: primaryMain },
    },
  });
};
