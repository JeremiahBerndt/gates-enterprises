import { useState, useEffect } from 'react';
import Image from 'mui-image';
import { CircularProgress, Stack, Typography, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import hailroof from '../../assets/images/hailroof.png';
import { useContentful } from '../../util/hooks';
import BlogEntry from './BlogEntry';

export default function RoofFaq({ name }) {
  const theme = useTheme();
  const [blogs, setBlogs] = useState([]);
  const { getBlogPosts } = useContentful();

  useEffect(() => {
    getBlogPosts()
      .then((res) => {
        setBlogs(res.items);
      })
      .catch((e) => {
        console.error(e);
      })
  }, [])

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions and Roofing Info</title>
        <meta name="description" content="FAQs, blog, and information on roofing, hail, and insurance in Colorado." />
        <link rel="canonical" href="https://www.gatesroof.com/roof-faq" />
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
            src={hailroof}
            height="100%"
            width="100%"
            fit="cover"
            bgColor="inherit"
            style={{ zIndex: '-1', opacity: '0.3', position: 'absolute' }}
          />
          <Typography variant="h1" align="center"
            sx={{
              position: 'absolute',
              fontSize: '3rem',
              [theme.breakpoints.up('sm')]: {
                fontSize: '6rem'
              }
            }}>
            Roof FAQ and Info
          </Typography>
        </div>
        {blogs.length > 0
          ? <Stack sx={{
            backgroundColor: 'white',
            display: 'grid',
            fontSize: '6rem',
            gridTemplateColumns: '1fr',
            [theme.breakpoints.up('md')]: {
              gridTemplateColumns: '1fr 1fr',
            }
          }}>
            {blogs.map(({ fields, sys }) => {
              const image = fields.blogImage.fields;
              const title = fields.blogHeadline.content[0].content[0].value;
              return (
                <BlogEntry image={image} title={title} id={sys.id} key={sys.id} />
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
