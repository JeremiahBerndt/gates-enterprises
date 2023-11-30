import { useEffect } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import Image from "mui-image";
import diagramDrawing from "../../assets/images/diagramDrawing.jpg"
import { Helmet } from 'react-helmet-async';

const RoofQuote = () => {
  const theme = useTheme();

  useEffect(() => {
    const script = document.createElement('script');
    const insertHere = document.getElementById('placeForRoofle')
    script.src = "https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=Y3dZuVyicM3rboTdAfQ_S";
    script.async = true;
    insertHere.appendChild(script);

    return () => {
      insertHere.removeChild(script);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Get an Instant Roof Quote in Colorado</title>
        <meta name="description" content="We use roof dimensions and your shingle selection to send you a cost estimate." />
        <link rel="canonical" href="https://www.gatesroof.com/get-a-quote" />
      </Helmet>
      <Stack>
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: theme.spacing(32)
        }}>
          <Image
            top="0"
            alt="diagram or blueprint of a house"
            src={diagramDrawing}
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
            Get a Roof Quote
          </Typography>
        </div>
        <div id="placeForRoofle"></div>
      </Stack>
    </>
  );
}

export default RoofQuote;