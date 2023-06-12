import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useTheme } from "@mui/material";

const PriceCalculator = () => {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid xs={12}>
        <Typography variant="h5" align="right">
          $20/sq ft
        </Typography>
      </Grid>
      <Grid xs={12} align="right" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
        <Typography variant="h5">
          X
        </Typography>
        <TextField
          id="outlined"
          // label="Number"
          type="number"
          defaultValue="Home sq ft"
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
      </Grid>
    </Grid>
  );
}

export default PriceCalculator;