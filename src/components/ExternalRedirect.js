import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

function ExternalRedirect({ headerText, bodyText, disclaimerText, buttonText, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            justifyContent: 'space-around',
            alignItems: 'center',
            '& > :not(style)': {
              width: 400,
              mt: {md: 20},
            },
          }}
        >
          <Paper elevation={3} sx={{
              height: 400,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'column',
              mt: {xs: 14},
              '& > :not(style)': {
                my: 4,
                mx: 4,
              },
            }}
          >
            <Typography variant='h3'>
              {headerText}
            </Typography>
            <Typography variant='body1'>
              {bodyText}
            </Typography>
          </Paper>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems:'center',
              flexDirection: 'column',
              height: {xs: 100, md: 400},
              mt: {xs: 8},
            }}
          >
            <Button variant='contained' color='secondary' sx={{
                mt: 3,
                textDecoration: 'none',
                textTransform: 'none',
              }}
            >
              <Typography variant='h5'>{buttonText}</Typography>
            </Button>
            <Typography variant='caption' align='center' sx={{
                fontStyle: 'oblique',
                my: 2,
                width: 500,
              }}
            >
              {disclaimerText}
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );  
}

export default ExternalRedirect;