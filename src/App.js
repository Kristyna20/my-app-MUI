import './App.css';
import { Card, Box, Avatar, Stack, Typography, IconButton, Divider, Switch } from '@mui/material';
import { grey } from '@mui/material/colors';
import Edit from '@mui/icons-material/Edit';
import LocationOn from '@mui/icons-material/LocationOn';
import { Chip } from '@mui/material';


function App() {
  return (
    <Card>
  <Box sx={{ p: 2, display: 'flex' }}>
    <Avatar variant="rounded" src="avatar1.jpg" />
    <Stack spacing={0.5}>
      <Typography fontWeight={700}>Michael Scott</Typography>
      <Typography variant="body2" color="text.secondary">
      <LocationOn sx={{color: grey[500]}} /> Scranton, PA
      </Typography>
    </Stack>
    <IconButton>
      <Edit sx={{ fontSize: 14 }} />
    </IconButton>
  </Box>
  <Divider />
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
  >
    <Chip>Active account</Chip>
    <Switch />
  </Stack>
</Card>
  );
}

export default App;
