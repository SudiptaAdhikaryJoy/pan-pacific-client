import React from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const GenericSpinner = () => {

  return (
    <Box sx={{ width: 300 }}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  );
};
