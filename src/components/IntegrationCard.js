import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material';

export default function IntegrationCard({ title, description, tags }) {
    return (
        
      <Card
        sx={{
          backgroundColor: '#1e1e1e',
          color: '#fff',
          borderRadius: '16px',
          boxShadow: 4,
          width: '100%',
           height: '100%',
          maxWidth: 400, 
          margin: '0', 
          display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      
         
          
        }}
      >
        <CardContent>
          <Box sx={{ mb: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem' }}> {/* Reduce font size */}
              {title}
            </Typography>
          </Box>
  
          <Typography variant="body2" color="grey.400" sx={{ mb: 2, fontSize: '0.875rem' }}> {/* Smaller text */}
            {description}
          </Typography>
  
          <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="large"
                sx={{
                  backgroundColor: '#3a3a3a',
                  color: '#fff',
                  fontSize: '10px',
                }}
              />
            ))}
          </Box>
  
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: '#6b4fd6',
              color: '#fff',
              textTransform: 'none',
              borderRadius :'10px',
              fontSize: '0.75rem', // Adjust button font size
              '&:hover': { backgroundColor: '#5a3fcf' },
            }}
          >
            Try it →
          </Button>
        </CardContent>
      </Card>
    );
  }
  