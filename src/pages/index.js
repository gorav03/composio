import { Box, Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import IntegrationCard from '../components/IntegrationCard';
import Navbar from '../components/Navbar';
import { IntroSection } from '../components/Navbar'; // Add IntroSection import
import Footer from '../components/Footer'; // Import Footer if not already added

export default function Home() {
  const activeCategory = 'Popular';

  const cardsData = [
    {
      title: 'github',
      description: 'A platform for version control and collaboration, allowing you to work together on projects.',
      tags: ['OAUTH2'],
    },
    {
      title: 'jira',
      description: 'A tool for bug tracking, issue tracking, and agile project management.',
      tags: ['API_KEY'],
    },
    {
      title: 'trello',
      description: 'A web-based, kanban-style, list-making application.',
      tags: ['OAUTH1', 'BEARER_TOKEN'],
    },
    {
      title: 'slackbot',
      description: 'Slack is a channel-based messaging platform for team collaboration.',
      tags: ['OAUTH2', 'BEARER_TOKEN'],
    },
    {
      title: 'discord',
      description: 'An instant messaging and VoIP social platform.',
      tags: ['OAUTH2', 'BEARER_TOKEN'],
    },
    {
      title: 'trello',
      description: 'A web-based, kanban-style, list-making application.',
      tags: ['OAUTH1', 'BEARER_TOKEN'],
    },
    {
      title: 'github',
      description: 'A platform for version control and collaboration, allowing you to work together on projects.',
      tags: ['OAUTH2'],
    },
    {
      title: 'jira',
      description: 'A tool for bug tracking, issue tracking, and agile project management.',
      tags: ['API_KEY'],
    },
    {
      title: 'trello',
      description: 'A web-based, kanban-style, list-making application.',
      tags: ['OAUTH1', 'BEARER_TOKEN'],
    },
    {
      title: 'github',
      description: 'A platform for version control and collaboration, allowing you to work together on projects.',
      tags: ['OAUTH2'],
    },
    {
      title: 'jira',
      description: 'A tool for bug tracking, issue tracking, and agile project management.',
      tags: ['API_KEY'],
    },
    {
      title: 'trello',
      description: 'A web-based, kanban-style, list-making application.',
      tags: ['OAUTH1', 'BEARER_TOKEN'],
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box sx={{ display: 'flex', flex: 1, position: 'relative', top: '64px' }}>
        {/* Sidebar */}
        <Sidebar activeCategory={activeCategory} />

        {/* Scrollable Cards and Footer */}
        <Box
  sx={{
    flexGrow: 1,
     // Enable scrolling only for this section
    height: 'calc(100vh - 64px)', // Account for Navbar height
    paddingBottom: '64px', // Optional: Add space for Footer if it overlaps
    display: 'flex',
    
    flexDirection: 'column',
  }}
>
          <IntroSection />

          {/* Cards Grid */}
          <Grid
            container
            spacing={2}
            sx={{
              padding: 3,
              width: '100%',
              maxWidth: '1400px',
              margin: '0 auto',
            }}
          >
            {cardsData.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                <IntegrationCard {...card} />
              </Grid>
            ))}
          </Grid>

          {/* Footer */}
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
