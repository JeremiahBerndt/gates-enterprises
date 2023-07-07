import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, Stack, CircularProgress } from "@mui/material";
import { Helmet } from 'react-helmet-async';
import { useContentful } from "../../util/hooks";
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useTheme } from "@material-ui/core";
import moment from "moment";

const BlogPage = () => {
  const theme = useTheme();
  const { getBlogPost } = useContentful();
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState({});
  const [blogBody, setBlogBody] = useState(false);

  const nodeOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Typography variant="body1" fontSize="1.2rem" color="primary">{children}<br /><br /></Typography>,
      [BLOCKS.HEADING_6]: (node, children) => <Typography variant="h5" color="primary">{children}<br /><br /></Typography>,
    },
  };

  useEffect(() => {
    getBlogPost(id)
      .then((entry) => {
        setBlogPost(entry);
        const reactElems = documentToReactComponents(entry.fields.blogBody, nodeOptions);
        setBlogBody(reactElems);
      })
      .catch((e) => console.error(e))
  }, [])

  if (!blogPost.fields || !blogBody) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem' }}>
        <CircularProgress sx={{ p: '10rem' }} size={32} color="secondary" />
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{blogPost.fields.blogTitle}</title>
        <meta name="description" content={blogPost.fields.blogTitle} />
      </Helmet>
      <Stack sx={{ backgroundColor: 'white' }}>
        <Grid container sx={{ backgroundColor: '#c9a32c;' }}>
          <Grid item lg={8} sx={{
            p: '1rem',
            [theme.breakpoints.up('lg')]: {
              pl: "10rem"
            }
          }}>
            <Typography variant="h3" component="div" fontWeight="bold" py="4rem" color="primary" sx={{
              [theme.breakpoints.down('lg')]: {
                fontSize: "2rem"
              }
            }}>
              <Typography variant="h6">
                Gates Enterprises &nbsp;
                {moment(blogPost.sys.createdAt).format('MMMM DD, YYYY')}
              </Typography>
              {blogPost.fields.blogTitle}
            </Typography>
          </Grid>
          <Grid item lg={4} sx={{
            p: "1rem",
            maxHeight: '20rem',
            [theme.breakpoints.up('lg')]: {
              pr: "10rem"
            }
          }}>
            <img src={blogPost.fields.blogImage.fields.file.url} width="100%" height="100%" style={{ objectFit: 'contain' }}></img>
          </Grid>
        </Grid>
        <Grid sx={{
          p: '1rem',
          [theme.breakpoints.up('lg')]: {
            p: '2rem 10rem 2rem 10rem'
          }
        }}>
          {blogBody}
        </Grid>
      </Stack>
    </>
  );
}

export default BlogPage;