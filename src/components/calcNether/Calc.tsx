import React, { useState } from 'react'

import {
    Box,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
  } from '@mui/material';

  



export const Calc: React.FC= () => {

    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const [z,setZ] = useState(0);

    const [rx,setRX] = useState(0);
    const [ry,setRY] = useState(0);
    const [rz,setRZ] = useState(0);

    const hadleXChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = parseFloat(e.target.value) || 0;
        setX(value)
        setRX(Math.round(value / 8))
    }

    const hadleZChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = parseFloat(e.target.value) || 0;
        setZ(value)
        setRZ(Math.round(value / 8))
    }
    const hadleYChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = parseFloat(e.target.value) || 0;
        setY(value)
        setRY(value)
    }

  return (
    <Container maxWidth="sm" 
   >
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
          <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
            Calculadora Nether
          </Typography>
          <Box component="form">
            <Grid>
            <TextField
              name="X"
              margin="normal"
              type="text"
              value={x}
              onChange={hadleXChange}
              label="X"
              sx={{ mt: 2, mb: 1.5,mr:1.5,  width:"150px"}}
              
                
              
             
            />
            <TextField
              name="Y"
              margin="normal"
              type="text"
              value={y}
              onChange={hadleYChange}
              label="Y"
              sx={{ mt: 2, mb: 1.5,mr:1.5,  width:"150px"}}
              
            
            />
            <TextField
              name="Z"
              margin="normal"
              type="text"
              value={z}
              onChange={hadleZChange}
              label="Z"
              sx={{ mt: 2, mb: 1.5,mr:1.5,  width:"150px"}}
              
            
            />
            </Grid>
            <Typography variant="h5"  sx={{my:1.5}}> Coordenadas Nether</Typography>
            <Grid>
            <TextField
              name="RX"
              margin="normal"
              type="text"
              value={rx}
              disabled
              sx={{ mt: 2, mb: 1.5,mr:1.5,  width:"150px"}}
              
                
              
             
            />
            <TextField
              name="RY"
              margin="normal"
              type="text"
              value={ry}
              disabled
              sx={{ mt: 2, mb: 1.5,mr:1.5,  width:"150px"}}
              
            
            />
            
            <TextField
              name="RZ"
              margin="normal"
              type="text"
              value={rz}
              sx={{ mt: 2, mb: 1.5,mr:1.5,  width:"150px"}}
              disabled
            
            />
            </Grid>
            
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  )
}
