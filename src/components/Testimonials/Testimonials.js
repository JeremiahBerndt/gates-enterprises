import './Testimonials.css';
import Testimonial from './Testimonial/Testimonial';
import { reviewOne, reviewTwo, reviewThree } from '../../util/reviews.js'
import Grid from '@mui/material/Unstable_Grid2';


export default function Testimonials({ name }) {
  return (
    <Grid container spacing={5} padding={8}>
      <Grid xs={4}>
        <Testimonial text={reviewOne.review} reviewerName={reviewOne.name} />
      </Grid>
      <Grid xs={4}>
        <Testimonial text={reviewTwo.review} reviewerName={reviewTwo.name} />
      </Grid>
      <Grid xs={4}>
        <Testimonial text={reviewThree.review} reviewerName={reviewThree.name} />
      </Grid>
    </Grid>
  );
}
