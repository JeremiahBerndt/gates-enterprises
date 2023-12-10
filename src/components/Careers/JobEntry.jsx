import { useState } from "react";
import { Grid, Typography, Button, Card } from "@mui/material"
import { useTheme } from "@material-ui/core";
import "./JobEntry.css";
import JobModal from "./JobModal";
import ContactForm from "../ContactForm/ContactForm";

const BlogEntry = ({ image, title, description, briefDescription, id }) => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayJobApp, setDisplayJobApp] = useState(false);

  const toggleJobApp = () => {
    setDisplayJobApp(!displayJobApp)
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Card elevation={8} sx={{
      [theme.breakpoints.up('lg')]: { m: '2rem' }
    }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '2rem',
          [theme.breakpoints.up('lg')]: {
            p: '4rem 4rem 4rem 8rem',
            '> img': {
              height: '28rem'
            }
          }
        }}>
          <img src={image.file.url} alt={image.title}
            style={{
              width: '100%',
              objectFit: 'cover',
            }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          p: '2rem',
          pt: 0,
          [theme.breakpoints.up('lg')]: { p: '4rem 8rem 4rem 4rem' }
        }}>
          <Typography variant="h4" color="primary.main">
            {title}
          </Typography>
          <Typography variant="body1" color="black">
            {briefDescription}
          </Typography>
          <Button
            style={{ padding: '1rem 4rem 1rem 4rem', backgroundColor: '#c9a32c', borderRadius: '10px' }}
            onClick={toggleModal}
          >
            Job Description
          </Button>
          <JobModal description={description} toggleModal={toggleModal} isModalOpen={isModalOpen} />
          <Button
            onClick={toggleJobApp}
            style={{ padding: '1rem 4rem 1rem 4rem', backgroundColor: '#062841', borderRadius: '10px', color: 'white' }}>
            Apply Now
          </Button>
          {displayJobApp && <ContactForm
            displayContactForm={toggleJobApp}
            src={'https://forms.zohopublic.com/nstovall/form/PMJobApplication1/formperma/lvqPKgJVY65CvSIehWKlUNEpc0FZbkj5JTHtdF8npRs'}
            title={'Job application form'}
          />}
        </Grid>
      </Grid>
    </Card>
  );
}

export default BlogEntry;