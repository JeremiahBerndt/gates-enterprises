import { Grid, Typography, Stack, CircularProgress } from "@mui/material"
import { useState, useEffect } from "react";
import { useContentful } from "../../util/hooks";
import { useParams } from "react-router-dom";
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import moment from "moment";

const BlogPage = () => {
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

  console.log("blog post", blogPost);
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
  console.log('moment', moment(blogPost.sys.createdAt))
  return (
    <Stack sx={{ backgroundColor: 'white' }}>
      <Grid container sx={{ backgroundColor: '#c9a32c;' }}>
        <Grid item lg={8} pl="10rem">
          <Typography variant="h3" fontWeight="bold" py="4rem" color="primary">
          <Typography variant="h6">
            Gates Enterprises &nbsp;
          {moment(blogPost.sys.createdAt).format('MMMM DD, YYYY')}
          </Typography>
            {blogPost.fields.blogTitle}
          </Typography>
        </Grid>
        <Grid item lg={4} pr="10rem" sx={{ maxHeight: '20rem' }}>
          <img src={blogPost.fields.blogImage.fields.file.url} width="100%" height="100%" style={{ objectFit: 'contain' }}></img>
        </Grid>
      </Grid>
      <div style={{ padding: '2rem 10rem 2rem 10rem' }}>
        {blogBody}
      </div>
    </Stack>
  );
}

export default BlogPage;