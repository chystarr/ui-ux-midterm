import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
  const bodyText = "Dr. Anura holds a Doctor of Veterinary Medicine degree from NYU, and has been a leader in the field of frog medicine for over 20 years. She opened the NYC Frog Clinic in 2014 in order to provide accessible medical care to the city's favorite amphibians. Our clinic accepts most major types of pet insurance, and our staff is well-versed in caring for hundreds of different common pet frog species.";
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
              height: 400,
              mt: {md: 20},
            },
          }}
        >
          <Paper variant='outlined' sx={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignContent: 'center',
              flexDirection: 'column',
              mt: {xs: 14},
              '& > :not(style)': {
                mx: 4,
              },
            }}
          >
            <Typography variant='h3'>
              About
            </Typography>
            <Typography variant='body1'>
              {bodyText}
            </Typography>
          </Paper>
          <Paper variant='outlined' sx={{
              mt: {xs: 8},
            }}
          >
            photo here
          </Paper>
        </Box>
      </Container>
    </div>
  );  
}

export default About;