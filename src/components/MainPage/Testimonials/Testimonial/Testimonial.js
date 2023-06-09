import { ReactComponent as Star } from '../../../../assets/icons/star.svg';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Testimonial({ text, reviewerName }) {
  const theme = useTheme();

  return (
    <Card elevation={24} sx={{ height: "36rem", border: "solid 2px #062841", borderRadius: 5 }}>
      <div className='testimonial-title'>
        <Typography variant="h5" color="#062841" align="center" paddingTop="3rem">
          {reviewerName}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', padding: theme.spacing(4) }}>
          <Star className='starIcon' fill={'#c9a32c'} />
          <Star className='starIcon' fill={'#c9a32c'} />
          <Star className='starIcon' fill={'#c9a32c'} />
          <Star className='starIcon' fill={'#c9a32c'} />
          <Star className='starIcon' fill={'#c9a32c'} />
        </div>
      </div>

        <blockquote style={{
          ...theme.typography.body1,
          fontSize: '1.3rem',
          fontStyle: 'italic',
          paddingLeft: theme.spacing(6),
          paddingRight: theme.spacing(6),
        }}>
          &quot;{text}&quot;
        </blockquote>
    </Card>
  );
}
