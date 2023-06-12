import { Button, Paper, Typography, Grid, TextField, Divider, List, ListItem } from "@mui/material";
import { useTheme } from "@mui/material";

const GetQuote = ({ address }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        right: '20px'
      }}
    >
      <Grid container sx={{
        'h5': {
          backgroundColor: '#062841',
          color: 'white',
          marginX: '-16px',
          paddingX: '16px'
        }
      }}>
        <Grid xs={12}>
          <Typography variant="h5">
            Your Address:
          </Typography>
          <Divider />
          <Typography variant="body1" paddingY={theme.spacing(2)}>
            {address}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h5">
            Your Roof:
          </Typography>
          <Divider />
          <Typography variant="body1" paddingY={theme.spacing(2)}>
            TruDefinition® Duration® <br />
            Chateau Green
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h5">Get a Price:</Typography>
          <Divider />
          <Typography variant="body2" color="grey">
            <List
              sx={{
                listStyleType: 'disc',
                pl: 2,
                '& .MuiListItem-root': {
                  display: 'list-item',
                  padding: 0,
                  fontSize: '12px'
                },
              }}>
              <ListItem>
                We get data on the dimensions of your roof.
              </ListItem>
              <ListItem>
                Respond in &lt;24 hrs with a max price not-to-exceed.
              </ListItem>
              <ListItem>
                We provide an exact price at time of inspection
              </ListItem>
            </List>
          </Typography>
        </Grid>
          <Button variant="contained" sx={{ borderRadius: 10, height: 56, backgroundColor: "#c9a32c", width: '100%' }}>
            <Typography fontWeight={600}>
              Get Quote
            </Typography>
          </Button>
        <Grid>
          <Grid container>
            <Grid xs={12}>
              <Typography variant="h5" paddingTop={theme.spacing(8)}>
                Roof Calculator
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography variant="body1" align="right" paddingX={theme.spacing(4)}>
                $20/sq ft
              </Typography>
            </Grid>
            <Grid xs={12} align="right" padding="16px 32px 32px 32px"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
              }}>
              <Typography variant="h5">
                X
              </Typography>
              <TextField
                variant="filled"
                type="number"
                label="Roof sq ft"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default GetQuote;