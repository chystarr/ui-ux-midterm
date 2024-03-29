import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import background from './img/background.jpg';

function Home({ theme }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{overflow: 'clip'}}>
        <CssBaseline />
        <Grid container rowSpacing={20} sx={{
            height: '100vh',
            m: 0,
            overflow: 'clip',
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Grid item xs={12} sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignContent: 'flex-start',
            }}
          >
            <Box sx={{
                ml: {xs: '6vh', md: '12vh'},
                mt: {xs: '0vh', md: '2vh'},
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <Typography variant='h3' align='center'>
                NYC Frog Clinic
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignContent: 'flex-end'
            }}
          >
            <Box sx={{
                  mr: {xs: '24vh', md: '16vh'},
                  mb: {xs: '6vh', md: '13vh'},
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
              }}
            >
              <Typography variant='body2' align='center'>
                695 Park Ave
              </Typography>
              <Typography variant='body2' align='center'>
                New York, NY  10065
              </Typography>
              <Typography variant='body2' align='center'>
                (555) 555-5555
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );  
}

export default Home;