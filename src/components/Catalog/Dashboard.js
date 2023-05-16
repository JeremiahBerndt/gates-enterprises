import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Deposits from './Deposits';
import Orders from './Orders';
import Image from 'mui-image';
import { useEffect } from 'react';
import ServicesNavigation from './ServicesNavigation';

const wtf = // WIDGET.JS.TEMPLATE FILE FROM MONOLITH
  function () {
    var loadScript = function (url, callback) {
      // Adding the script tag to the head as suggested before
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.onreadystatechange = callback;
      script.onload = callback;
      head.appendChild(script);
    };

    var loadiFrameResizer = function () {
      document.head.insertAdjacentHTML("beforeend", '<style>iframe{width: 1px;min-width: 100%;}</style>')
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.6/iframeResizer.min.js");
    }

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/pym/1.3.2/pym.v1.min.js');
    loadiFrameResizer();

    var bootstrap = function () {
      if ((typeof iFrameResize == 'undefined') || (typeof pym == 'undefined')) {
        waitForiFrameResize();
      } else {
        init();
      }
    };

    var waitForiFrameResize = function () {
      setTimeout(function () {
        bootstrap();
      }, 20);
    };

    var generateSiteDataParams = function (firstChar) {
      var siteDomain = encodeURIComponent(window.location.hostname) || "";
      var sitePath = encodeURIComponent(window.location.pathname) || "";
      var siteURL = encodeURIComponent(window.location.href) || "";

      return (firstChar || '&') + 'sitedomain=' + siteDomain + '&sitepath=' + sitePath + '&siteurl=' + siteURL;
    }

    var init = function () {
      //SHINGLES
      if (document.querySelector('div.oc_shingle_view')) {
        var widget_links = document.querySelectorAll('div.oc_shingle_view');
        // Alias requests for old slugs / misspellings
        var aliases = {
          'trudefinition-duration': ['trudefintion-duration'],
          'trudefinition-duration-cool': ['duration-cool']
        };
        var analyticTrackingData = "&widget=true&sitedomain=" + window.location.host + "&sitepath=" + window.location.pathname + "&siteurl=" + window.location.href;

        for (var i = 0; i < widget_links.length; i++) {
          var link = widget_links[i];
          var id = 'oc_shingle_view_' + i;

          link.setAttribute('id', id);
          var shingle = link.getAttribute('data-shingle') || 'trudefinition-duration';
          var view = link.getAttribute('data-view') || 'house';
          var layout = link.getAttribute('data-layout') || 'row';
          var style = link.getAttribute('data-style') || 'default';
          var allowed_colors = link.getAttribute('data-allowed-colors') || '';

          for (var key in aliases) {
            if (aliases[key].indexOf(shingle) > -1) {
              shingle = key;
              break;
            }
          }

          // Fix mispelling on some client pages
          if (shingle === 'trudefintion-duration') {
            shingle = 'trudefinition-duration';
          }

          var src = 'https://www.owenscorning.com/public_widgets/shingle/' + shingle + '?view=' + view + '&style=' + style + '&layout=' + layout + '&allowedcolors=' + allowed_colors + analyticTrackingData;
          link.innerHTML = '<iframe id="my' + id + '" src="' + src + '" frameBorder="0" height="100%"></iframe>';
          // iFrameResize({
          //   log: true,
          //   minHeight: 400,
          // }, '#my' + id);
        }

      }

      //DESIGN AND INSPIRE
      if (document.querySelector('div.oc_design_and_inspire')) {
        //DESIGN AND INSPIRE
        var design_and_inspire_links = document.querySelectorAll('div.oc_design_and_inspire');
        var analyticTrackingData = "?widget=true&sitedomain=" + window.location.host + "&sitepath=" + window.location.pathname + "&siteurl=" + window.location.href;
        for (var i = 0; i < design_and_inspire_links.length; i++) {
          var link = design_and_inspire_links[i];
          var id = 'oc_design_and_inspire_' + i;
          link.setAttribute('id', id);
          var slide_delay = link.getAttribute('slide-delay') || '4000';

          var src = 'https://www.owenscorning.com/public_widgets/design_and_inspire' + analyticTrackingData;
          link.innerHTML = '<iframe id="my' + id + '" src="' + src + '" frameBorder="0"></iframe>';
          // iFrameResize({
          //   log: true,
          //   minHeight: 400,
          // }, '#my' + id);
        }

      }

      //TOTAL PROTECTION ROOFING SYSTEM
      if (document.querySelector('div.total_protection_roofing_system')) {
        //TOTAL PROTECTION ROOFING SYSTEM
        var tprs_links = document.querySelectorAll('div.total_protection_roofing_system');
        var analyticTrackingData = "?widget=true&sitedomain=" + window.location.host + "&sitepath=" + window.location.pathname + "&siteurl=" + window.location.href;
        for (var i = 0; i < tprs_links.length; i++) {
          var link = tprs_links[i];
          var id = 'total_protection_roofing_system_' + i;
          link.setAttribute('id', id);
          var src = 'https://www.owenscorning.com/public_widgets/tprs' + analyticTrackingData;
          link.innerHTML = '<iframe id="my' + id + '" src="' + src + '" frameBorder="0"></iframe>';
          // iFrameResize({
          //   log: true,
          //   minHeight: 400,
          // }, '#my' + id);
        }

      }

      // WARRANTY
      if (document.querySelector('div.oc_warranty')) {
        var warranty_links = document.querySelectorAll('div.oc_warranty');
        for (var i = 0; i < warranty_links.length; i++) {
          var link = warranty_links[i];
          var id = 'oc_warranty_' + i;
          link.setAttribute('id', id);

          var standard, tprs, systemProtection, preferredProtection, platinumProtection;
          var standard = link.getAttribute('data-standard-coverage') || 'false';
          var tprs = link.getAttribute('data-tprs-coverage') || 'false';
          var systemProtection = link.getAttribute('data-system-protection') || 'false';
          var preferredProtection = link.getAttribute('data-preferred-protection') || 'false';
          var platinumProtection = link.getAttribute('data-platinum-protection') || 'false';

          if (tprs === 'false' && systemProtection === 'false' && preferredProtection === 'false' && platinumProtection === 'false') {
            standard = true;
          }
          var src = 'https://www.owenscorning.com/public_widgets/warranty' + generateSiteDataParams('?') + '&standard=' + standard + '&tprs=' + tprs + '&systemProtection=' + systemProtection + '&preferredProtection=' + preferredProtection + '&platinumProtection=' + platinumProtection;
          link.innerHTML = '<iframe id="my' + id + '" src="' + src + '" frameBorder="0"></iframe>';
          // iFrameResize({
          //   log: true,
          //   minHeight: 400,
          // }, '#my' + id);
        }

      }

      // DESIGN EYE Q
      if (document.getElementById("visualizer")) {
        //Design EyeQ®
        var id = 'visualizer';
        var design_eyeq = document.getElementById(id);
        var zip = design_eyeq.dataset.zip;
        var analyticTrackingData = '?widget=true&zip=' + zip + '&sitedomain=' + window.location.host + '&sitepath=' + window.location.pathname + '&siteurl=' + window.location.href;
        var src = 'https://roofvisualizer.owenscorning.com/' + analyticTrackingData;
        design_eyeq.innerHTML = '<iframe id="myVisualizer" src="' + src + '" frameBorder="0"></iframe>';
        // iFrameResize({
        //   log: true,
        //   minHeight: 400,
        // }, '#myVisualizer');

      }
    };

    document.addEventListener('DOMContentLoaded', bootstrap);
    if (document.readyState !== 'loading') {
      setTimeout(bootstrap, 1);
    }
  };

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: 60,
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    wtf();
  }, [])

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Toolbar>
          <Divider />
          <ServicesNavigation />
        </Drawer>
        <Box
          component="section"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container sx={{ mt: 4, mb: 4, height: '100%' }}>
            <Grid container spacing={3} sx={{ height: '100%' }}>
              <Grid item xs={12} md={8} lg={9} sx={{ height: '100%' }}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {/* <Chart /> */}
                  <div
                    class="oc_shingle_view"
                    data-shingle="trudefinition-duration"
                    data-view="house"
                    data-layout="stacked"
                    data-style="default"
                    style={{ height: "100%" }}
                  >
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider >
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
