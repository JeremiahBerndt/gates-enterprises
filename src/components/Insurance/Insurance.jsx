// import { useRef, useState, useEffect } from 'react';
// import { useTheme } from '@material-ui/core';
// import Image from 'mui-image';
// import { Grid, Stack, Typography } from '@mui/material';
// import services from '../../assets/images/services.png';
// import hailroof from '../../assets/images/hailroof.png';
// import InsuranceSteps from './InsuranceSteps';
// import { slideFromLeft, slideFromRight, useIsVisible } from '../../util/animations';
// import { useContentful } from '../../util/hooks';

// export default function Insurance({ name }) {
//   const theme = useTheme();
//   const [blogs, setBlogs] = useState([]);
//   const { getBlogPosts } = useContentful();

//   useEffect(() => {
//     getBlogPosts()
//     .then((res) => {
//       console.log('blogsss', res)
//       setBlogs(res.items);
//     })
//     .catch((e) => {
//       console.error(e);
//     })
//   }, [])

//   return (
//     <>
//       <Stack
//         sx={{
//           '> div > div > img': {
//             width: '100%',
//             objectFit: 'cover'
//           }
//         }}>
//         <div style={{
//           position: 'relative',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: theme.spacing(32)
//         }}>
//           <Image
//             top='0'
//             src={hailroof}
//             height="100%"
//             width="100%"
//             fit="cover"
//             bgColor="inherit"
//             style={{ zIndex: '-1', opacity: '0.3', position: 'absolute' }}
//           />
//           <Typography variant="h1" align="center"
//             sx={{
//               position: 'absolute',
//               fontSize: '5rem',
//               [theme.breakpoints.up('sm')]: {
//                 fontSize: '6rem'
//               }
//             }}>
//             Hail Damage
//           </Typography>
//         </div>
//         <Stack>

//         </Stack>
//         {/* <Grid container backgroundColor='white'>
//           <Grid item xs={12} lg={6} sx={{
//             display: 'flex',
//             alignItems: 'center',
//             padding: '2rem',
//             [theme.breakpoints.up('lg')]: {
//               p: '8rem 4rem 8rem 8rem',
//             }
//           }}>
//             <img src={services} alt="Insurance" />
//           </Grid>
          

//         </Grid> */}
//       </Stack>
//     </>
//   );
// }
