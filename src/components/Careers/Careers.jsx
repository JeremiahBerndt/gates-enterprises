import { useState, useEffect } from 'react';
// import { useTheme } from '@material-ui/core';
import Image from 'mui-image';
import { CircularProgress, Stack, Typography, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import roofCareer from '../../assets/images/roofCareer.png';
import { useContentful } from '../../util/hooks';
import JobEntry from './JobEntry';

export default function Careers({ name }) {
  const theme = useTheme();
  const [jobs, setJobs] = useState([]);
  const { getJobs } = useContentful();

  useEffect(() => {
    getJobs()
      .then((res) => {
        console.log('res', res)
        setJobs(res.items);
      })
      .catch((e) => {
        console.error(e);
      })
  }, [])

  return (
    <>
      <Helmet>
        <title>Careers available at Gates Enterprises</title>
        <meta name="description" content="A complete list of open jobs at Gates Enterprises across all markets" />
        <link rel="canonical" href="https://www.gatesroof.com/careers" />
      </Helmet>
      <Stack
        sx={{
          '> div > div > img': {
            width: '100%',
            objectFit: 'cover'
          }
        }}>
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: theme.spacing(32)
        }}>
          <Image
            top='0'
            alt="roof being hit by hail"
            src={roofCareer}
            height="100%"
            width="100%"
            fit="cover"
            bgColor="inherit"
            style={{ zIndex: '-1', opacity: '0.3', position: 'absolute' }}
          />
          <Typography variant="h1" align="center"
            sx={{
              position: 'absolute',
              fontSize: '5rem',
              [theme.breakpoints.up('sm')]: {
                fontSize: '6rem'
              }
            }}>
            Careers
          </Typography>
        </div>
        {jobs.length > 0
          ? <Stack sx={{ backgroundColor: 'tertiary.main', display: 'grid' }}>
            {jobs.map(({ fields, sys }) => {
              const image = fields.jobImage.fields;
              const title = fields.jobTitle;
              const briefDescription = fields.briefJobDescription;
              const description = fields.jobDescription;
              return (
                <JobEntry image={image} title={title} id={sys.id} key={sys.id} briefDescription={briefDescription} description={description}/>
              )
            })}
          </Stack>
          : <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress sx={{ p: '10rem' }} size={32} color="secondary" />
          </div>}
      </Stack>
    </>
  );
}
