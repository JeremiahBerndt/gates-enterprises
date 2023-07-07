import { Grid, Typography } from "@mui/material"
import { Card, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./BlogEntry.css";

const BlogEntry = ({ image, title, id }) => {
  const theme = useTheme();

  return (
    <Card elevation={8} style={{ margin: '1rem' }}>
      <Grid container sx={{ p: "1rem" }}>
        <Grid item lg={4} sx={{
          [theme.breakpoints.up('lg')]: {
            width: '8rem',
            height: '8rem',
            px: '3rem',
            py: '1rem'
          }
        }}>
          <img src={image.file.url} alt={image.title} width="100%" height="100%" style={{ objectFit: 'cover' }}/>
        </Grid>
        <Grid item lg={8} sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          [theme.breakpoints.up('lg')]: {
            py: '1rem'
          }
        }}>
          <Link to={'./roofblog/' + id}>
            <Typography variant="h5" color="primary" className="faqLink" sx={{
              fontSize: 'initial',
              [theme.breakpoints.up('lg')]: {
                fontSize: '1.5rem'
              }
            }}>
              {title}
            </Typography>
          </Link>
          <Typography>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default BlogEntry;