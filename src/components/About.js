import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function About() {
  const bodyText = "About the doctor, about the practice itself, etc.";
  return (
    <div> {/* Replace outer div element with ThemeProvider component later */}
      <p>Information about the doctor (how long have they been practicing, any certifications
      or specialties, where they went to school) and the practice itself. You can include
      photos of the “office” in this component.</p>

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
              my: 6,
            },
          }}
        >
          <Paper variant='outlined'>
            Header for this section here
            {bodyText}
          </Paper>
          <Paper variant='outlined'>
            photo here
          </Paper>
        </Box>
      </Container>
    </div>
  );  
}

export default About;