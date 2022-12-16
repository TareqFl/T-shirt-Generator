import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export default function ButtonAppBar() {
  return (

      <AppBar position="fixed" sx={{flexGrow:1}}>
        <Toolbar>
          <Typography variant="h6" component="div" textAlign="center" flexGrow={1}>
           Custom T-shirt Generator
          </Typography>
        </Toolbar>
      </AppBar>

  );
}
