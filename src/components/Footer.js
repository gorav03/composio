import { Box, Typography, Grid, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#121212',
        color: '#aaa',
        padding: '40px 100px',
        marginTop: 'auto',
        width: '100%', 
        position: 'relative', 
        zIndex: 1, 
        marginTop: 'auto',
       
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
     
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Composio
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            Building for AI across continents ✏️
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
            <Link href="#" color="inherit">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" color="inherit">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link href="#" color="inherit">
              <i className="fab fa-github"></i>
            </Link>
            <Link href="#" color="inherit">
              <i className="fab fa-discord"></i>
            </Link>
            <Link href="#" color="inherit">
              <i className="fas fa-envelope"></i>
            </Link>
          </Box>
        </Grid>

        {/* Resource Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Resources
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            <Link href="#" color="inherit" underline="hover">
              Blog
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover">
              Change Log
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover">
              Support
            </Link>
          </Typography>
        </Grid>

        {/* Product Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Product
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            <Link href="#" color="inherit" underline="hover">
              Composio
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover">
              Pricing
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover">
              Startup Program
            </Link>
          </Typography>
        </Grid>

        {/* Company Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Company
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            <Link href="#" color="inherit" underline="hover">
              Careers
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover">
              Contact
            </Link>
          </Typography>
        </Grid>

        {/* Developers Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Developers
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            <Link href="#" color="inherit" underline="hover">
              Documentation
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover">
              GitHub
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover">
              Changelog
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
