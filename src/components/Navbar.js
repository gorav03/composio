import { AppBar, Toolbar, Typography, Button, Box, Grid, TextField } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#121212',
        boxShadow: 'none',
        padding: '0 24px',
        zIndex : (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' , marginLeft:'100px' }}
        >
          Composio
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button color="inherit" sx={{ fontWeight: 500, textTransform: 'none' }}>
            Docs
          </Button>
          <Button color="inherit" sx={{ fontWeight: 500, textTransform: 'none' }}>
            Pricing
          </Button>
          <Button color="inherit" sx={{ fontWeight: 500, textTransform: 'none' }}>
            Tools
          </Button>
          <Button color="inherit" sx={{ fontWeight: 500, textTransform: 'none' }}>
            Blog
          </Button>
          <Button color="inherit" sx={{ fontWeight: 500, textTransform: 'none' }}>
            Discord
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              borderColor: '#fff',
              textTransform: 'none',
              fontWeight: 500,
              '&:hover': { backgroundColor: '#2b2b2b' },
            }}
          >
            Book a call
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#6b4fd6',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 500,
              '&:hover': { backgroundColor: '#5a3fcf' },
            }}
          >
            Signup →
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}


export function IntroSection() {
  return (
    <Box sx={{ padding: '24px', textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
        Connect 200+ tools to AI Agents using Composio
      </Typography>
      <Typography variant="body1" sx={{ color: '#aaa', marginBottom: '24px' }}>
        Select one of the below templates and deploy your AI Agent in under 5 minutes using Composio.
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search all usecases by name"
        sx={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#1e1e1e',
          borderRadius: '8px',
          input: { color: '#fff', padding: '12px' },
          fieldset: { borderColor: '#444' },
        }}
      />
    </Box>
  );
}
