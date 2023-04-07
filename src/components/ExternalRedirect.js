import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function ExternalRedirect() {
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
              my: 6,
            },
          }}
        >
          <Paper variant='outlined' sx={{
              height: 400,
            }}
          >
            text here
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
            <p>Explanation</p>
            <Button>
              big button here
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );  
}

export default ExternalRedirect;