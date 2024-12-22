import { Drawer, List, ListItem, ListItemText, Typography, Box, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
import { Star, Dashboard, DesignServices, BarChart, Group, Code, SportsEsports, LibraryBooks, TaskAlt, Checklist, People } from '@mui/icons-material';

const drawerWidth = 240;


const ActiveListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: '#6b4fd6',
  borderRadius: '12px',
  margin: '6px 0',
  '& .MuiListItemText-primary': {
    color: '#fff',
    fontWeight: 'bold',
  },
}));

const InactiveListItem = styled(ListItem)(({ theme }) => ({
  margin: '6px 0',
  borderRadius: '12px',
  '&:hover': {
    backgroundColor: '#2b2b2b',
  },
  '& .MuiListItemText-primary': {
    color: '#fff',
  },
}));

const categories = [
  { name: 'Popular', icon: <Star /> },
  { name: 'CRM', icon: <Dashboard /> },
  { name: 'Marketing', icon: <Dashboard /> },
  { name: 'Design', icon: <DesignServices /> },
  { name: 'Analytics', icon: <BarChart /> },
  { name: 'Collaboration', icon: <Group /> },
  { name: 'Dev Tools', icon: <Code /> },
  { name: 'Gaming', icon: <SportsEsports /> },
  { name: 'Knowledge Base', icon: <LibraryBooks /> },
  { name: 'Productivity', icon: <TaskAlt /> },
  { name: 'Project Management', icon: <Checklist /> },
  { name: 'Social', icon: <People /> },
];

export default function Sidebar({ activeCategory }) {
  return (
    <Drawer
      variant="permanent"
      anchor="center"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#121212',
          color: '#fff',
          height: 'calc(100vh)', 
          padding: '16px 25px',
          borderRight: '1px solid #444',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            margin: '8px 0',
            padding: '8px 16px',
            color: '#aaa',
            fontWeight: 'bold',
            fontSize: '14px',
          }}
        >
          Categories
        </Typography>

      
        <List
          sx={{
            flexGrow: 1, 
            overflowY: 'auto', 
            maxHeight: 'calc(100vh - 128px)', 
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#444',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#121212',
            },
          }}
        >
          {categories.map((category) =>
            category.name === activeCategory ? (
              <ActiveListItem button key={category.name}>
                <ListItemIcon sx={{ color: '#fff' }}>{category.icon}</ListItemIcon>
                <ListItemText primary={category.name} />
              </ActiveListItem>
            ) : (
              <InactiveListItem button key={category.name}>
                <ListItemIcon sx={{ color: '#aaa' }}>{category.icon}</ListItemIcon>
                <ListItemText primary={category.name} />
              </InactiveListItem>
            )
          )}
        </List>
      </Box>
    </Drawer>
  );
}
