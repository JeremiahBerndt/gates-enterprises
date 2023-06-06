import './Testimonial.css';
import { ReactComponent as Star } from '../../../assets/icons/star.svg';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Testimonial({ text, reviewerName }) {
  return (
    <Card elevation={24} sx={{ height: "40rem", border: "solid 2px #062841", borderRadius: 5 }}>
      <div className='testimonial-title'>
        <Typography variant="h5" color="#062841" align="center" paddingTop="3rem">
          {reviewerName}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Star className='starIcon' fill={'#c9a32c'} />
          <Star className='starIcon' fill={'#c9a32c'} />
          <Star className='starIcon' fill={'#c9a32c'} />
          <Star className='starIcon' fill={'#c9a32c'} />
          <Star className='starIcon' fill={'#c9a32c'} />
        </div>
      </div>
      <blockquote className='mp-content-text'>&quot;{text}&quot;</blockquote>
    </Card>
  );
}
