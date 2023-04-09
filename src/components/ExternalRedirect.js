import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ExternalRedirect({ headerText, bodyText, disclaimerText, buttonText }) {
  return (
    <div> {/* Replace outer div element with ThemeProvider component later */}
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            justifyContent: 'space-around',
            alignItems: 'center',
            '& > :not(style)': {
              width: 400,
              mt: {xs: 6, md: 11},
            },
          }}
        >
          <Paper variant='outlined' sx={{
              height: 400,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'column',
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
            }}
          >
            <Button variant='contained'>
              <Typography variant='h5'>{buttonText}</Typography>
            </Button>
            <Typography variant='caption' sx={{
                fontStyle: 'oblique',
                my: 2,
              }}
            >
              {disclaimerText}
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );  
}

export default ExternalRedirect;